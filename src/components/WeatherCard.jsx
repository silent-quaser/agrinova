"use client";

import { useEffect, useState } from "react";

export default function WeatherCard() {

  const [weather, setWeather] = useState(null);

  useEffect(() => {

    async function fetchWeather() {

      try {

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Chennai&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
        );

        const data = await response.json();

        setWeather(data);

      } catch (error) {

        console.log("Weather Fetch Error:", error);

      }

    }

    fetchWeather();

  }, []);

  if (!weather) {
    return (
      <div className="bg-[#1e293b] p-8 rounded-3xl shadow-xl border border-gray-700">

        <h2 className="text-3xl font-bold text-white">
          Loading Weather...
        </h2>

      </div>
    );
  }

  return (
    <div className="bg-[#1e293b] p-8 rounded-3xl shadow-xl border border-gray-700">

      <h2 className="text-5xl font-bold text-white">
        Live Weather Data
      </h2>

      <div className="grid md:grid-cols-2 gap-10 mt-10">

        {/* Left Side */}
        <div className="space-y-8">

          <div>

            <p className="text-gray-400 text-lg">
              City
            </p>

            <h3 className="text-3xl font-bold text-green-400 mt-2">
              {weather.name}
            </h3>

          </div>

          <div>

            <p className="text-gray-400 text-lg">
              Temperature
            </p>

            <h3 className="text-3xl font-bold text-white mt-2">
              {weather.main.temp}°C
            </h3>

          </div>

          <div>

            <p className="text-gray-400 text-lg">
              Humidity
            </p>

            <h3 className="text-3xl font-bold text-blue-400 mt-2">
              {weather.main.humidity}%
            </h3>

          </div>

        </div>

        {/* Right Side */}
        <div className="flex flex-col justify-center items-center bg-[#0f172a] rounded-3xl p-8 border border-gray-700">

          <h3 className="text-6xl font-bold text-white">
            {weather.main.temp}°C
          </h3>

          <p className="mt-4 text-2xl text-gray-300 capitalize">
            {weather.weather[0].description}
          </p>

          <p className="mt-3 text-lg text-gray-400">
            Wind Speed: {weather.wind.speed} km/h
          </p>

        </div>

      </div>

    </div>
  );
}