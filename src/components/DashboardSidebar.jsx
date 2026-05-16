"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  FaChartLine,
  FaCloudSun,
  FaSeedling,
  FaBug,
  FaMoneyBillWave,
  FaRobot,
  FaSignOutAlt
} from "react-icons/fa";

export default function DashboardSidebar() {

  const router = useRouter();

  function handleLogout() {

    localStorage.removeItem("agrinova_token");

    localStorage.removeItem("agrinova_user");

    router.push("/login");

  }

  return (
    <aside className="hidden lg:flex flex-col w-[280px] min-h-screen bg-[#020617] border-r border-gray-800 p-8">

      {/* Logo */}
      <div>

        <h1 className="text-4xl font-extrabold text-green-400">
          AgriNova
        </h1>

        <p className="mt-3 text-gray-400">
          Smart Agriculture Platform
        </p>

      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-5 mt-16 text-lg">

        <Link
          href="/dashboard"
          className="flex items-center gap-4 bg-green-600 px-5 py-4 rounded-2xl font-semibold hover:bg-green-700 transition"
        >
          <FaChartLine />
          Dashboard
        </Link>

        <Link
          href="#"
          className="flex items-center gap-4 text-gray-300 hover:text-green-400 transition"
        >
          <FaCloudSun />
          Weather Analytics
        </Link>

        <Link
          href="#"
          className="flex items-center gap-4 text-gray-300 hover:text-green-400 transition"
        >
          <FaSeedling />
          Crop Monitoring
        </Link>

        <Link
          href="#"
          className="flex items-center gap-4 text-gray-300 hover:text-green-400 transition"
        >
          <FaBug />
          Disease Detection
        </Link>

        <Link
          href="#"
          className="flex items-center gap-4 text-gray-300 hover:text-green-400 transition"
        >
          <FaMoneyBillWave />
          Market Prices
        </Link>

        <Link
          href="#"
          className="flex items-center gap-4 text-gray-300 hover:text-green-400 transition"
        >
          <FaRobot />
          AI Assistant
        </Link>

      </nav>

      {/* Bottom Section */}
      <div className="mt-auto">

        {/* AI Card */}
        <div className="bg-[#1e293b] p-6 rounded-3xl border border-gray-700">

          <h2 className="text-2xl font-bold text-green-400">
            Agri AI
          </h2>

          <p className="mt-3 text-gray-300 leading-relaxed">
            Advanced AI insights for smart farming decisions.
          </p>

        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="w-full mt-6 flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 transition py-4 rounded-2xl text-lg font-bold"
        >

          <FaSignOutAlt />

          Logout

        </button>

      </div>

    </aside>
  );
}