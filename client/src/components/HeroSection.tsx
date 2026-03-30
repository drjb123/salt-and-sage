/* =============================================================
   HeroSection — Salt & Sage Warm Editorial Luxury
   Full-bleed cream background with sage leaf image, asymmetric layout
   ============================================================= */

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663480340383/HbaTftMmHdRjcnojrJYzyk/hero-bg-CK6ayYBvHLNKnnSa4jkXDM.webp";

export default function HeroSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Staggered entrance animation
    const elements = [labelRef.current, headlineRef.current, subRef.current, ctaRef.current];
    elements.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      setTimeout(() => {
        if (!el) return;
        el.style.transition = "opacity 0.9s ease, transform 0.9s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 200 + i * 160);
    });
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        backgroundColor: "#f8f4ed",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Background image — right side */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center right",
          opacity: 0.55,
        }}
      />

      {/* Gradient overlay — left fade */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(105deg, #f8f4ed 45%, rgba(248,244,237,0.6) 70%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div className="container relative" style={{ paddingTop: "8rem", paddingBottom: "6rem" }}>
        <div style={{ maxWidth: "680px" }}>
          {/* Label */}
          <div ref={labelRef} style={{ marginBottom: "1.5rem" }}>
            <span className="ss-label" style={{ color: "#2d2d2a" }}>
              Strategic Advisory Platform
            </span>
          </div>

          {/* Headline */}
          <h1
            ref={headlineRef}
            className="ss-display"
            style={{
              fontSize: "clamp(2.6rem, 5.5vw, 4.2rem)",
              fontWeight: 700,
              color: "#2d2d2a",
              marginBottom: "1.75rem",
              lineHeight: 1.08,
            }}
          >
            Your Practice Can Produce{" "}
            <em style={{ fontStyle: "italic", color: "#2d2d2a" }}>10+ Cases Per Week</em>
          </h1>

          {/* Divider */}
          <span className="ss-divider" />

          {/* Subheadline */}
          <p
            ref={subRef}
            style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: "1.05rem",
              fontWeight: 400,
              color: "#3d3d38",
              lineHeight: 1.75,
              marginBottom: "2.5rem",
              maxWidth: "540px",
            }}
          >
            Dental practices like yours are reducing overhead from 70% to 49%, shrinking their team, and working fewer days—while doubling production. We show you how.
          </p>

          {/* CTAs */}
          <div ref={ctaRef} style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <button
              onClick={() => {
                const el = document.querySelector("#metrics");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="ss-btn-primary"
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              See Your Potential
              <ArrowRight size={14} />
            </button>
            <button
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.875rem 2rem",
                backgroundColor: "transparent",
                color: "#2d2d2a",
                fontFamily: "'Nunito Sans', sans-serif",
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                border: "1px solid rgba(232,237,228,0.4)",
                transition: "border-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "#e8ede4";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(232,237,228,0.4)";
              }}
            >
              Schedule Discovery Call
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "-3rem",
            left: "3rem",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
          }}
        >
          <div
            style={{
              width: "1px",
              height: "48px",
              backgroundColor: "#c9b99a",
              animation: "scrollPulse 2s ease-in-out infinite",
            }}
          />
          <span
            style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: "0.65rem",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#3a3530",
              writingMode: "vertical-rl",
            }}
          >
            Scroll
          </span>
        </div>
      </div>

      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.4; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.15); }
        }
      `}</style>
    </section>
  );
}
