/* =============================================================
   FAQSection — Salt & Sage Interactive FAQ & Live Chat
   Accordion-style FAQ with live chat widget integration
   ============================================================= */

import { useEffect, useRef, useState } from "react";
import { ChevronDown, MessageCircle, X } from "lucide-react";

const faqs = [
  {
    question: "What types of organizations do you work with?",
    answer: "We work with organizations across industries—from dental practices and healthcare to professional services firms, tech companies, and manufacturing. Our advisory approach is tailored to your specific business model and challenges.",
  },
  {
    question: "How long does a typical engagement last?",
    answer: "Engagements vary based on scope. Some clients engage us for focused 3-6 month projects, while others prefer ongoing strategic partnerships. We'll discuss your timeline and objectives during our initial consultation.",
  },
  {
    question: "Do you offer remote advisory services?",
    answer: "Yes, absolutely. We deliver advisory services both in-person and remotely. Our digital-first approach means you can access our expertise and dashboards from anywhere, with real-time collaboration tools.",
  },
  {
    question: "How do you measure success?",
    answer: "We establish clear KPIs upfront aligned with your business goals. Our reporting dashboards track progress in real-time, and we conduct regular performance reviews to ensure we're delivering measurable results.",
  },
  {
    question: "Can you help with specific operational challenges?",
    answer: "Yes. Whether it's streamlining processes, improving team efficiency, implementing new systems, or restructuring operations, we bring proven frameworks and hands-on implementation support.",
  },
  {
    question: "What's included in your reporting platform?",
    answer: "Our reporting platform provides real-time dashboards, custom KPI tracking, predictive analytics, automated alerts, and exportable reports. All data is accessible via web and mobile, with seamless integration to your existing systems.",
  },
];

