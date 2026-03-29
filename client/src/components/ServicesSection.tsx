/* =============================================================
   ServicesSection — Salt & Sage Warm Editorial Luxury
   Forest green background, service cards in a staggered grid
   ============================================================= */

import { useEffect, useRef } from "react";
import {
  Map,
  TrendingUp,
  Settings,
  Users,
  RefreshCw,
  BarChart2,
} from "lucide-react";

const services = [
  {
    icon: Map,
    title: "Strategic Planning",
    body: "Develop clear, actionable roadmaps that align leadership vision with measurable business outcomes.",
  },
  {
    icon: TrendingUp,
    title: "Growth Strategy",
    body: "Identify and unlock sustainable growth opportunities through market analysis, positioning, and disciplined execution.",
  },
  {
    icon: Settings,
    title: "Operational Excellence",
    body: "Streamline processes, eliminate inefficiencies, and build systems that scale with your organization.",
  },
  {
    icon: Users,
    title: "Leadership Advisory",
    body: "Equip leaders with the frameworks, clarity, and confidence to navigate complexity and drive alignment.",
  },
  {
    icon: RefreshCw,
    title: "Change Management",
    body: "Guide organizations through transformation with structured approaches that minimize disruption and maximize adoption.",
  },
  {
    icon: BarChart2,
    title: "Performance & Accountability",
    body: "Implement measurement systems and accountability structures that turn strategy into consistent, trackable results.",
  },
];

export default function ServicesSection() {
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
    cardsRef.current.forEach((el, i) => observe(el, i * 90));
  }, []);

  return (
    <section
      id="services"
      className="ss-section-forest"
      style={{ paddingTop: "7rem", paddingBottom: "7rem", position: "relative", overflow: "hidden" }}
    >
      {/* Subtle background texture overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url(https://d2xsxph8kpxj0f.cloudfront.net/310519663480340383/HbaTftMmHdRjcnojrJYzyk/vision-bg-hXoC6pWc8YTMqA24zXsvSc.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.25,
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative" }}>
        {/* Header */}
        <div
          ref={headerRef}
          className="reveal"
          style={{ marginBottom: "4rem", maxWidth: "600px" }}
        >
          <span className="ss-label" style={{ marginBottom: "1rem", display: "block" }}>
            Our Services
          </span>
          <span className="ss-divider" />
          <h2
            className="ss-display"
            style={{
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 700,
              color: "#f8f4ed",
              marginBottom: "1.25rem",
              lineHeight: 1.15,
            }}
          >
            Advisory built{" "}
            <em style={{ fontStyle: "italic", color: "#c9b99a" }}>for impact</em>
          </h2>
          <p
            style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: "1rem",
              color: "rgba(248,244,237,0.72)",
              lineHeight: 1.75,
            }}
          >
            Tailored advisory services designed to meet organizations where they are—and move them where they need to be.
          </p>
        </div>

        {/* Services Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5px",
            backgroundColor: "rgba(197,213,208,0.15)",
          }}
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                ref={(el) => { cardsRef.current[i] = el; }}
                className="reveal"
                style={{
                  padding: "2.5rem",
                  backgroundColor: "rgba(30,51,41,0.85)",
                  borderTop: "2px solid transparent",
                  transition: "border-color 0.3s ease, background-color 0.3s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderTopColor = "#c9b99a";
                  el.style.backgroundColor = "rgba(45,74,62,0.95)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderTopColor = "transparent";
                  el.style.backgroundColor = "rgba(30,51,41,0.85)";
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    backgroundColor: "rgba(201,185,154,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.5rem",
                    border: "1px solid rgba(201,185,154,0.2)",
                  }}
                >
                  <Icon size={18} style={{ color: "#c9b99a" }} />
                </div>
                <h3
                  style={{
                    fontFamily: "'Libre Baskerville', serif",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "#f8f4ed",
                    marginBottom: "0.875rem",
                    lineHeight: 1.3,
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontSize: "0.9rem",
                    color: "rgba(248,244,237,0.65)",
                    lineHeight: 1.75,
                  }}
                >
                  {service.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
