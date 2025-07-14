"use client";

import { useState } from "react";

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
    <main
      className="min-h-screen bg-cover bg-center text-white flex flex-col justify-center items-center"
      style={{
        backgroundImage: "url('/galaxy_bg.jpg')", // replace with your actual file
      }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

      {/* Navigation */}
      <header className="absolute top-0 left-0 w-full flex justify-between items-center px-6 py-4 z-10">
        <h1 className="text-2xl font-bold">Vibrenza</h1>
        <nav className="space-x-6 text-sm font-medium">
          <a href="/" className="hover:text-purple-400 transition">Home</a>
          <a href="/explore" className="hover:text-purple-400 transition">Frequencies</a>
        </nav>
      </header>

      {/* Input + response */}
      <div className="relative w-full max-w-2xl z-10">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask something cosmic..."
          className="w-full px-5 py-4 rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-md placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-center text-lg"
        />
        <button
          onClick={handleSubmit}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-purple-600 hover:bg-purple-800 text-white p-2 rounded-full transition"
        >
          ↑
        </button>
      </div>

      {/* Response output */}
      {response && (
        <div className="mt-6 bg-white/10 p-4 rounded-lg border border-white/20 max-w-2xl text-center z-10">
          <p className="text-purple-100 whitespace-pre-wrap">{response}</p>
        </div>
      )}

      {loading && (
        <p className="mt-6 text-purple-300 animate-pulse z-10">Thinking...</p>
      )}
    </main>
  );
}

