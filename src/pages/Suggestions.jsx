import React, { useState, useRef, useEffect } from 'react';
import { getChatResponse } from '../services/ai';
import '../css/Suggestions.css';

function Suggestions() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! I'm your movie assistant. Ask me about any movie!", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { id: Date.now(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await getChatResponse(userMessage.text);
      
      const botResponse = {
        id: Date.now() + 1,
        sender: 'bot',
        text: responseText
      };
      
      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages(prev => [...prev, { 
        id: Date.now() + 1, 
        text: "Sorry, something went wrong.", 
        sender: 'bot' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="suggestions-container">
      <h2>Movie Assistant</h2>
      <div className="chat-interface">
        <div className="messages-area">
          {messages.map((msg) => (
            <div key={msg.id} className={`message ${msg.sender}`}>
              <div className="message-content">
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="message bot">
              <div className="typing-indicator">Thinking...</div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <form className="input-area" onSubmit={handleSend}>
          <input
            type="text"
            className="chat-input"
            placeholder="Ask about a movie..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
          />
          <button type="submit" className="send-button" disabled={isLoading || !input.trim()}>
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Suggestions;