"use client";
import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const onForgotPassword = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/forgotpassword", { email });

      console.log("Forgot Password success", response.data);
      toast.success(response.data?.message || "Reset link sent to your email!");
    } catch (error: any) {
      console.log(
        "Forgot Password failed",
        error.response?.data || error.message
      );
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 via-indigo-600 to-pink-500 p-6">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          Forgot Password
        </h1>
        <hr className="mb-6 border-gray-300" />

        {/* Email */}
        <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
          Email
        </label>
        <input
          className="w-full p-3 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-black"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />

        {/* Submit Button */}
        <button
          onClick={onForgotPassword}
          disabled={loading || email.length === 0}
          className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Sending..." : "Send Reset Link"}
        </button>
      </div>
    </div>
  );
}
