"use client";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReset = async () => {
    setLoading(true);
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (!token) {
      toast.error("No token found in URL");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/users/resetpassword", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password }),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success(data.message || "Password reset successful!");
      } else {
        toast.error(data.error || "Something went wrong");
      }
    } catch (err: any) {
      toast.error("Error resetting password");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 via-indigo-600 to-pink-500 p-6">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          Reset Password
        </h1>
        <hr className="mb-6 border-gray-300" />

        {/* Password */}
        <label
          htmlFor="password"
          className="block text-gray-700 font-medium mb-1"
        >
          New Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter new password"
          className="w-full p-3 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Button */}
        <button
          onClick={handleReset}
          disabled={loading || password.length < 6}
          className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Resetting..." : "Reset Password"}
        </button>
        {/* Back to Login */}
        <div className="text-center mt-4">
          <Link
            href="/login"
            className="text-indigo-600 font-semibold hover:underline"
          >
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
