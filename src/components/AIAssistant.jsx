"use client";

import { useState } from "react";

export default function AIAssistant() {

  const [question, setQuestion] = useState("");

  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hello 👋 I am your AgriNova AI farming assistant."
    }
  ]);

  async function askAI() {

    if (!question.trim()) return;

    /* Add User Message */
    const updatedMessages = [

      ...messages,

      {
        sender: "user",
        text: question
      }

    ];

    setMessages(updatedMessages);

    try {

      const response = await fetch(
        "http://localhost:5000/api/ai-assistant",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            question
          })
        }
      );

      const data = await response.json();

      setMessages([
        ...updatedMessages,

        {
          sender: "ai",
          text: data.reply
        }

      ]);

    } catch (error) {

      console.log(error);

    }

    setQuestion("");

  }

  return (
    <div className="bg-[#1e293b] p-8 rounded-3xl shadow-xl border border-gray-700 mt-12">

      <h2 className="text-4xl font-bold text-green-400">
        AI Farming Assistant
      </h2>

      <p className="mt-4 text-gray-300">
        Ask farming-related questions and receive AI guidance.
      </p>

      {/* Chat Area */}
      <div className="mt-8 bg-[#0f172a] rounded-2xl p-6 h-[400px] overflow-y-auto space-y-4">

        {messages.map((msg, index) => (

          <div
            key={index}
            className={`max-w-[80%] p-4 rounded-2xl ${
              msg.sender === "user"
                ? "ml-auto bg-green-600 text-white"
                : "bg-gray-800 text-gray-200"
            }`}
          >

            {msg.text}

          </div>

        ))}

      </div>

      {/* Input */}
      <div className="flex gap-4 mt-6">

        <input
          type="text"
          placeholder="Ask about crops, fertilizers, diseases..."
          value={question}
          onChange={(e) =>
            setQuestion(e.target.value)
          }
          className="flex-1 p-4 rounded-xl bg-[#0f172a] border border-gray-700 text-white outline-none"
        />

        <button
          onClick={askAI}
          className="bg-green-600 hover:bg-green-700 px-8 rounded-xl font-bold transition"
        >

          Send

        </button>

      </div>

    </div>
  );
}