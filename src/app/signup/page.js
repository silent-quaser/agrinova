"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {

  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSignup(e) {

    e.preventDefault();

    try {

      setLoading(true);
      setMessage("");

      const response = await fetch(
        "https://agrinova-backend-bds6.onrender.com/api/register",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            name,
            email,
            password
          })
        }
      );

      const data = await response.json();

      if (!data.success) {

        setMessage(data.message);

        return;
      }

      /* Save Token */
      localStorage.setItem(
        "agrinova_token",
        data.token
      );

      localStorage.setItem(
        "agrinova_user",
        JSON.stringify(data.user)
      );

      setMessage("Account Created Successfully ✅");

      setTimeout(() => {
        router.push("/dashboard");
      }, 1000);

    } catch (error) {

      console.log(error);

      setMessage("Signup Failed");

    } finally {

      setLoading(false);

    }

  }

  return (
    <main className="min-h-screen bg-[#020617] flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-[#1e293b] border border-gray-700 p-10 rounded-3xl shadow-2xl">

        {/* Heading */}
        <div className="text-center">

          <h1 className="text-5xl font-bold text-green-400">
            Create Account
          </h1>

          <p className="mt-4 text-gray-300">
            Join AgriNova Smart Agriculture Platform
          </p>

        </div>

        {/* Form */}
        <form
          onSubmit={handleSignup}
          className="mt-10"
        >

          {/* Name */}
          <div>

            <label className="text-gray-300">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter Full Name"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              className="w-full mt-3 p-4 rounded-xl bg-[#0f172a] border border-gray-700 text-white outline-none"
              required
            />

          </div>

          {/* Email */}
          <div className="mt-6">

            <label className="text-gray-300">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="w-full mt-3 p-4 rounded-xl bg-[#0f172a] border border-gray-700 text-white outline-none"
              required
            />

          </div>

          {/* Password */}
          <div className="mt-6">

            <label className="text-gray-300">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="w-full mt-3 p-4 rounded-xl bg-[#0f172a] border border-gray-700 text-white outline-none"
              required
            />

          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-8 bg-green-600 hover:bg-green-700 transition py-4 rounded-xl text-lg font-bold text-white"
          >

            {loading ? "Creating Account..." : "Sign Up"}

          </button>

        </form>

        {/* Message */}
        {message && (

          <div className="mt-6 bg-green-500/20 border border-green-500 p-4 rounded-xl text-center text-green-400 font-semibold">

            {message}

          </div>

        )}

      </div>

    </main>
  );
}