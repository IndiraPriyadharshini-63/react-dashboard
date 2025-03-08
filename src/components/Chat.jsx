import React, { useState } from "react";
import axios from "axios";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);
    setInput("");

    setIsTyping(true);

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: input }],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer react-dashboard`,
          },
        }
      );
      setIsTyping(false);
      const aiMessage = {
        text: response.data.choices[0].message.content,
        sender: "ai",
      };
      setMessages([...messages, userMessage, aiMessage]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setIsTyping(false);
    }
  };

  return (
    <div className="p-5 bg-white shadow rounded-lg mt-6 max-w-2xl mx-auto transition-all duration-300 hover:shadow-lg">
      <h2 className="text-xl font-bold mb-3">AI Chat Assistant</h2>
      <div className="h-60 overflow-y-auto border p-3 mb-3 bg-gray-100 rounded-lg">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 my-1 rounded-lg animate-fade-in ${
              msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
          >
            {msg.text}
          </div>
        ))}
        {isTyping && (
          <p className="text-gray-500 italic animate-pulse">AI is typing...</p>
        )}
      </div>
      <div className="flex">
        <input
          className="flex-1 p-2 border rounded-l-lg focus:ring-2 focus:ring-blue-500 transition-all"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
        />
        <button
          className="p-2 bg-blue-500 text-white rounded-r-lg transition-transform duration-200 hover:scale-105"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
