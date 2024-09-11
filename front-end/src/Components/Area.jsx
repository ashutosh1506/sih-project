import React from 'react'

function Area() {
  return (
    <div>
       //chatbot

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


    </div>
  )
}

export default Area
