import { useState } from "react";

function App() {
  const [color, setColor] = useState("#a78bfa"); // violet-ish default

  const colors = [
    { name: "Red", value: "#ef4444" },
    { name: "Green", value: "#22c55e" },
    { name: "Blue", value: "#3b82f6" },
    { name: "Yellow", value: "#eab308" },
    { name: "Orange", value: "#f97316" },
    { name: "Black", value: "#000000" },
    { name: "Pink", value: "#ec4899" },
    { name: "Violet", value: "#8b5cf6" },
  ];

  return (
    <div
      className="w-full h-screen duration-500 flex items-center justify-center"
      style={{ backgroundColor: color }}
    >
      <div className="fixed bottom-10 inset-x-0 flex justify-center">
        <div className="flex flex-wrap gap-3 bg-white/80 backdrop-blur-md px-6 py-4 rounded-2xl shadow-2xl border border-white/40">
          {colors.map((c) => (
            <button
              key={c.name}
              onClick={() => setColor(c.value)}
              className="px-4 py-2 rounded-full text-sm font-semibold shadow-md hover:scale-110 hover:shadow-xl transition-transform duration-200"
              style={{
                backgroundColor: c.value,
                color: c.value === "#000000" ? "#ffffff" : "#ffffffcc",
              }}
            >
              {c.name.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
      <div className="absolute top-10 text-center">
        <h1 className="text-5xl font-extrabold text-white drop-shadow-lg tracking-wide animate-pulse">
          🎨 Color Changer
        </h1>
        <p className="mt-3 text-lg text-white/90 font-medium drop-shadow">
          Pick a mood, paint the background.
        </p>
      </div>
    </div>
  );
}

export default App;
