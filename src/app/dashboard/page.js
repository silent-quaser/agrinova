"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import DashboardSidebar from "../../components/DashboardSidebar";
import WeatherCard from "../../components/WeatherCard";
import CropRecommendation from "../../components/CropRecommendation";
import DiseaseDetection from "../../components/DiseaseDetection";
import MarketPrices from "../../components/MarketPrices";
import RecommendationHistory from "../../components/RecommendationHistory";
import AnalyticsChart from "../../components/AnalyticsChart";
import AIAssistant from "../../components/AIAssistant";

export default function Dashboard() {

  const router = useRouter();

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const token =
      localStorage.getItem("agrinova_token");

    if (!token) {

      router.push("/login");

    } else {

      setLoading(false);

    }

  }, [router]);

  if (loading) {

    return (
      <main className="min-h-screen bg-[#020617] flex items-center justify-center text-white">

        <h1 className="text-4xl font-bold">
          Loading Dashboard...
        </h1>

      </main>
    );

  }

  return (
    <main className="flex bg-[#0f172a] min-h-screen text-white">

      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main Content */}
      <section className="flex-1 p-6 md:p-10 overflow-y-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          <div>

            <h1 className="text-5xl font-bold">
              Farmer Dashboard
            </h1>

            <p className="mt-4 text-gray-300 text-lg">
              AI-powered agricultural monitoring and analytics platform.
            </p>

          </div>

          <button className="bg-green-600 hover:bg-green-700 transition px-6 py-3 rounded-2xl font-semibold shadow-lg">

            Generate Report

          </button>

        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">

          <div className="bg-[#1e293b] p-8 rounded-3xl shadow-xl border border-gray-700">

            <h2 className="text-2xl font-semibold text-green-400">
              Active Farms
            </h2>

            <p className="mt-6 text-5xl font-bold">
              12,540
            </p>

          </div>

          <div className="bg-[#1e293b] p-8 rounded-3xl shadow-xl border border-gray-700">

            <h2 className="text-2xl font-semibold text-red-400">
              Disease Alerts
            </h2>

            <p className="mt-6 text-5xl font-bold">
              08
            </p>

          </div>

          <div className="bg-[#1e293b] p-8 rounded-3xl shadow-xl border border-gray-700">

            <h2 className="text-2xl font-semibold text-blue-400">
              Market Growth
            </h2>

            <p className="mt-6 text-5xl font-bold">
              +18%
            </p>

          </div>

        </div>

        {/* Weather */}
        <div className="mt-12">
          <WeatherCard />
        </div>

        {/* Analytics Chart */}
        <AnalyticsChart />

        {/* AI Tools */}
        <div className="grid xl:grid-cols-2 gap-10 mt-12">

          <CropRecommendation />

          <DiseaseDetection />

        </div>

        {/* AI Assistant */}
        <AIAssistant />

        {/* Market Prices */}
        <MarketPrices />

        {/* Recommendation History */}
        <RecommendationHistory />

      </section>

    </main>
  );
}