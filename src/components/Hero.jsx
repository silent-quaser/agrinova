export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-36 px-6 bg-gradient-to-b from-green-50 to-green-100">

      {/* Small Tag */}
      <p className="text-green-700 font-semibold uppercase tracking-[4px] text-lg">
        AI Powered Smart Farming
      </p>

      {/* Main Heading */}
      <h1 className="mt-8 text-6xl md:text-7xl font-extrabold text-green-900 leading-tight max-w-6xl">

        Revolutionizing Agriculture
        With Intelligent Technology

      </h1>

      {/* Description */}
      <p className="mt-8 text-xl text-gray-700 max-w-3xl leading-relaxed">

        AgriNova empowers farmers with AI-driven crop recommendations,
        weather analytics, disease detection, and real-time market insights
        to improve productivity and sustainability.

      </p>

      {/* Buttons */}
      <div className="mt-12 flex flex-wrap justify-center gap-6">

        <button className="bg-green-700 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg hover:bg-green-800 hover:scale-105 transition duration-300">

          Get Started

        </button>

        <button className="border-2 border-green-700 text-green-700 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-green-100 hover:scale-105 transition duration-300">

          Explore Features

        </button>

      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 w-full max-w-5xl">

        <div className="bg-white p-8 rounded-3xl shadow-lg">

          <h2 className="text-5xl font-bold text-green-800">
            10K+
          </h2>

          <p className="mt-3 text-gray-600 text-lg">
            Farmers Supported
          </p>

        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg">

          <h2 className="text-5xl font-bold text-green-800">
            95%
          </h2>

          <p className="mt-3 text-gray-600 text-lg">
            Crop Accuracy
          </p>

        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg">

          <h2 className="text-5xl font-bold text-green-800">
            24/7
          </h2>

          <p className="mt-3 text-gray-600 text-lg">
            AI Assistance
          </p>

        </div>

      </div>

    </section>
  );
}