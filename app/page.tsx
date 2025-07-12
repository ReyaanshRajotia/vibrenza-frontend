"use client";

import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!message) return;
    setResponse("Thinking...");

    try {
      const res = await fetch("https://vibrenza-backend.onrender.com/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message })
      });

      const data = await res.json();
      setResponse(data.reply || "No reply received");
    } catch (error) {
      console.error(error);
      setResponse("Something went wrong.");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4 py-12">
      <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">
        Where Frequencies Meet Consciousness
      </h1>

      <form
        onSubmit={handleSubmit}
        className="relative w-full max-w-2xl bg-white/10 backdrop-blur-md rounded-xl p-4"
      >
        <input
          type="text"
          placeholder="Ask anything..."
          className="w-full bg-transparent border-none outline-none text-white placeholder-white text-lg"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white"
        >
          ⬆️
        </button>
      </form>

      <div className="mt-6 text-center text-lg text-gray-300 max-w-xl">
        {response}
      </div>
    </main>
  );
}
