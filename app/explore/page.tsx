"use client";

const frequencies = [
  {
    title: "528 Hz – Love & DNA Repair",
    url: "https://www.youtube.com/watch?v=1Z-3JgnRjBc"
  },
  {
    title: "396 Hz – Liberate Fear & Guilt",
    url: "https://www.youtube.com/watch?v=0-Vk00TVzAU"
  },
  {
    title: "417 Hz – Undo Situations & Change",
    url: "https://www.youtube.com/watch?v=q7M5wVgOxs8"
  },
  {
    title: "432 Hz – Natural Tuning",
    url: "https://www.youtube.com/watch?v=7Wq1PbT5TDs"
  },
  {
    title: "639 Hz – Harmonize Relationships",
    url: "https://www.youtube.com/watch?v=VjVJeTXYpJk"
  },
  {
    title: "741 Hz – Awakening Intuition",
    url: "https://www.youtube.com/watch?v=-DdnKVQgr0k"
  },
  {
    title: "852 Hz – Return to Spiritual Order",
    url: "https://www.youtube.com/watch?v=Y5EgvA2x8rk"
  },
  {
    title: "963 Hz – Pineal Gland Activation",
    url: "https://www.youtube.com/watch?v=qqMKv_Z3tZI"
  }
  // You can add 42 more with my help later
];

export default function ExplorePage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Explore Frequencies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {frequencies.map((freq, index) => (
          <a
            key={index}
            href={freq.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 p-6 rounded-xl hover:bg-white/20 transition"
          >
            <h2 className="text-xl font-semibold">{freq.title}</h2>
            <p className="text-sm text-gray-300 mt-2">Click to listen</p>
          </a>
        ))}
      </div>
    </main>
  );
}
