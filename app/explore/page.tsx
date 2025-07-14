"use client";

const frequencies = [
  { title: "528 Hz – DNA Repair & Love", url: "https://www.youtube.com/watch?v=1Z-3JgnRjBc" },
  { title: "396 Hz – Release Fear & Guilt", url: "https://www.youtube.com/watch?v=0-Vk00TVzAU" },
  { title: "417 Hz – Clear Negativity", url: "https://www.youtube.com/watch?v=q7M5wVgOxs8" },
  { title: "432 Hz – Natural Frequency", url: "https://www.youtube.com/watch?v=7Wq1PbT5TDs" },
  { title: "639 Hz – Harmonize Relationships", url: "https://www.youtube.com/watch?v=VjVJeTXYpJk" },
  { title: "741 Hz – Cleanse & Heal", url: "https://www.youtube.com/watch?v=-DdnKVQgr0k" },
  { title: "852 Hz – Spiritual Awakening", url: "https://www.youtube.com/watch?v=Y5EgvA2x8rk" },
  { title: "963 Hz – Pineal Gland", url: "https://www.youtube.com/watch?v=qqMKv_Z3tZI" },
  { title: "888 Hz – Infinite Energy", url: "https://www.youtube.com/watch?v=xFLu5IJeA3M" },
  { title: "174 Hz – Pain Relief", url: "https://www.youtube.com/watch?v=YuHZm1lLw1E" },
  { title: "285 Hz – Healing Tissue", url: "https://www.youtube.com/watch?v=Jyv0W1Fz_2Y" },
  { title: "111 Hz – Deep Relaxation", url: "https://www.youtube.com/watch?v=Jh3Kj9nOTms" },
  { title: "963 Hz – Higher Consciousness", url: "https://www.youtube.com/watch?v=2l23E71ec0Y" },
  { title: "417 Hz – Energy Cleanse", url: "https://www.youtube.com/watch?v=K-HC_6aZflY" },
  { title: "528 Hz – Heart Healing", url: "https://www.youtube.com/watch?v=Hq_UR-SnN6A" },
  { title: "432 Hz – Sleep Music", url: "https://www.youtube.com/watch?v=32i3kP1aD1I" },
  { title: "639 Hz – Heart Chakra", url: "https://www.youtube.com/watch?v=G1Nhd9i3wXs" },
  { title: "741 Hz – Detox", url: "https://www.youtube.com/watch?v=Xhz1AmW_GJ0" },
  { title: "963 Hz – Soul Light", url: "https://www.youtube.com/watch?v=k1hU6Q9VVyo" },
  { title: "285 Hz – Cellular Healing", url: "https://www.youtube.com/watch?v=ESPRLQSlrNc" },
  { title: "174 Hz – Nerve Regeneration", url: "https://www.youtube.com/watch?v=Hzqjz-8OD2A" },
  { title: "888 Hz – Abundance", url: "https://www.youtube.com/watch?v=5bXh_NLvv_4" },
  { title: "396 Hz – Root Chakra", url: "https://www.youtube.com/watch?v=6FZ2M5mwW6g" },
  { title: "741 Hz – Third Eye Opener", url: "https://www.youtube.com/watch?v=onBOzZJx9a0" },
  { title: "963 Hz – Divine Connection", url: "https://www.youtube.com/watch?v=e0IhR2DM7Jg" },
  { title: "888 Hz – Prosperity", url: "https://www.youtube.com/watch?v=iVjTwEm-Z8s" },
  { title: "417 Hz – Trauma Release", url: "https://www.youtube.com/watch?v=tyNsTr8Yin4" },
  { title: "639 Hz – Vibrational Unity", url: "https://www.youtube.com/watch?v=4Tl5EPC1Wvo" },
  { title: "528 Hz – Cellular Detox", url: "https://www.youtube.com/watch?v=nNZQCtDuw9c" },
  { title: "396 Hz – Anxiety Release", url: "https://www.youtube.com/watch?v=F6B_zL2AAhM" },
  { title: "741 Hz – Inner Truth", url: "https://www.youtube.com/watch?v=_cxccjH4qBo" },
  { title: "852 Hz – Intuition Boost", url: "https://www.youtube.com/watch?v=kbls8AiYShQ" },
  { title: "963 Hz – Soul Alignment", url: "https://www.youtube.com/watch?v=Y2uT9Il_eVo" },
  { title: "432 Hz – Deep Calm", url: "https://www.youtube.com/watch?v=wvJAgrUBF4w" },
  { title: "888 Hz – High Vibration", url: "https://www.youtube.com/watch?v=7M4kSfq7g8I" },
  { title: "528 Hz – Aura Cleanse", url: "https://www.youtube.com/watch?v=0sVq6xp5A3M" },
  { title: "417 Hz – Emotional Cleanse", url: "https://www.youtube.com/watch?v=NZrNVvF6dnA" },
  { title: "285 Hz – Rejuvenation", url: "https://www.youtube.com/watch?v=QpB9sEO9Pqc" },
  { title: "852 Hz – Awareness", url: "https://www.youtube.com/watch?v=zTeiXhyQ1Lk" },
  { title: "639 Hz – Connection", url: "https://www.youtube.com/watch?v=swuEvthupEY" }
];

export default function ExplorePage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Explore Frequencies</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {frequencies.map((f, i) => (
          <a
            key={i}
            href={f.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/5 hover:bg-purple-700/20 transition p-6 rounded-xl border border-purple-900 shadow-md"
          >
            <h2 className="text-lg font-semibold mb-1">{f.title}</h2>
            <p className="text-sm text-purple-300">Click to listen</p>
          </a>
        ))}
      </div>
    </main>
  );
}
