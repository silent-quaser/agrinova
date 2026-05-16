"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

export default function AnalyticsChart() {

  const data = [

    {
      month: "Jan",
      crops: 40
    },

    {
      month: "Feb",
      crops: 65
    },

    {
      month: "Mar",
      crops: 52
    },

    {
      month: "Apr",
      crops: 78
    },

    {
      month: "May",
      crops: 90
    },

    {
      month: "Jun",
      crops: 110
    }

  ];

  return (
    <div className="bg-[#1e293b] p-8 rounded-3xl shadow-xl border border-gray-700 mt-12">

      <h2 className="text-4xl font-bold text-green-400">
        Crop Analytics
      </h2>

      <p className="mt-4 text-gray-300">
        Monthly agricultural growth trends and monitoring insights.
      </p>

      <div className="mt-12 w-full h-[400px]">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={data}>

            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />

            <XAxis
              dataKey="month"
              stroke="#9CA3AF"
            />

            <YAxis stroke="#9CA3AF" />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="crops"
              stroke="#22c55e"
              strokeWidth={4}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}