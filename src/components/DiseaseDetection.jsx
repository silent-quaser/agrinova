"use client";

export default function DiseaseDetection() {

  return (

    <div className="bg-white rounded-3xl p-8 shadow-xl">

      <h2 className="text-5xl font-bold text-green-900 mb-4">
        AI Disease Detection
      </h2>

      <p className="text-gray-700 text-xl mb-8">
        Upload crop images to identify possible plant diseases.
      </p>

      <input
        type="file"
        className="
          block
          w-full
          text-black
          text-lg
          border
          border-gray-300
          rounded-xl
          p-4
          bg-gray-100
          cursor-pointer
        "
      />

      <button className="
        mt-8
        w-full
        bg-red-600
        hover:bg-red-700
        text-white
        text-2xl
        font-bold
        py-4
        rounded-2xl
        transition-all
      ">

        Detect Disease

      </button>

    </div>

  );

}