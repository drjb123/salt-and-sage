/* =============================================================
   Chatbot — Salt & Sage Persistent Chatbot Widget
   Live chat widget available on all pages
   ============================================================= */

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { toast } from "sonner";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const botResponses: { [key: string]: string } = {
  hello: "Hi there! 👋 Welcome to Salt & Sage. How can I help you today?",
  hi: "Hi there! 👋 Welcome to Salt & Sage. How can I help you today?",
  help: "I'm here to help! You can ask me about our services, pricing, case studies, or how to schedule a discovery call.",
  services: "We offer strategic planning, growth strategy, operational excellence, leadership advisory, change management, and performance accountability systems.",
  pricing: "Pricing varies based on your specific needs. Schedule a free discovery call to discuss options tailored to your practice.",
  "case study": "Check out our case studies page to see how we've helped dental practices like Dr. Chen's increase production from 3 to 10 cases per week.",
  "discovery call": "Great! You can schedule a free 20-minute discovery call through our contact form. We'll analyze your metrics and show you your specific opportunity.",
  "how it works": "Our process has 5 phases: Discovery & Audit → Analysis → Opportunity Prioritization → Implementation → Optimization & Growth.",
  team: "Our team includes experts in HR, communication, leadership, operations, marketing, finance, and sales.",
  contact: "You can reach us through the contact form on our website or schedule a discovery call directly.",
  default: "That's a great question! For more details, I'd recommend scheduling a free discovery call with our team. They can give you a personalized answer based on your practice.",
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! 👋 I'm the Salt & Sage assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const findBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    for (const [key, response] of Object.entries(botResponses)) {
      if (lowerMessage.includes(key)) {
        return response;
      }
    }
    
    return botResponses.default;
  };

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: findBotResponse(input),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsLoading(false);
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chatbot Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          backgroundColor: "#c0d4cd",
          color: "#c0d4cd",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 12px rgba(45, 74, 62, 0.3)",
          transition: "all 0.3s ease",
          zIndex: 999,
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.1)";
          (e.currentTarget as HTMLButtonElement).style.boxShadow =
            "0 6px 16px rgba(45, 74, 62, 0.4)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
          (e.currentTarget as HTMLButtonElement).style.boxShadow =
            "0 4px 12px rgba(45, 74, 62, 0.3)";
        }}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "6rem",
            right: "2rem",
            width: "380px",
            maxHeight: "600px",
            backgroundColor: "#c0d4cd",
            borderRadius: "12px",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
            display: "flex",
            flexDirection: "column",
            zIndex: 998,
            overflow: "hidden",
          }}
        >
          {/* Header */}
          <div
            style={{
              backgroundColor: "#c0d4cd",
              color: "#c0d4cd",
              padding: "1rem",
              fontFamily: "'Libre Baskerville', serif",
              fontSize: "1.1rem",
              fontWeight: 700,
            }}
          >
            Salt & Sage Assistant
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "1rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            {messages.map((message) => (
              <div
                key={message.id}
                style={{
                  display: "flex",
                  justifyContent: message.sender === "user" ? "flex-end" : "flex-start",
                }}
              >
                <div
                  style={{
                    maxWidth: "70%",
                    padding: "0.75rem 1rem",
                    borderRadius: "8px",
                    backgroundColor:
                      message.sender === "user" ? "#c0d4cd" : "#e8e3d8",
                    color: message.sender === "user" ? "#c0d4cd" : "#c0d4cd",
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontSize: "0.9rem",
                    lineHeight: 1.5,
                    wordWrap: "break-word",
                  }}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                <div
                  style={{
                    padding: "0.75rem 1rem",
                    borderRadius: "8px",
                    backgroundColor: "#e8e3d8",
                    color: "#c0d4cd",
                    fontFamily: "'Nunito Sans', sans-serif",
                  }}
                >
                  <span style={{ animation: "pulse 1.5s infinite" }}>●●●</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div
            style={{
              padding: "1rem",
              borderTop: "1px solid rgba(45, 74, 62, 0.1)",
              display: "flex",
              gap: "0.5rem",
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              style={{
                flex: 1,
                padding: "0.75rem",
                border: "1px solid rgba(45, 74, 62, 0.2)",
                borderRadius: "6px",
                fontFamily: "'Nunito Sans', sans-serif",
                fontSize: "0.9rem",
                outline: "none",
                transition: "border-color 0.2s",
              }}
              onFocus={(e) => {
                (e.currentTarget as HTMLInputElement).style.borderColor =
                  "#c0d4cd";
              }}
              onBlur={(e) => {
                (e.currentTarget as HTMLInputElement).style.borderColor =
                  "rgba(45, 74, 62, 0.2)";
              }}
              disabled={isLoading}
            />
            <button
              onClick={handleSendMessage}
              disabled={isLoading || !input.trim()}
              style={{
                padding: "0.75rem 1rem",
                backgroundColor: "#c0d4cd",
                color: "#c0d4cd",
                border: "none",
                borderRadius: "6px",
                cursor: isLoading || !input.trim() ? "not-allowed" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "opacity 0.2s",
                opacity: isLoading || !input.trim() ? 0.6 : 1,
              }}
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </>
  );
}
