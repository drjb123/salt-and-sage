/* =============================================================
   VisionSection — Salt & Sage Warm Editorial Luxury
   Deep forest green background, editorial quote, brand pillars
   ============================================================= */

import { useEffect, useRef } from "react";

const VISION_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663480340383/HbaTftMmHdRjcnojrJYzyk/vision-bg-hXoC6pWc8YTMqA24zXsvSc.webp";

const pillars = [
  { label: "Strategic", sub: "Clarity" },
  { label: "Operational", sub: "Excellence" },
  { label: "Measurable", sub: "Outcomes" },
  { label: "Enduring", sub: "Partnerships" },
];

export default function VisionSection() {
  const quoteRef = useRef<HTMLDivElement>(null);
  const pillarsRef = useRef<(HTMLDivElement | null)[]>([]);
  const textRef = useRef<HTMLDivElement>(null);

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

    observe(textRef.current);
    observe(quoteRef.current, 200);
    pillarsRef.current.forEach((el, i) => observe(el, 100 + i * 100));
  }, []);

  return (
    <section
      id="vision"
      style={{
        position: "relative",
        overflow: "hidden",
        paddingTop: "7rem",
        paddingBottom: "7rem",
        backgroundColor: "#7a9a8f",
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${VISION_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.6,
        }}
      />

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, rgba(30,51,41,0.92) 0%, rgba(45,74,62,0.82) 100%)",
        }}
      />

      <div className="container" style={{ position: "relative" }}>
        {/* Label + Headline */}
        <div
          ref={textRef}
          className="reveal"
          style={{ marginBottom: "4rem", maxWidth: "640px" }}
        >
          <span className="ss-label" style={{ marginBottom: "1rem", display: "block" }}>
            Our Vision
          </span>
          <span className="ss-divider" />
          <h2
            className="ss-display"
            style={{
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 700,
              color: "#f8f4ed",
              marginBottom: "1.5rem",
              lineHeight: 1.15,
            }}
          >
            Elevating organizations through{" "}
            <em style={{ fontStyle: "italic", color: "#c9b99a" }}>thoughtful strategy</em>
          </h2>
          <p
            style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: "1rem",
              color: "rgba(248,244,237,0.75)",
              lineHeight: 1.8,
            }}
          >
            We strive to be a trusted advisory partner known for operational excellence and measurable outcomes. We build enduring partnerships where leaders feel confident, aligned, and equipped to scale with purpose.
          </p>
        </div>

        {/* Quote */}
        <div
          ref={quoteRef}
          className="reveal"
          style={{
            borderLeft: "3px solid #c9b99a",
            paddingLeft: "2rem",
            marginBottom: "5rem",
            maxWidth: "720px",
          }}
        >
          <p
            style={{
              fontFamily: "'Libre Baskerville', serif",
              fontSize: "clamp(1.05rem, 2vw, 1.3rem)",
              fontStyle: "italic",
              color: "rgba(248,244,237,0.9)",
              lineHeight: 1.7,
            }}
          >
            "Salt &amp; Sage represents balance—where insight meets action, and where disciplined strategy is paired with grounded, real-world execution."
          </p>
        </div>

        {/* Brand Pillars */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "1px",
            backgroundColor: "rgba(197,213,208,0.15)",
          }}
        >
          {pillars.map((pillar, i) => (
            <div
              key={pillar.label}
              ref={(el) => { pillarsRef.current[i] = el; }}
              className="reveal"
              style={{
                padding: "2.5rem 2rem",
                backgroundColor: "rgba(30,51,41,0.7)",
                borderBottom: "2px solid transparent",
                transition: "border-color 0.3s ease, background-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderBottomColor = "#c9b99a";
                el.style.backgroundColor = "rgba(45,74,62,0.8)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderBottomColor = "transparent";
                el.style.backgroundColor = "rgba(30,51,41,0.7)";
              }}
            >
              <p
                style={{
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#c9b99a",
                  marginBottom: "0.5rem",
                }}
              >
                {pillar.label}
              </p>
              <p
                style={{
                  fontFamily: "'Libre Baskerville', serif",
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  color: "#f8f4ed",
                  lineHeight: 1.2,
                }}
              >
                {pillar.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
