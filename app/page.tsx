"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  { name: "Aria M.", review: "Vibrenza changed the way I meditate. The energy is real and deeply transformative." },
  { name: "Lena R.", review: "Every session feels like my consciousness is expanding. I love the explore section!" },
  { name: "Jai P.", review: "I never believed in sound therapy, but Vibrenza made me a convert." },
  { name: "Anika S.", review: "This is the most beautiful and useful wellness site I’ve ever used." },
  { name: "Theo J.", review: "The design, the flow, the energy — everything about Vibrenza is amazing." },
  { name: "Zara B.", review: "This feels like the future of consciousness expansion. Highly recommended." }
  // Add more as needed
];

export default function Home() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!message.trim()) return;
    setLoading(true);
    setResponse("");

    try {
      const res = await fetch("https://vibrenza-backend.onrender.com/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();
      setResponse(data.reply);
    } catch (error) {
      setResponse("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
      <section
        className="min-h-screen flex flex-col justify-center items-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('/galaxy_bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm" />
        <motion.h1
          className="z-10 text-4xl sm:text-5xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Where Frequencies Meet Consciousness
        </motion.h1>

        <div className="z-10 w-full max-w-2xl relative">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask something cosmic..."
            className="w-full px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-lg placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-center text-lg"
          />
          <button
            onClick={handleSubmit}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-purple-600 hover:bg-purple-800 text-white p-2 rounded-full transition"
          >
            ↑
          </button>
        </div>

        {loading && <p className="text-purple-300 mt-6 animate-pulse z-10">Thinking...</p>}
        {response && (
          <motion.div
            className="mt-6 bg-white/10 p-4 rounded-lg border border-white/20 max-w-2xl text-center z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-purple-100 whitespace-pre-wrap">{response}</p>
          </motion.div>
        )}
      </section>

      {/* About Vibrenza Section */}
      <section className="py-24 px-6 text-center bg-black">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Vibrenza
        </motion.h2>
        <motion.p
          className="text-gray-300 max-w-3xl mx-auto text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Vibrenza is a portal of consciousness powered by healing frequencies and AI. Explore 50+ cosmic sound journeys,
          engage with a GPT-powered guide, and elevate your vibration through real-time conversation and curated audio.
        </motion.p>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-neutral-950">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What People Are Saying
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="bg-neutral-900 border border-neutral-700 p-6 rounded-lg shadow-md hover:shadow-purple-700 transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <p className="text-white mb-2">"{t.review}"</p>
              <p className="text-sm text-purple-400 text-right">— {t.name}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}

