import {
  FaSeedling,
  FaCloudSunRain,
  FaBug
} from "react-icons/fa";

export default function Features() {
  return (

    <section className="px-10 pb-24">

      <div className="text-center mb-16">

        <h2 className="text-5xl font-bold text-green-900">
          Powerful Smart Farming Features
        </h2>

        <p className="mt-5 text-lg text-gray-600">
          Technology-driven solutions designed for modern agriculture.
        </p>

      </div>

      <div className="grid md:grid-cols-3 gap-10">

        {/* Card 1 */}
        <div className="bg-white p-8 rounded-3xl shadow-lg hover:scale-105 transition duration-300">

          <FaSeedling className="text-5xl text-green-700 mb-6" />

          <h3 className="text-3xl font-bold text-green-900">
            Crop Recommendation
          </h3>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Intelligent crop suggestions based on soil,
            climate, and seasonal conditions.
          </p>

        </div>

        {/* Card 2 */}
        <div className="bg-white p-8 rounded-3xl shadow-lg hover:scale-105 transition duration-300">

          <FaCloudSunRain className="text-5xl text-green-700 mb-6" />

          <h3 className="text-3xl font-bold text-green-900">
            Weather Analytics
          </h3>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Real-time weather forecasts and farming insights
            for better crop planning.
          </p>

        </div>

        {/* Card 3 */}
        <div className="bg-white p-8 rounded-3xl shadow-lg hover:scale-105 transition duration-300">

          <FaBug className="text-5xl text-green-700 mb-6" />

          <h3 className="text-3xl font-bold text-green-900">
            Disease Detection
          </h3>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Upload crop images and detect plant diseases
            using AI-powered analysis.
          </p>

        </div>

      </div>

    </section>
  );
}