export default function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ role: "user" | "assistant"; text: string }>>([
    { role: "assistant", text: "Hi! 👋 Welcome to Salt & Sage. How can we help you today?" },
  ]);
  const [inputValue, setInputValue] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const chatMessagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observe = (el: Element | null, delay = 0) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => el.classList.add("visible"), delay);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(el);
    };

    observe(containerRef.current);
  }, []);

  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = { role: "user" as const, text: inputValue };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Simulate assistant response
    setTimeout(() => {
      const responses = [
        "Thanks for reaching out! Would you like to schedule a demo of our reporting platform?",
        "That's a great question. I'd recommend connecting with our advisory team for a personalized consultation.",
        "We'd love to help. Can you tell us more about your specific challenge?",
        "Absolutely! Our team specializes in that area. Let's set up a time to discuss your needs.",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setMessages((prev) => [...prev, { role: "assistant", text: randomResponse }]);
    }, 500);
  };

  return (
    <section
      style={{
        backgroundColor: "#f8f4ed",
        paddingTop: "7rem",
        paddingBottom: "7rem",
      }}
    >
      <div className="container">
        {/* Header */}
        <div
          ref={containerRef}
          className="reveal"
          style={{ marginBottom: "4rem", maxWidth: "640px" }}
        >
          <span className="ss-label" style={{ marginBottom: "1rem", display: "block", color: "#2d4a3e" }}>
            Questions &amp; Support
          </span>
          <span className="ss-divider" />
          <h2
            className="ss-display"
            style={{
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 700,
              color: "#1e3329",
              marginBottom: "1.25rem",
              lineHeight: 1.15,
            }}
          >
            Frequently Asked{" "}
            <em style={{ fontStyle: "italic" }}>Questions</em>
          </h2>
          <p
            style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: "1rem",
              color: "#5a5750",
              lineHeight: 1.8,
            }}
          >
            Find answers to common questions about our advisory services, reporting platform, and engagement process.
          </p>
        </div>

        {/* FAQ Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "1rem",
            marginBottom: "4rem",
          }}
          className="lg:grid-cols-2"
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              style={{
                border: "1px solid rgba(201,185,154,0.3)",
                backgroundColor: expandedIndex === index ? "rgba(201,185,154,0.08)" : "#f8f4ed",
                transition: "all 0.3s ease",
              }}
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                style={{
                  width: "100%",
                  padding: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "1rem",
                  backgroundColor: "transparent",
                  border: "none",
                  textAlign: "left",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget.parentElement as HTMLDivElement;
                  el.style.backgroundColor = "rgba(201,185,154,0.12)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget.parentElement as HTMLDivElement;
                  el.style.backgroundColor = expandedIndex === index ? "rgba(201,185,154,0.08)" : "#f8f4ed";
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Libre Baskerville', serif",
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "#1e3329",
                    margin: 0,
                  }}
                >
                  {faq.question}
                </h3>
                <ChevronDown
                  size={18}
                  style={{
                    color: "#2d4a3e",
                    transition: "transform 0.3s ease",
                    transform: expandedIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                    flexShrink: 0,
                  }}
                />
              </button>

              {expandedIndex === index && (
                <div
                  style={{
                    padding: "0 1.5rem 1.5rem",
                    borderTop: "1px solid rgba(201,185,154,0.2)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Nunito Sans', sans-serif",
                      fontSize: "0.95rem",
                      color: "#5a5750",
                      lineHeight: 1.8,
                      margin: 0,
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          style={{
            textAlign: "center",
            padding: "2rem",
            backgroundColor: "rgba(201,185,154,0.08)",
            border: "1px solid rgba(201,185,154,0.2)",
          }}
        >
          <p
            style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: "0.95rem",
              color: "#5a5750",
              marginBottom: "1.5rem",
            }}
          >
            Didn't find what you're looking for?
          </p>
          <button
            onClick={() => {
              const el = document.querySelector("#contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="ss-btn-primary"
          >
            Get in Touch
          </button>
        </div>
      </div>

      {/* Live Chat Widget */}
      <div
        style={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          zIndex: 40,
        }}
      >
        {chatOpen ? (
          <div
            style={{
              width: "360px",
              maxHeight: "500px",
              backgroundColor: "#f8f4ed",
              border: "1px solid rgba(201,185,154,0.3)",
              borderRadius: "8px",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 4px 32px rgba(0,0,0,0.15)",
            }}
          >
            {/* Header */}
            <div
              style={{
                backgroundColor: "#2d4a3e",
                color: "#f8f4ed",
                padding: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "'Libre Baskerville', serif",
                    fontSize: "1rem",
                    fontWeight: 700,
                    margin: 0,
                  }}
                >
                  Salt &amp; Sage
                </p>
                <p
                  style={{
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontSize: "0.75rem",
                    color: "rgba(248,244,237,0.7)",
                    margin: "0.25rem 0 0 0",
                  }}
                >
                  We typically reply in minutes
                </p>
              </div>
              <button
                onClick={() => setChatOpen(false)}
                style={{
                  background: "none",
                  border: "none",
                  color: "#f8f4ed",
                  cursor: "pointer",
                  padding: 0,
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={chatMessagesRef}
              style={{
                flex: 1,
                overflowY: "auto",
                padding: "1rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              {messages.map((msg, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
                  }}
                >
                  <div
                    style={{
                      maxWidth: "80%",
                      padding: "0.75rem 1rem",
                      borderRadius: "8px",
                      backgroundColor: msg.role === "user" ? "#2d4a3e" : "rgba(201,185,154,0.15)",
                      color: msg.role === "user" ? "#f8f4ed" : "#1e3329",
                      fontFamily: "'Nunito Sans', sans-serif",
                      fontSize: "0.9rem",
                      lineHeight: 1.5,
                    }}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div
              style={{
                borderTop: "1px solid rgba(201,185,154,0.2)",
                padding: "0.75rem",
                display: "flex",
                gap: "0.5rem",
              }}
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") handleSendMessage();
                }}
                placeholder="Type a message..."
                style={{
                  flex: 1,
                  padding: "0.5rem 0.75rem",
                  border: "1px solid rgba(201,185,154,0.2)",
                  borderRadius: "4px",
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontSize: "0.9rem",
                  outline: "none",
                }}
              />
              <button
                onClick={handleSendMessage}
                style={{
                  padding: "0.5rem 1rem",
                  backgroundColor: "#2d4a3e",
                  color: "#f8f4ed",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#1e3329";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#2d4a3e";
                }}
              >
                Send
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setChatOpen(true)}
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              backgroundColor: "#2d4a3e",
              color: "#f8f4ed",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.transform = "scale(1.1)";
              el.style.boxShadow = "0 6px 24px rgba(0,0,0,0.25)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.transform = "scale(1)";
              el.style.boxShadow = "0 4px 16px rgba(0,0,0,0.2)";
            }}
          >
            <MessageCircle size={24} />
          </button>
        )}
      </div>
    </section>
  );
}
