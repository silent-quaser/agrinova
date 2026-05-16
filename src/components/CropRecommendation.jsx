"use client";

import { useState } from "react";

export default function CropRecommendation() {

  const [soil, setSoil] = useState("");
  const [season, setSeason] = useState("");
  const [water, setWater] = useState("");

  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function recommendCrop() {

    try {

      setLoading(true);

      const response = await fetch(
        "https://agrinova-backend-bds6.onrender.com/api/recommend",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            soil,
            season,
            water
          })
        }
      );

      const data = await response.json();

      setResult(data.recommendedCrop);

    } catch (error) {

      console.log("Recommendation Error:", error);

    } finally {

      setLoading(false);

    }

  }

  return (
    <div className="bg-[#1e293b] p-8 rounded-3xl shadow-xl border border-gray-700">

      <h2 className="text-4xl font-bold text-green-400">
        AI Crop Recommendation
      </h2>

      <p className="mt-4 text-gray-300">
        Get intelligent crop suggestions based on farming conditions.
      </p>

      {/* Soil */}
      <select
        value={soil}
        onChange={(e) => setSoil(e.target.value)}
        className="w-full mt-8 p-4 rounded-xl bg-[#0f172a] border border-gray-700 text-white"
      >

        <option value="">
          Select Soil Type
        </option>

        <option value="Loamy">
          Loamy
        </option>

        <option value="Black">
          Black
        </option>

        <option value="Sandy">
          Sandy
        </option>

      </select>

      {/* Season */}
      <select
        value={season}
        onChange={(e) => setSeason(e.target.value)}
        className="w-full mt-5 p-4 rounded-xl bg-[#0f172a] border border-gray-700 text-white"
      >

        <option value="">
          Select Season
        </option>

        <option value="Summer">
          Summer
        </option>

        <option value="Winter">
          Winter
        </option>

        <option value="Monsoon">
          Monsoon
        </option>

      </select>

      {/* Water */}
      <select
        value={water}
        onChange={(e) => setWater(e.target.value)}
        className="w-full mt-5 p-4 rounded-xl bg-[#0f172a] border border-gray-700 text-white"
      >

        <option value="">
          Water Availability
        </option>

        <option value="High">
          High
        </option>

        <option value="Medium">
          Medium
        </option>

        <option value="Low">
          Low
        </option>

      </select>

      {/* Button */}
      <button
        onClick={recommendCrop}
        disabled={loading}
        className="w-full mt-8 bg-green-600 hover:bg-green-700 py-4 rounded-xl text-lg font-bold transition"
      >

        {loading ? "Analyzing..." : "Recommend Crop"}

      </button>

      {/* Result */}
      {result && (

        <div className="mt-8 bg-green-500/20 border border-green-500 p-5 rounded-2xl">

          <h3 className="text-2xl font-bold text-green-400">
            Recommended Crop: {result}
          </h3>

        </div>

      )}

    </div>
  );
}