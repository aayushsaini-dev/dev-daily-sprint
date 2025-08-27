import nodemailer from "nodemailer";
import User from "@/models/userModel";
import jwt from "jsonwebtoken";

export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    // ------------------- 🔥 NEW: Generate JWT instead of bcrypt -------------------
    const token = jwt.sign(
      { id: userId },
      process.env.TOKEN_SECRET!, // use the same secret as in resetpassword.ts
      { expiresIn: "1h" } // you can change expiry e.g. "15m", "24h"
    );
    // ------------------------------------------------------------------------------

    // Save token + expiry in DB for extra safety (optional but good)
    const user = await User.findById(userId);
    if (user) {
      if (emailType === "VERIFY") {
        user.verifyToken = token;
        user.verifyTokenExpiry = Date.now() + 3600000; // 1h
      } else if (emailType === "RESET") {
        user.resetToken = token;
        user.resetTokenExpiry = Date.now() + 3600000; // 1h
      }
      await user.save();
    }

    // ------------------- Mail transporter -------------------
    const transporter = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 587,
      auth: {
        user: "4903839b21508a",
        pass: "f64d1daf20f6d9",
      },
    });

    // ------------------- Mail body -------------------
    const subject =
      emailType === "VERIFY" ? "Verify your email" : "Reset your password";

    const url =
      emailType === "VERIFY"
        ? `${process.env.DOMAIN}/verifyemail?token=${token}`
        : `${process.env.DOMAIN}/resetpassword?token=${token}`;

    const mailOptions = {
      from: "no-reply@yourapp.com",
      to: email,
      subject,
      html: `<p>Click <a href="${url}">here</a> to ${
        emailType === "VERIFY" ? "verify your email" : "reset your password"
      }. <br/> This link will expire in 1 hour.</p>`,
    };

    // ------------------- Send mail -------------------
    const mailResponse = await transporter.sendMail(mailOptions);
    return mailResponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
