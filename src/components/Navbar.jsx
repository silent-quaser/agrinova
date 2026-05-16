"use client";

import Link from "next/link";
import { useState } from "react";

import {
  FaBars,
  FaTimes
} from "react-icons/fa";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#020617]/90 backdrop-blur-lg border-b border-gray-800 text-white">

      <div className="flex items-center justify-between px-6 md:px-10 py-5">

        {/* Logo */}
        <h1 className="text-3xl font-extrabold text-green-400">
          AgriNova
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-lg">

          <Link
            href="/"
            className="hover:text-green-400 transition"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="hover:text-green-400 transition"
          >
            About
          </Link>

          <Link
            href="/dashboard"
            className="hover:text-green-400 transition"
          >
            Dashboard
          </Link>

          {/* Signup */}
          <Link
            href="/signup"
            className="hover:text-green-400 transition"
          >
            Sign Up
          </Link>

          {/* Login */}
          <Link
            href="/login"
            className="bg-green-600 hover:bg-green-700 px-5 py-2 rounded-xl font-semibold transition"
          >
            Login
          </Link>

        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl"
        >

          {menuOpen ? <FaTimes /> : <FaBars />}

        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (

        <div className="md:hidden flex flex-col gap-6 px-6 py-8 bg-[#0f172a] border-t border-gray-800 text-lg">

          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="hover:text-green-400 transition"
          >
            Home
          </Link>

          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="hover:text-green-400 transition"
          >
            About
          </Link>

          <Link
            href="/dashboard"
            onClick={() => setMenuOpen(false)}
            className="hover:text-green-400 transition"
          >
            Dashboard
          </Link>

          {/* Signup */}
          <Link
            href="/signup"
            onClick={() => setMenuOpen(false)}
            className="hover:text-green-400 transition"
          >
            Sign Up
          </Link>

          {/* Login */}
          <Link
            href="/login"
            onClick={() => setMenuOpen(false)}
            className="bg-green-600 hover:bg-green-700 px-5 py-3 rounded-xl font-semibold transition text-center"
          >
            Login
          </Link>

        </div>

      )}

    </nav>
  );
}