export default function MarketPrices() {

  const marketData = [
    {
      crop: "Rice",
      price: "₹2450 / Quintal",
      trend: "⬆ Rising"
    },

    {
      crop: "Wheat",
      price: "₹2120 / Quintal",
      trend: "⬇ Falling"
    },

    {
      crop: "Sugarcane",
      price: "₹3150 / Ton",
      trend: "⬆ Rising"
    },

    {
      crop: "Cotton",
      price: "₹6820 / Quintal",
      trend: "➡ Stable"
    }
  ];

  return (
    <div className="bg-[#1e293b] p-8 rounded-3xl shadow-xl border border-gray-700 mt-12">

      <h2 className="text-5xl font-bold text-green-400">
        Live Market Prices
      </h2>

      <p className="mt-4 text-gray-300 text-lg">
        Monitor current agricultural market trends and crop prices.
      </p>

      <div className="mt-10 overflow-x-auto">

        <table className="w-full border-collapse overflow-hidden rounded-2xl">

          <thead>

            <tr className="bg-[#0f172a] text-white">

              <th className="p-5 text-left text-xl">
                Crop
              </th>

              <th className="p-5 text-left text-xl">
                Market Price
              </th>

              <th className="p-5 text-left text-xl">
                Trend
              </th>

            </tr>

          </thead>

          <tbody>

            {marketData.map((item, index) => (

              <tr
                key={index}
                className="border-b border-gray-700 hover:bg-[#0f172a] transition"
              >

                <td className="p-6 text-lg font-semibold text-white">
                  {item.crop}
                </td>

                <td className="p-6 text-lg text-gray-300">
                  {item.price}
                </td>

                <td className="p-6 text-lg font-bold text-green-400">
                  {item.trend}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}