/* =============================================================
   ExpertsSection — Salt & Sage Warm Editorial Luxury
   Cream background, expert discipline cards in a flowing grid
   ============================================================= */

import { useEffect, useRef } from "react";
import {
  UserCheck,
  MessageSquare,
  Star,
  Cpu,
  Megaphone,
  DollarSign,
  Target,
  Shield,
} from "lucide-react";

const experts = [
  {
    icon: UserCheck,
    title: "Human Resources",
    body: "Talent strategy, organizational design, and workforce planning that attract and retain top performers.",
  },
  {
    icon: MessageSquare,
    title: "Communication",
    body: "Messaging, stakeholder engagement, and brand narrative that build trust and drive alignment.",
  },
  {
    icon: Star,
    title: "Leadership",
    body: "Executive coaching, succession planning, and development that equip teams to navigate complexity.",
  },
  {
    icon: Cpu,
    title: "Operational Excellence",
    body: "Process optimization and systems design that scale efficiently and eliminate bottlenecks.",
    href: "/about",
  },
  {
    icon: Megaphone,
    title: "Marketing",
    body: "Market positioning and go-to-market strategy that drive measurable growth.",
  },
  {
    icon: DollarSign,
    title: "Finance",
    body: "Financial planning and forecasting that provide clarity for decision-making.",
  },
  {
    icon: Target,
    title: "Sales",
    body: "Revenue strategy and pipeline development that convert opportunity into results.",
  },
  {
    icon: Shield,
    title: "Compliance & Risk",
    body: "Regulatory alignment and risk mitigation frameworks that protect growth and ensure operational integrity.",
  },
];

export default function ExpertsSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

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

    observe(headerRef.current);
    cardsRef.current.forEach((el, i) => observe(el, i * 80));
  }, []);

  return (
    <section
      id="experts"
      className="ss-section-cream"
      style={{ paddingTop: "7rem", paddingBottom: "7rem" }}
    >
      <div className="container">
        {/* Header */}
        <div
          ref={headerRef}
          className="reveal"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginBottom: "4rem",
          }}
        >
          <span className="ss-label" style={{ marginBottom: "1rem", display: "block" }}>
            Advisory Experts
          </span>
          <span className="ss-divider" />
          <div
          style={{
            display: "grid",
            gap: "1.5rem",
            width: "100%",
          }}
          className="grid-cols-1 lg:grid-cols-2"
          >
            <h2
              className="ss-display"
              style={{
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontWeight: 700,
                color: "#2d2d2a",
                lineHeight: 1.15,
              }}
            >
              Specialized expertise,{" "}
              <em style={{ fontStyle: "italic" }}>on demand</em>
            </h2>
            <p
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontSize: "1rem",
                color: "#5a5750",
                lineHeight: 1.8,
                alignSelf: "end",
              }}
            >
              Our program connects you with seasoned advisory professionals across every critical business function—whether you need holistic support or a specialist for a focused engagement.
            </p>
          </div>
        </div>

        {/* Expert Cards — 4-col on large, 2-col on medium, 1-col on small */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1.5rem",
          }}
        >
          {experts.map((expert, i) => {
            const Icon = expert.icon;
            const isClickable = !!(expert as any).href;
            return (
              <div
                key={expert.title}
                ref={(el) => { cardsRef.current[i] = el; }}
                className="reveal"
                onClick={() => { if (isClickable) window.location.href = (expert as any).href; }}
                style={{
                  padding: "2rem",
                  backgroundColor: "#f8f4ed",
                  border: "1px solid rgba(201,185,154,0.3)",
                  transition: "border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: isClickable ? "pointer" : "default",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = "rgba(232,237,228,0.5)";
                  el.style.transform = "translateY(-4px)";
                  el.style.boxShadow = "0 12px 32px rgba(232,237,228,0.08)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = "rgba(201,185,154,0.3)";
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#e8ede4",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.25rem",
                  }}
                >
                  <Icon size={16} style={{ color: "#5c4a2e" }} />
                </div>

                <h3
                  style={{
                    fontFamily: "'Libre Baskerville', serif",
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "#2d2d2a",
                    marginBottom: "0.75rem",
                    lineHeight: 1.3,
                  }}
                >
                  {expert.title}
                </h3>

                {/* Mini divider */}
                <div
                  style={{
                    width: "2rem",
                    height: "1px",
                    backgroundColor: "#c9b99a",
                    marginBottom: "0.875rem",
                  }}
                />

                <p
                  style={{
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontSize: "0.88rem",
                    color: "#5a5750",
                    lineHeight: 1.75,
                  }}
                >
                  {expert.body}
                </p>
              </div>
            );
          })}

          {/* "More disciplines" card */}
          <div
            style={{
              padding: "2rem",
              backgroundColor: "#e8ede4",
              border: "1px solid #e8ede4",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: "1rem",
            }}
          >
            <p
              style={{
                fontFamily: "'Libre Baskerville', serif",
                fontSize: "1rem",
                fontStyle: "italic",
                color: "rgba(10,10,10,0.96)",
                lineHeight: 1.5,
              }}
            >
              Don't see your area? Our program spans many more disciplines.
            </p>
            <button
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#2d2d2a",
                backgroundColor: "#c9b99a",
                border: "none",
                padding: "0.65rem 1.25rem",
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#b8a88a";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#c9b99a";
              }}
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
