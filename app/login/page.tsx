"use client";

import { useState } from "react";

export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-md rounded-2xl border bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold">Shiur Daled Mivtzoim</h1>

        <p className="mt-2 text-gray-600">
          {isSignUp
            ? "Create your account"
            : "Sign in to your account"}
        </p>

        {isSignUp && (
          <div className="mt-6">
            <label className="text-sm font-medium">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="mt-2 w-full rounded-lg border p-3"
            />
          </div>
        )}

        <div className="mt-6">
          <label className="text-sm font-medium">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="mt-2 w-full rounded-lg border p-3"
          />
        </div>

        <div className="mt-4">
          <label className="text-sm font-medium">Password</label>
          <input
            type="password"
            placeholder="Password"
            className="mt-2 w-full rounded-lg border p-3"
          />
        </div>

        <button className="mt-6 w-full rounded-lg bg-black px-5 py-3 text-white">
          {isSignUp ? "Create Account" : "Sign In"}
        </button>

        <button
          onClick={() => setIsSignUp(!isSignUp)}
          className="mt-4 w-full text-sm text-gray-600 underline"
        >
          {isSignUp
            ? "Already have an account? Sign in"
            : "Don't have an account? Sign up"}
        </button>
      </div>
    </main>
  );
}
