"use client";

const testimonials = [
  {
    name: "Ava K.",
    review: "Vibrenza helped me unlock a deeper meditative state. The 528 Hz track genuinely calmed me down after a stressful week. So grateful this exists.",
    rating: 5
  },
  {
    name: "Zain R.",
    review: "Absolutely amazing frequencies! I use them daily while journaling. My sleep has improved since incorporating 432 Hz every night.",
    rating: 5
  },
  {
    name: "Mira L.",
    review: "The interface is smooth and calming. I love that it connects to real frequency links. Everything just flows — a must-have for spiritual seekers.",
    rating: 5
  }
];

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">What People Are Saying</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-neutral-900 p-6 rounded-lg shadow-lg border border-neutral-700 hover:shadow-white/10 transition"
          >
            <p className="text-md mb-4 italic text-gray-300">"{t.review}"</p>
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold">{t.name}</span>
              <span>{"⭐️".repeat(t.rating)}</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
