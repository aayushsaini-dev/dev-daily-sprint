"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import { set } from "mongoose";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("Login success", response.data);
      router.push("/profile"); // here i will enter to dashboard of my dasboard of saas page
    } catch (error: any) {
      console.log("Login failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 via-indigo-600 to-pink-500 p-6">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          Login
        </h1>
        <hr className="mb-6 border-gray-300" />

        {/* Email */}
        <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
          Email
        </label>
        <input
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-black"
          type="text"
          id="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Enter your email"
        />

        {/* Password */}
        <label
          htmlFor="password"
          className="block text-gray-700 font-medium mb-1"
        >
          Password
        </label>
        <input
          className="w-full p-3 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-black"
          type="password"
          id="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Enter your password"
        />

        {/* Login Button */}
        <button
          onClick={onLogin}
          className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
        >
          Login here
        </button>
        {/* Forgot Password Link */}
        <div className="text-center mt-4">
          <Link
            href="/forgotpassword"
            className="text-indigo-600 font-semibold hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Signup Link */}
        <p className="text-center text-gray-600 mt-6">
          Don’t have an account?{" "}
          <Link
            href="/signup"
            className="text-indigo-600 font-semibold hover:underline"
          >
            Signup here
          </Link>
        </p>
      </div>
    </div>
  );
}
