import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(request: NextRequest) {
  try {
    const { token, password } = await request.json();
    if (
      !token ||
      typeof password !== "string" ||
      password.trim().length === 0
    ) {
      return NextResponse.json(
        { error: "Password cannot be empty" },
        { status: 400 }
      );
    }

    // 🔹 Verify JWT first
    let decoded: any;
    try {
      decoded = jwt.verify(token, process.env.TOKEN_SECRET!);
    } catch (err) {
      return NextResponse.json(
        { error: "Invalid or expired token" },
        { status: 400 }
      );
    }

    // 🔹 Find user with this token in DB
    const user = await User.findOne({
      _id: decoded.id,
      resetToken: token,
      resetTokenExpiry: { $gt: Date.now() },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Invalid or expired token" },
        { status: 400 }
      );
    }

    // 🔹 Hash new password
    const hashedPassword = await bcryptjs.hash(password, 10);
    user.password = hashedPassword;

    // 🔹 Clear reset token fields
    user.resetToken = undefined;
    user.resetTokenExpiry = undefined;

    await user.save();

    return NextResponse.json({ message: "Password reset successful" });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
