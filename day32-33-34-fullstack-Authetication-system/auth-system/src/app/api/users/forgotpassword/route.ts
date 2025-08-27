import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";
import jwt from "jsonwebtoken";
import { sendEmail } from "@/helpers/mailer";

connect();

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // 🔹 Generate reset token
    const token = jwt.sign(
      { id: user._id },
      process.env.TOKEN_SECRET!,
      { expiresIn: "1h" } // 1 hour
    );

    // 🔹 Store token + expiry in DB
    user.resetToken = token;
    user.resetTokenExpiry = Date.now() + 3600000; // 1 hour
    await user.save();

    // 🔹 Send reset mail
    await sendEmail({
      email,
      emailType: "RESET",
      userId: user._id,
      token,
    });

    return NextResponse.json({
      message: "Password reset email sent successfully",
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
