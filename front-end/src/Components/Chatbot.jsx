import React, { useState } from "react";
import axios from "axios";

const MAX_RETRIES = 5; // Max number of retries
const RETRY_DELAY = 1000; // Initial retry delay in milliseconds

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [selectedRating, setSelectedRating] = useState(null);

  const handleSend = async () => {
    const userMessage = { message: input, user: "user" };
    setMessages([...messages, userMessage]);

    const sendRequest = async (retries) => {
      try {
        const response = await axios.post(
          "/api", // Ensure this matches the endpoint in Flask
          { message: input },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const botMessage = {
          message: response.data.message.trim(),
          user: "bot",
        };

        setMessages((prevMessages) => [...prevMessages, botMessage]);
        setInput("");
      } catch (error) {
        if (error.response && error.response.status === 429 && retries > 0) {
          // Retry with exponential backoff
          const delay = RETRY_DELAY * (MAX_RETRIES - retries + 1);
          console.log(`Rate limit hit, retrying in ${delay}ms...`);
          setTimeout(() => sendRequest(retries - 1), delay);
        } else {
          console.error("Error sending message:", error);
        }
      }
    };

    sendRequest(MAX_RETRIES);
  };

  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col">
      {/* Header Section */}
      <div className="bg-blue-50 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="bg-blue-100 rounded-full p-2">
            <svg
              className="w-6 h-6 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 14l9-5-9-5-9 5zm0 7v-5.586a2 2 0 00-.586-1.414L5 7m14 0l-6.414 6.414A2 2 0 0012 14.586V20"
              />
            </svg>
          </div>
          <h2 className="text-lg font-semibold text-gray-700">Doctor Bot</h2>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Chat Body */}
      <div className="flex-grow overflow-y-auto p-6 space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`${
              msg.user === "user"
                ? "text-right"
                : "text-left bg-blue-100 p-3 rounded-lg"
            }`}
          >
            <span
              className={`${
                msg.user === "user"
                  ? "inline-block bg-blue-500 text-white"
                  : "bg-white"
              } p-3 rounded-lg shadow-sm`}
            >
              {msg.message}
            </span>
          </div>
        ))}

        <div className="flex items-center space-x-2">
          {["1", "2", "3", "4", "5"].map((number) => (
            <button
              key={number}
              className={`${
                selectedRating === number
                  ? "bg-blue-500 text-white"
                  : "bg-white border border-blue-500 text-blue-500"
              } w-10 h-10 rounded-full flex items-center justify-center`}
              onClick={() => setSelectedRating(number)}
            >
              {number}
            </button>
          ))}
        </div>

        <div className="text-gray-600 mt-2">
          {selectedRating && <p>Thank you for your opinion!</p>}
        </div>
      </div>

      {/* Input Section */}
      <div className="px-6 py-4 bg-gray-100 border-t">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything..."
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSend}
          className="mt-2 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
