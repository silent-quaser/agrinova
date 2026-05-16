"use client";

export default function DashboardSidebar() {

  const menuItems = [

    {
      name: "Dashboard",
      id: "dashboard"
    },

    {
      name: "Weather Analytics",
      id: "weather"
    },

    {
      name: "Crop Monitoring",
      id: "crop"
    },

    {
      name: "Disease Detection",
      id: "disease"
    },

    {
      name: "Market Prices",
      id: "market"
    },

    {
      name: "AI Assistant",
      id: "assistant"
    }

  ];

  return (

    <aside className="
      w-72
      bg-[#020617]
      border-r
      border-gray-800
      p-6
      sticky
      top-0
      h-screen
    ">

      <h1 className="text-4xl font-bold text-green-400">
        AgriNova
      </h1>

      <p className="text-gray-400 mt-3">
        Smart Agriculture Platform
      </p>

      <div className="space-y-4 mt-10">

        {menuItems.map((item) => (

          <a
            key={item.id}
            href={`#${item.id}`}
            className="
              block
              bg-green-600
              hover:bg-green-700
              transition
              px-6
              py-4
              rounded-2xl
              text-white
              text-lg
              font-semibold
            "
          >

            {item.name}

          </a>

        ))}

      </div>

    </aside>

  );

}