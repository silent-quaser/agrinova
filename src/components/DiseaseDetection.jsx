"use client";

import { useState } from "react";

export default function DiseaseDetection() {

  const [fileName, setFileName] = useState("");

  return (

    <div className="bg-white rounded-3xl p-10 shadow-xl">

      <h2 className="text-5xl font-bold text-green-900 mb-4">
        AI Disease Detection
      </h2>

      <p className="text-gray-700 text-xl mb-10">
        Upload crop images to identify possible plant diseases.
      </p>

      {/* Upload Box */}
      <label className="
        flex
        flex-col
        items-center
        justify-center
        w-full
        h-56
        border-2
        border-dashed
        border-green-500
        rounded-3xl
        cursor-pointer
        bg-green-50
        hover:bg-green-100
        transition
      ">

        <div className="text-center">

          <p className="text-2xl font-semibold text-green-800">
            Click to Upload Image
          </p>

          <p className="mt-3 text-gray-600">
            JPG, PNG supported
          </p>

          {fileName && (

            <p className="mt-5 text-lg font-medium text-black">
              Selected: {fileName}
            </p>

          )}

        </div>

        <input
          type="file"
          className="hidden"
          onChange={(e) =>
            setFileName(e.target.files[0]?.name || "")
          }
        />

      </label>

      {/* Button */}
      <button className="
        mt-10
        w-full
        bg-red-600
        hover:bg-red-700
        text-white
        text-2xl
        font-bold
        py-5
        rounded-2xl
        transition-all
      ">

        Detect Disease

      </button>

    </div>

  );

}