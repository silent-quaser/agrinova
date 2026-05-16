"use client";

import { useEffect, useState } from "react";

export default function RecommendationHistory() {

  const [history, setHistory] = useState([]);

  useEffect(() => {

    async function fetchHistory() {

      try {

        const response = await fetch(
          "https://agrinova-backend-bds6.onrender.com/api/recommendations"
        );

        const data = await response.json();

        setHistory(data);

      } catch (error) {

        console.log("History Fetch Error:", error);

      }

    }

    fetchHistory();

  }, []);

  return (
    <div className="bg-[#1e293b] p-8 rounded-3xl shadow-xl border border-gray-700 mt-12">

      <h2 className="text-4xl font-bold text-green-400">
        Recommendation History
      </h2>

      <p className="mt-4 text-gray-300">
        Previously generated crop recommendations.
      </p>

      {/* Empty State */}
      {history.length === 0 && (

        <div className="mt-10 text-gray-400 text-lg">
          No recommendations found.
        </div>

      )}

      {/* Table */}
      {history.length > 0 && (

        <div className="overflow-x-auto mt-10">

          <table className="w-full">

            <thead>

              <tr className="bg-[#0f172a] text-white">

                <th className="p-5 text-left rounded-l-2xl">
                  Soil
                </th>

                <th className="p-5 text-left">
                  Season
                </th>

                <th className="p-5 text-left">
                  Water
                </th>

                <th className="p-5 text-left rounded-r-2xl">
                  Recommended Crop
                </th>

              </tr>

            </thead>

            <tbody>

              {history.map((item) => (

                <tr
                  key={item._id}
                  className="border-b border-gray-700 hover:bg-[#0f172a] transition"
                >

                  <td className="p-5 text-white">
                    {item.soil}
                  </td>

                  <td className="p-5 text-gray-300">
                    {item.season}
                  </td>

                  <td className="p-5 text-gray-300">
                    {item.water}
                  </td>

                  <td className="p-5 text-green-400 font-bold">
                    {item.recommendedCrop}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      )}

    </div>
  );
}