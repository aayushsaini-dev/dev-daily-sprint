"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function VerifyEmailPage() {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const urlToken = urlParams.get("token");
    if (urlToken) {
      setToken(urlToken);
    } else {
      setError(true);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const verifyUserEmail = async () => {
      try {
        const res = await fetch("/api/users/verifymail", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token }),
        });

        const data = await res.json();
        if (res.ok) {
          setVerified(true);
        } else {
          setError(true);
          console.error(data);
        }
      } catch (err) {
        setError(true);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      verifyUserEmail();
    }
  }, [token]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-6">
      <h1 className="text-3xl font-bold mb-4">Verify Email</h1>

      {loading && <p className="text-gray-600">Verifying...</p>}

      {!loading && verified && (
        <div className="text-center">
          <h2 className="text-green-600 font-semibold text-xl mb-2">
            ✅ Email Verified Successfully!
          </h2>
          <Link
            href="/login"
            className="text-blue-500 underline hover:text-blue-700"
          >
            Go to Login
          </Link>
        </div>
      )}

      {!loading && error && (
        <div className="text-center">
          <h2 className="text-red-600 font-semibold text-xl mb-2">
            ❌ Verification Failed
          </h2>
          <p className="text-gray-600">Invalid or expired token.</p>
        </div>
      )}
    </div>
  );
}
