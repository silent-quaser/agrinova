import Hero from "../components/Hero";
import Features from "../components/Features";

export default function Home() {
  return (
    <main className="bg-[#020617] text-white overflow-hidden pt-24">

      {/* Hero */}
      <Hero />

      {/* Features */}
      <Features />

      {/* Why Choose Us */}
      <section className="px-6 md:px-20 py-32 bg-gradient-to-b from-[#020617] to-[#0f172a]">

        <div className="text-center">

          <h2 className="text-5xl md:text-6xl font-bold">
            Why Farmers Choose AgriNova
          </h2>

          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Smart AI-driven agricultural solutions helping farmers
            increase productivity and make data-driven decisions.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-10 mt-20">

          <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-10 rounded-3xl shadow-2xl">

            <h3 className="text-3xl font-bold text-green-400">
              AI Monitoring
            </h3>

            <p className="mt-5 text-gray-300 leading-relaxed">
              Advanced crop monitoring and predictive analysis
              powered by intelligent machine learning systems.
            </p>

          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-10 rounded-3xl shadow-2xl">

            <h3 className="text-3xl font-bold text-blue-400">
              Real-Time Analytics
            </h3>

            <p className="mt-5 text-gray-300 leading-relaxed">
              Live weather updates, market insights,
              and agricultural performance analytics.
            </p>

          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-10 rounded-3xl shadow-2xl">

            <h3 className="text-3xl font-bold text-red-400">
              Disease Detection
            </h3>

            <p className="mt-5 text-gray-300 leading-relaxed">
              AI-assisted plant disease detection using
              image analysis and predictive intelligence.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}