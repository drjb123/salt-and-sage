/* =============================================================
   PurposeSection — Salt & Sage Warm Editorial Luxury
   Cream background, asymmetric two-column layout with purpose image
   ============================================================= */

import { useEffect, useRef } from "react";

const PURPOSE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663480340383/HbaTftMmHdRjcnojrJYzyk/purpose-img-dTWAgGqLYqST4Mx3oGUgGk.webp";

const pillars = [
  {
    number: "01",
    title: "Simplify Complexity",
    body: "We distill intricate challenges into clear, actionable strategies that drive focused execution. From navigating organizational change to untangling competing priorities, we cut through the noise so your team can move forward with confidence and clarity.",
  },
  {
    number: "02",
    title: "Strengthen Operations",
    body: "Building resilient systems and processes that sustain performance through change and growth. We leverage proven models forged in large organizations and adapt them to fit your unique environment—bringing enterprise-level discipline to businesses of any size.",
  },
  {
    number: "03",
    title: "Unlock Performance",
    body: "Data-driven insights paired with practical experience to deliver measurable, sustainable results. We identify the levers that matter most—whether it's revenue growth, cost optimization, or team productivity—and build accountability frameworks that turn potential into performance.",
  },
];

function useReveal(ref: React.RefObject<Element | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);
}

export default function PurposeSection() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const pillarsRef = useRef<(HTMLDivElement | null)[]>([]);

  useReveal(leftRef as React.RefObject<Element>);
  useReveal(rightRef as React.RefObject<Element>);

  useEffect(() => {
    pillarsRef.current.forEach((el, i) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => el.classList.add("visible"), i * 120);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(el);
      return () => observer.disconnect();
    });
  }, []);

  return (
    <section
      id="purpose"
      className="ss-section-cream"
      style={{ paddingTop: "7rem", paddingBottom: "7rem" }}
    >
      <div className="container">
        {/* Top: label + headline + image */}
        <div
          style={{
            display: "grid",
            gap: "4rem",
            marginBottom: "5rem",
          }}
          className="grid-cols-1 lg:grid-cols-2"
        >
          {/* Left: text */}
          <div
            ref={leftRef}
            className="reveal"
            style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}
          >
            <span className="ss-label" style={{ marginBottom: "1rem", display: "block" }}>
              Our Purpose
            </span>
            <span className="ss-divider" />
            <h2
              className="ss-display"
              style={{
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontWeight: 700,
                color: "#c0d4cd",
                marginBottom: "1.5rem",
                lineHeight: 1.15,
              }}
            >
              We don't just advise—{" "}
              <em style={{ fontStyle: "italic" }}>we implement.</em>
            </h2>
            <p
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontSize: "1rem",
                color: "#3d3d38",
                lineHeight: 1.8,
                marginBottom: "1.5rem",
              }}
            >
              Salt &amp; Sage is a platform built to connect organizations with comprehensive support or targeted, finite expertise across the disciplines that matter most.
            </p>
            <p
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontSize: "1rem",
                color: "#3d3d38",
                lineHeight: 1.8,
              }}
            >
              Whether you need end-to-end strategic partnership or a specialist to solve a specific challenge, we bridge the gap between vision and results—grounded in data, experience, and practical execution.
            </p>
          </div>

          {/* Right: image */}
          <div
            ref={rightRef}
            className="reveal reveal-delay-2"
            style={{ position: "relative" }}
          >
            <div
              style={{
                position: "absolute",
                top: "-1.5rem",
                left: "-1.5rem",
                right: "1.5rem",
                bottom: "1.5rem",
                border: "1px solid rgba(201,185,154,0.4)",
                zIndex: 0,
              }}
            />
            <img
              src={PURPOSE_IMG}
              alt="A focused advisory workspace with sage plant and open notebook"
              style={{
                width: "100%",
                height: "420px",
                objectFit: "cover",
                position: "relative",
                zIndex: 1,
                display: "block",
              }}
            />
          </div>
        </div>

        {/* Pillars */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2px",
            backgroundColor: "rgba(201,185,154,0.2)",
          }}
        >
          {pillars.map((pillar, i) => (
            <div
              key={pillar.number}
              ref={(el) => { pillarsRef.current[i] = el; }}
              className="reveal ss-card-service"
              style={{ backgroundColor: "#f8f4ed" }}
            >
              <div
                style={{
                  fontFamily: "'Libre Baskerville', serif",
                  fontSize: "2.5rem",
                  fontWeight: 700,
                  color: "rgba(45,74,62,0.12)",
                  marginBottom: "1rem",
                  lineHeight: 1,
                }}
              >
                {pillar.number}
              </div>
              <h3
                style={{
                  fontFamily: "'Libre Baskerville', serif",
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  color: "#c0d4cd",
                  marginBottom: "1rem",
                  lineHeight: 1.3,
                }}
              >
                {pillar.title}
              </h3>
              <span className="ss-divider" style={{ marginBottom: "1rem" }} />
              <p
                style={{
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontSize: "0.92rem",
                  color: "#5a5750",
                  lineHeight: 1.75,
                }}
              >
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
