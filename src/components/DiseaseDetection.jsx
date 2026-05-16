"use client";

import { useState } from "react";

export default function DiseaseDetection() {

  const [result, setResult] = useState("");

  function detectDisease() {

    const diseases = [
      "Leaf Blight Detected 🍂",
      "Healthy Crop Detected 🌱",
      "Powdery Mildew Detected 🌾",
      "Bacterial Spot Detected ⚠️"
    ];

    const randomDisease =
      diseases[Math.floor(Math.random() * diseases.length)];

    setResult(randomDisease);
  }

  return (
    <div className="bg-white p-8 rounded-3xl shadow-lg mt-12">

      <h2 className="text-4xl font-bold text-green-900">
        AI Disease Detection
      </h2>

      <p className="mt-4 text-gray-600">
        Upload crop images to identify possible plant diseases.
      </p>

      {/* Upload */}
      <input
        type="file"
        className="w-full mt-8 p-4 border rounded-xl"
      />

      {/* Button */}
      <button
        onClick={detectDisease}
        className="w-full mt-8 bg-red-600 text-white py-4 rounded-xl text-lg font-semibold hover:bg-red-700 transition duration-300"
      >

        Detect Disease

      </button>

      {/* Result */}
      {result && (

        <div className="mt-8 bg-red-100 p-5 rounded-2xl">

          <h3 className="text-2xl font-bold text-red-800">
            {result}
          </h3>

        </div>

      )}

    </div>
  );
}