/* =============================================================
   TestimonialsSection — Salt & Sage Warm Editorial Luxury
   Cream background, single featured testimonial with client story
   ============================================================= */

import { useEffect, useRef } from "react";
import { Quote } from "lucide-react";

export default function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const authorRef = useRef<HTMLDivElement>(null);

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
    observe(quoteRef.current, 150);
    observe(authorRef.current, 300);
  }, []);

  return (
    <section
      id="testimonials"
      className="ss-section-cream"
      style={{ paddingTop: "7rem", paddingBottom: "7rem" }}
    >
      <div className="container">
        {/* Header */}
        <div
          ref={containerRef}
          className="reveal"
          style={{ marginBottom: "4rem", maxWidth: "640px" }}
        >
          <span className="ss-label" style={{ marginBottom: "1rem", display: "block" }}>
            Client Stories
          </span>
          <span className="ss-divider" />
          <h2
            className="ss-display"
            style={{
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 700,
              color: "#c8d5c0",
              marginBottom: "1.5rem",
              lineHeight: 1.15,
            }}
          >
            Transforming organizations,{" "}
            <em style={{ fontStyle: "italic" }}>one leader at a time</em>
          </h2>
          <p
            style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: "1rem",
              color: "#5a5750",
              lineHeight: 1.8,
            }}
          >
            Real results from real partnerships. Hear how Salt &amp; Sage has helped leaders regain control, clarity, and confidence.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div
          ref={quoteRef}
          className="reveal"
          style={{
            padding: "3.5rem",
            backgroundColor: "#f8f4ed",
            border: "1px solid rgba(201,185,154,0.3)",
            position: "relative",
            marginBottom: "3rem",
          }}
        >
          {/* Quote icon */}
          <div
            style={{
              position: "absolute",
              top: "-1.5rem",
              left: "3.5rem",
              width: "48px",
              height: "48px",
              backgroundColor: "#c8d5c0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
            }}
          >
            <Quote size={20} style={{ color: "#c9b99a" }} />
          </div>

          {/* Testimonial text */}
          <div style={{ marginTop: "1rem" }}>
            <p
              style={{
                fontFamily: "'Libre Baskerville', serif",
                fontSize: "1.1rem",
                fontStyle: "italic",
                color: "#c8d5c0",
                lineHeight: 1.8,
                marginBottom: "2rem",
              }}
            >
              "Working with Reenie Rausch and Salt and Sage Advisory Services has been a pivotal turning point in my professional life. They have allowed me to return to what I value most—caring for my patients—while bringing structure, clarity, and control back to the business side of my practice."
            </p>

            <p
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontSize: "0.95rem",
                color: "#5a5750",
                lineHeight: 1.8,
                marginBottom: "1.5rem",
              }}
            >
              Reenie has a unique ability to identify operational blind spots and uncover recurring inefficiencies that I had not fully recognized. She brought disciplined analysis to areas I was unintentionally neglecting and implemented systems that transformed how the practice operates. Through automation and structured reporting, she established clear metrics and management processes that significantly improved both efficiency and accuracy.
            </p>

            <p
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontSize: "0.95rem",
                color: "#5a5750",
                lineHeight: 1.8,
                marginBottom: "1.5rem",
              }}
            >
              The result has been a fundamental shift in how I function as a clinician and leader. I am no longer burdened by the constant pressure of managing overhead and team dynamics in my personal time. Instead, the practice now runs on a framework that is predictable, measurable, and manageable. Leadership has become more streamlined, allowing me to support my team effectively without being consumed by the operational demands.
            </p>

            <p
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontSize: "0.95rem",
                color: "#5a5750",
                lineHeight: 1.8,
                marginBottom: "1.5rem",
              }}
            >
              Perhaps most importantly, this experience exposed gaps in my knowledge that I was previously unaware of. That awareness, combined with the systems now in place, has created a level of confidence and control I had not experienced before.
            </p>

            <p
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontSize: "0.95rem",
                color: "#5a5750",
                lineHeight: 1.8,
              }}
            >
              My only regret is not engaging Reenie and Salt and Sage sooner. The impact has been substantial, and I am genuinely optimistic about the future of my career with this new perspective and infrastructure in place."
            </p>
          </div>

          {/* Divider */}
          <div
            style={{
              width: "3rem",
              height: "1px",
              backgroundColor: "#c9b99a",
              margin: "2rem 0",
            }}
          />

          {/* Author */}
          <div
            ref={authorRef}
            className="reveal reveal-delay-2"
          >
            <p
              style={{
                fontFamily: "'Libre Baskerville', serif",
                fontSize: "1.05rem",
                fontWeight: 700,
                color: "#c8d5c0",
                marginBottom: "0.25rem",
              }}
            >
              Jeff H Bynum, DDS
            </p>
            <p
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontSize: "0.85rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#c9b99a",
              }}
            >
              Dental Practice Owner
            </p>
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <p
            style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: "0.95rem",
              color: "#5a5750",
              marginBottom: "1.5rem",
            }}
          >
            Ready to write your own success story?
          </p>
          <button
            onClick={() => {
              const el = document.querySelector("#contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="ss-btn-primary"
          >
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
}
