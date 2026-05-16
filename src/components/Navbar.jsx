"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {

  const pathname = usePathname();

  const isDashboard = pathname === "/dashboard";

  return (

    <nav className="
      sticky
      top-0
      z-50
      bg-[#020617]
      border-b
      border-gray-800
      px-10
      py-5
    ">

      <div className="flex items-center justify-between">

        {/* Hide Logo on Dashboard */}
        {!isDashboard && (

          <Link
            href="/"
            className="text-5xl font-bold text-green-400"
          >

            AgriNova

          </Link>

        )}

        {/* Navigation */}
        <div className={`flex gap-10 text-2xl font-semibold text-white ${isDashboard ? "ml-auto" : ""}`}>

          <Link href="/">
            Home
          </Link>

          <Link href="/about">
            About
          </Link>

          <Link href="/dashboard">
            Dashboard
          </Link>

          <Link href="/signup">
            Sign Up
          </Link>

          <Link
            href="/login"
            className="
              bg-green-600
              hover:bg-green-700
              px-6
              py-2
              rounded-2xl
              transition
            "
          >

            Login

          </Link>

        </div>

      </div>

    </nav>

  );

}