/* =============================================================
   ServicesSection — Salt & Sage Warm Editorial Luxury
   Clickable service cards with category badges, screenshot-style
   ============================================================= */

import { useEffect, useRef } from "react";
import {
  Map,
  TrendingUp,
  Settings,
  Users,
  RefreshCw,
  BarChart2,
  ArrowRight,
} from "lucide-react";

type Category = "STRATEGY" | "GROWTH" | "OPERATIONS" | "LEADERSHIP" | "CHANGE" | "ANALYTICS";

const categoryColors: Record<Category, { bg: string; text: string }> = {
  STRATEGY: { bg: "#d4e4d1", text: "#3a5a3a" },
  GROWTH: { bg: "#c8dcc0", text: "#2e4a2e" },
  OPERATIONS: { bg: "#dbe8d4", text: "#4a6b42" },
  LEADERSHIP: { bg: "#e0e8d8", text: "#556b4a" },
  CHANGE: { bg: "#cdddc6", text: "#3d5c35" },
  ANALYTICS: { bg: "#d8e2cf", text: "#4e6844" },
};

const services = [
  {
    icon: Map,
    title: "Strategic Planning",
    body: "Build roadmaps that align vision with measurable outcomes.",
    category: "STRATEGY" as Category,
    slug: "/services/strategic-planning",
  },
  {
    icon: TrendingUp,
    title: "Growth Strategy",
    body: "Unlock sustainable growth through market analysis and disciplined execution.",
    category: "GROWTH" as Category,
    slug: "/services/growth-strategy",
  },
  {
    icon: Settings,
    title: "Operational Excellence",
    body: "Eliminate inefficiencies and build systems that scale.",
    category: "OPERATIONS" as Category,
    slug: "/services/operational-excellence",
  },
  {
    icon: Users,
    title: "Leadership Advisory",
    body: "Equip leaders with frameworks to navigate complexity and drive alignment.",
    category: "LEADERSHIP" as Category,
    slug: "/services/leadership-advisory",
  },
  {
    icon: RefreshCw,
    title: "Change Management",
    body: "Guide transformation with structured approaches that minimize disruption.",
    category: "CHANGE" as Category,
    slug: "/services/change-management",
  },
  {
    icon: BarChart2,
    title: "Performance & Accountability",
    body: "Build measurement systems that turn strategy into trackable results.",
    category: "ANALYTICS" as Category,
    slug: "/services/performance-accountability",
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

  const handleCardClick = (slug: string) => {
    // Navigate to the service page (placeholder for now)
    window.location.href = slug;
  };

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
              color: "#0a0a0a",
              marginBottom: "1.25rem",
              lineHeight: 1.15,
            }}
          >
            Advisory built{" "}
            <em style={{ fontStyle: "italic", color: "#5c4a2e" }}>for impact</em>
          </h2>
          <p
            style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: "1rem",
              color: "rgba(10,10,10,0.92)",
              lineHeight: 1.75,
            }}
          >
            Tailored advisory services designed to meet organizations where they are—and move them where they need to be.
          </p>
        </div>

        {/* Services Grid — card style matching screenshot */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.25rem",
          }}
          className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            const cat = categoryColors[service.category];
            return (
              <div
                key={service.title}
                ref={(el) => { cardsRef.current[i] = el; }}
                className="reveal"
                onClick={() => handleCardClick(service.slug)}
                style={{
                  backgroundColor: "#faf6ef",
                  borderRadius: "12px",
                  border: "1px solid rgba(201,185,154,0.25)",
                  padding: "0",
                  cursor: "pointer",
                  transition: "box-shadow 0.3s ease, border-color 0.3s ease, transform 0.2s ease",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.boxShadow = "0 8px 32px rgba(0,0,0,0.08)";
                  el.style.borderColor = "rgba(201,185,154,0.5)";
                  el.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.boxShadow = "none";
                  el.style.borderColor = "rgba(201,185,154,0.25)";
                  el.style.transform = "translateY(0)";
                }}
              >
                {/* Top accent bar with category badge */}
                <div
                  style={{
                    height: "48px",
                    background: "linear-gradient(135deg, rgba(232,237,228,0.6), rgba(201,185,154,0.15))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    padding: "0 1rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Nunito Sans', sans-serif",
                      fontSize: "0.6rem",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: cat.text,
                      backgroundColor: cat.bg,
                      padding: "0.2rem 0.6rem",
                      borderRadius: "4px",
                    }}
                  >
                    {service.category}
                  </span>
                </div>

                {/* Card content */}
                <div style={{ padding: "1.5rem 1.5rem 1.75rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
                    <Icon size={16} style={{ color: "#5c4a2e" }} />
                    <h3
                      style={{
                        fontFamily: "'Libre Baskerville', serif",
                        fontSize: "1.05rem",
                        fontWeight: 700,
                        color: "#0a0a0a",
                        lineHeight: 1.3,
                        margin: 0,
                      }}
                    >
                      {service.title}
                    </h3>
                  </div>
                  <p
                    style={{
                      fontFamily: "'Nunito Sans', sans-serif",
                      fontSize: "0.88rem",
                      color: "rgba(10,10,10,0.78)",
                      lineHeight: 1.7,
                      marginBottom: "1.25rem",
                    }}
                  >
                    {service.body}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.35rem",
                      fontFamily: "'Nunito Sans', sans-serif",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#5c4a2e",
                    }}
                  >
                    Learn More <ArrowRight size={13} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
