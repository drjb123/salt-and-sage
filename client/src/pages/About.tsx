/* =============================================================
   About — Salt & Sage About Page
   Reenie's story, philosophy, and bio
   ============================================================= */

import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Chatbot from "@/components/Chatbot";
import Footer from "@/components/Footer";

export default function About() {
  const heroRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);

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

    observe(heroRef.current);
    observe(bioRef.current, 200);
  }, []);

  return (
    <div style={{ backgroundColor: "#f8f4ed" }}>
      <Navbar />
      <Chatbot />

      {/* Hero */}
      <section
        style={{
          minHeight: "60vh",
          backgroundColor: "#f8f4ed",
          display: "flex",
          alignItems: "center",
          paddingTop: "20rem",
          paddingBottom: "4rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Muted sage hero background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url(https://d2xsxph8kpxj0f.cloudfront.net/310519663480340383/HbaTftMmHdRjcnojrJYzyk/about-hero-new_4d69cd23.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.15,
            pointerEvents: "none",
          }}
        />
        <div className="container" style={{ position: "relative" }}>
          <div
            ref={heroRef}
            className="ss-fade-up"
            style={{ maxWidth: "720px" }}
          >
            <span
              className="ss-label"
              style={{
                marginBottom: "1rem",
                display: "block",
                color: "#2d2d2a",
              }}
            >
              About Salt &amp; Sage
            </span>
            <span className="ss-divider" />
            <h1
              className="ss-display"
              style={{
                fontSize: "clamp(2.4rem, 5vw, 4rem)",
                fontWeight: 700,
                color: "#2d2d2a",
                marginBottom: "1.5rem",
                lineHeight: 1.1,
              }}
            >
              The Heart Behind{" "}
              <em style={{ fontStyle: "italic", color: "#2d2d2a" }}>
                the Work
              </em>
            </h1>
            <blockquote
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.15rem",
                fontStyle: "italic",
                color: "#5a5750",
                lineHeight: 1.9,
                maxWidth: "620px",
                borderLeft: "3px solid #c0d4cd",
                paddingLeft: "1.5rem",
                margin: 0,
              }}
            >
              "I've come to see my work not as a pursuit of success, but as a responsibility to steward the experiences, perspective, and opportunities I've been given. I lead with curiosity, act with intention, and stay grounded in the belief that the greatest impact comes from serving others well. I don't have all the answers, but I'm committed to showing up with clarity, consistency, and grace—trusting that when we do that, the right growth follows - and growth is our goal together."
              <span
                style={{
                  display: "block",
                  marginTop: "1rem",
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  color: "#2d2d2a",
                  letterSpacing: "0.04em",
                }}
              >
                — Reenie Rausch
              </span>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section
        style={{
          backgroundColor: "#f8f4ed",
          paddingTop: "5rem",
          paddingBottom: "7rem",
        }}
      >
        <div className="container">
          <div
            ref={bioRef}
            className="ss-fade-up"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "3rem",
              maxWidth: "1000px",
              margin: "0 auto",
            }}
          >
            {/* Photo + Name */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1.5rem",
              }}
            >
              <div
                style={{
                  width: "320px",
                  maxWidth: "100%",
                  borderRadius: "1rem",
                  overflow: "hidden",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
                }}
              >
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663480340383/HbaTftMmHdRjcnojrJYzyk/reenie-bio_96ac92f7.jpeg"
                  alt="Reenie Rausch, Founder of Salt & Sage Advisory Group"
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
              </div>
              <div style={{ textAlign: "center" }}>
                <h2
                  className="ss-display"
                  style={{
                    fontSize: "1.8rem",
                    fontWeight: 700,
                    color: "#2d2d2a",
                    marginBottom: "0.25rem",
                  }}
                >
                  Reenie Rausch
                </h2>
                <p
                  className="ss-label"
                  style={{
                    color: "#8a8475",
                    fontSize: "0.85rem",
                  }}
                >
                  Founder, Salt &amp; Sage Advisory Group
                </p>
              </div>
            </div>

            {/* Bio Text */}
            <div
              style={{
                maxWidth: "700px",
                margin: "0 auto",
              }}
            >
              <h3
                className="ss-display"
                style={{
                  fontSize: "1.6rem",
                  fontWeight: 700,
                  color: "#2d2d2a",
                  marginBottom: "1.5rem",
                  textAlign: "center",
                }}
              >
                About Me
              </h3>

              <p
                style={{
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontSize: "1.05rem",
                  color: "#5a5750",
                  lineHeight: 1.9,
                  marginBottom: "1.5rem",
                }}
              >
                Hi! I'm Reenie, founder of Salt &amp; Sage Advisory Group.
                After 20 years in the dental space and 10 in retail, I've
                learned that results always come down to people. Whether it's a
                small team or a large organization, relationships drive
                success—and helping people thrive is what I'm most passionate
                about.
              </p>

              <p
                style={{
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontSize: "1.05rem",
                  color: "#5a5750",
                  lineHeight: 1.9,
                  marginBottom: "1.5rem",
                }}
              >
                Salt &amp; Sage started almost by accident—one client led to
                two, then three. I realized many small business owners want to
                grow but feel blocked by access to the right people or networks.
                My mission is to remove that barrier, connecting leaders with
                the expertise and support they need to achieve their goals.
              </p>

              <p
                style={{
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontSize: "1.05rem",
                  color: "#5a5750",
                  lineHeight: 1.9,
                }}
              >
                I thrive in uncertainty, blank slates, and turning points,
                guided by genuine curiosity and a desire to serve. I don't have
                all the answers—but I'll walk the journey with you, tap into my
                network when needed, and celebrate the wins along the way.
                Outside of work, my family and I love traveling the world,
                creating memories, and laughing through it all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Connect CTA Section */}
      <section
        style={{
          backgroundColor: "#2d2d2a",
          paddingTop: "6rem",
          paddingBottom: "6rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle sage accent background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url(https://d2xsxph8kpxj0f.cloudfront.net/310519663480340383/HbaTftMmHdRjcnojrJYzyk/about-hero-new_4d69cd23.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.08,
            pointerEvents: "none",
          }}
        />
        <div className="container" style={{ position: "relative" }}>
          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <h2
              className="ss-display"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                color: "#f8f4ed",
                marginBottom: "1.5rem",
                lineHeight: 1.2,
              }}
            >
              Ready to Transform Your Business?
            </h2>
            <p
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontSize: "1.1rem",
                color: "rgba(248,244,237,0.85)",
                lineHeight: 1.8,
                marginBottom: "3rem",
                maxWidth: "650px",
                margin: "0 auto 3rem",
              }}
            >
              Whether you're navigating growth, restructuring operations, or building stronger systems, I'm here to help. Let's explore how Salt &amp; Sage can support your vision.
            </p>

            {/* CTA Buttons */}
            <div
              style={{
                display: "flex",
                gap: "1.5rem",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <button
                onClick={() => {
                  // Open Calendly or booking link
                  window.open("https://calendly.com/reenie-rausch", "_blank");
                }}
                style={{
                  padding: "1rem 2rem",
                  backgroundColor: "#c0d4cd",
                  color: "#2d2d2a",
                  border: "none",
                  borderRadius: "4px",
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontSize: "1rem",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.backgroundColor = "#a8c2ba";
                  el.style.transform = "translateY(-2px)";
                  el.style.boxShadow = "0 8px 24px rgba(192,212,205,0.3)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.backgroundColor = "#c0d4cd";
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                }}
              >
                Schedule a Discovery Call
              </button>
              <button
                onClick={() => {
                  // Open email client
                  window.location.href = "mailto:reenie@saltandsageadvisory.com?subject=Consultation%20Inquiry";
                }}
                style={{
                  padding: "1rem 2rem",
                  backgroundColor: "transparent",
                  color: "#c0d4cd",
                  border: "2px solid #c0d4cd",
                  borderRadius: "4px",
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontSize: "1rem",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.backgroundColor = "rgba(192,212,205,0.1)";
                  el.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.backgroundColor = "transparent";
                  el.style.transform = "translateY(0)";
                }}
              >
                Get in Touch
              </button>
            </div>

            {/* Subtext */}
            <p
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontSize: "0.9rem",
                color: "rgba(248,244,237,0.65)",
                marginTop: "2.5rem",
              }}
            >
              First consultations are complimentary. Let's talk about your goals.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
