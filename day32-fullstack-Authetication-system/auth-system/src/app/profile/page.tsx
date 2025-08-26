"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import React, { useState } from "react";
import { set } from "mongoose";
import { get } from "http";

export default function ProfilePage() {
  const router = useRouter();
  const [data, setData] = useState("nothing");
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };
  const getUserDetails = async () => {
    const res = await axios.get("/api/users/me");
    console.log(res.data);
    setData(res.data.data._id);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 via-indigo-600 to-pink-500 p-6">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl p-8 text-center">
        {/* Title */}
        <h1 className="text-3xl font-bold text-indigo-700 mb-6">Profile</h1>
        <hr className="mb-6 border-gray-300" />

        {/* Profile Content */}
        <p className="text-gray-700 mb-6">Welcome to your profile page 🎉</p>
        <h2>
          {data === "nothing" ? (
            "Nothing"
          ) : (
            <Link
              href={`/profile/${data}`}
              className="text-indigo-600 font-semibold hover:underline"
            >
              {data}
            </Link>
          )}
        </h2>

        {/* Buttons */}
        <div className="flex flex-col gap-4">
          <button
            onClick={logout}
            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
          >
            Logout
          </button>

          <button
            onClick={getUserDetails}
            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
          >
            GetUser Details
          </button>

          <button
            // onClick={() => router.back()} after creating home page it redirects here to home page
            className="w-full py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg shadow-md hover:bg-gray-300 transition duration-300"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
