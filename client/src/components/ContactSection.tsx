/* =============================================================
   ContactSection — Salt & Sage Warm Editorial Luxury
   Cream background, simple CTA with contact form placeholder
   ============================================================= */

import { useEffect, useRef, useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { toast } from "sonner";

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

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
    observe(sectionRef.current);
    observe(formRef.current, 200);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      toast.error("Please fill in your name and email.");
      return;
    }
    setSubmitted(true);
    toast.success("Message received. We'll be in touch shortly.");
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.875rem 1rem",
    backgroundColor: "transparent",
    border: "1px solid rgba(45,74,62,0.25)",
    fontFamily: "'Nunito Sans', sans-serif",
    fontSize: "0.92rem",
    color: "#1c1c1a",
    outline: "none",
    transition: "border-color 0.3s ease",
  };

  return (
    <section
      id="contact"
      className="ss-section-cream"
      style={{ paddingTop: "7rem", paddingBottom: "7rem" }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gap: "5rem",
          }}
          className="grid-cols-1 lg:grid-cols-2"
        >
          {/* Left: CTA copy */}
          <div
            ref={sectionRef}
            className="reveal"
            style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}
          >
            <span className="ss-label" style={{ marginBottom: "1rem", display: "block" }}>
              Get in Touch
            </span>
            <span className="ss-divider" />
            <h2
              className="ss-display"
              style={{
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontWeight: 700,
                color: "#1e3329",
                marginBottom: "1.5rem",
                lineHeight: 1.15,
              }}
            >
              Let's Build Your{" "}
              <em style={{ fontStyle: "italic" }}>Custom Roadmap</em>
            </h2>
            <p
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontSize: "1rem",
                color: "#5a5750",
                lineHeight: 1.8,
                marginBottom: "2.5rem",
              }}
            >
              Schedule a 20-minute discovery call. We'll analyze your practice metrics, identify your biggest opportunity, and show you exactly what's possible.
            </p>

            {/* Value props */}
            {[
              "Free practice audit (20 min call)",
              "Custom roadmap with specific metrics",
              "No obligation, just clarity",
            ].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "0.75rem",
                }}
              >
                <div
                  style={{
                    width: "6px",
                    height: "6px",
                    backgroundColor: "#c9b99a",
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontSize: "0.9rem",
                    color: "#3d3d38",
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Right: Form */}
          <div ref={formRef} className="reveal reveal-delay-2">
            {submitted ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1.5rem",
                  padding: "4rem 2rem",
                  border: "1px solid rgba(201,185,154,0.4)",
                  backgroundColor: "#f8f4ed",
                  textAlign: "center",
                  height: "100%",
                }}
              >
                <CheckCircle size={40} style={{ color: "#2d4a3e" }} />
                <h3
                  style={{
                    fontFamily: "'Libre Baskerville', serif",
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    color: "#1e3329",
                  }}
                >
                  Thank you, {name}.
                </h3>
                <p
                  style={{
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontSize: "0.95rem",
                    color: "#5a5750",
                    lineHeight: 1.7,
                    maxWidth: "320px",
                  }}
                >
                  We've received your message and will be in touch shortly to discuss how Salt &amp; Sage can support your organization.
                </p>
                <p
                  style={{
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontSize: "0.85rem",
                    color: "#999",
                    lineHeight: 1.6,
                    maxWidth: "320px",
                    fontStyle: "italic",
                  }}
                >
                  We've also added your email to our advisory insights newsletter. You'll receive curated content on practice optimization, leadership, and operational excellence.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                  padding: "3rem",
                  border: "1px solid rgba(201,185,154,0.3)",
                  backgroundColor: "#f8f4ed",
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Libre Baskerville', serif",
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    color: "#1e3329",
                    marginBottom: "0.5rem",
                  }}
                >
                  Start a Conversation
                </h3>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label
                      style={{
                        fontFamily: "'Nunito Sans', sans-serif",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "#6b6560",
                        display: "block",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      style={inputStyle}
                      onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = "#2d4a3e"; }}
                      onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = "rgba(45,74,62,0.25)"; }}
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        fontFamily: "'Nunito Sans', sans-serif",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "#6b6560",
                        display: "block",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      style={inputStyle}
                      onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = "#2d4a3e"; }}
                      onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = "rgba(45,74,62,0.25)"; }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    style={{
                      fontFamily: "'Nunito Sans', sans-serif",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "#6b6560",
                      display: "block",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Organization
                  </label>
                  <input
                    type="text"
                    placeholder="Your organization"
                    style={inputStyle}
                    onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = "#2d4a3e"; }}
                    onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = "rgba(45,74,62,0.25)"; }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      fontFamily: "'Nunito Sans', sans-serif",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "#6b6560",
                      display: "block",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your challenge or goal..."
                    rows={4}
                    style={{
                      ...inputStyle,
                      resize: "vertical",
                    }}
                    onFocus={(e) => { (e.target as HTMLTextAreaElement).style.borderColor = "#2d4a3e"; }}
                    onBlur={(e) => { (e.target as HTMLTextAreaElement).style.borderColor = "rgba(45,74,62,0.25)"; }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    padding: "0.9rem 2rem",
                    backgroundColor: "#2d4a3e",
                    color: "#f8f4ed",
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    border: "none",
                    transition: "background-color 0.3s ease",
                    alignSelf: "flex-start",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#1e3329";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#2d4a3e";
                  }}
                >
                  Send Message
                  <ArrowRight size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
