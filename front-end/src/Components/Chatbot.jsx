import React, { useState } from "react";
import { ChatBot } from "react-simple-chatbot";
import axios from "axios";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    const userMessage = { message: input, user: "user" };
    setMessages([...messages, userMessage]);

    // Send the user input to the AI API
    try {
      const response = await axios.post("API_ENDPOINT", { message: input });
      const botMessage = { message: response.data, user: "bot" };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
    }

    setInput("");
  };

  return (
    <div>
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={msg.user === "user" ? "user-msg" : "bot-msg"}
          >
            {msg.message}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask me anything..."
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default Chatbot;
