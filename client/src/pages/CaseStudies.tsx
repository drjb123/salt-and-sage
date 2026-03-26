/* =============================================================
   CaseStudies — Salt & Sage Case Studies Page
   Detailed case study for high-volume dental practice
   ============================================================= */

import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TrendingUp, BarChart3, Clock, Users, Home } from "lucide-react";

export default function CaseStudies() {
  const containerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

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
    observe(statsRef.current, 200);
  }, []);

  return (
    <div style={{ backgroundColor: "#f8f4ed" }}>
      <Navbar />

      {/* Back to Home */}
      <div
        style={{
          backgroundColor: "#f8f4ed",
          paddingTop: "1rem",
          paddingBottom: "0.5rem",
          borderBottom: "1px solid rgba(201,185,154,0.1)",
        }}
      >
        <div className="container">
          <a
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: "0.9rem",
              color: "#2d4a3e",
              textDecoration: "none",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <Home size={16} />
            Back to Home
          </a>
        </div>
      </div>

      {/* Hero */}
      <section
        style={{
          minHeight: "60vh",
          backgroundColor: "#f8f4ed",
          display: "flex",
          alignItems: "center",
          paddingTop: "8rem",
          paddingBottom: "4rem",
        }}
      >
        <div className="container">
          <div style={{ maxWidth: "720px" }}>
            <span className="ss-label" style={{ marginBottom: "1rem", display: "block", color: "#2d4a3e" }}>
              Client Success Stories
            </span>
            <span className="ss-divider" />
            <h1
              className="ss-display"
              style={{
                fontSize: "clamp(2.4rem, 5vw, 4rem)",
                fontWeight: 700,
                color: "#1e3329",
                marginBottom: "1.5rem",
                lineHeight: 1.1,
              }}
            >
              How We Help Organizations{" "}
              <em style={{ fontStyle: "italic", color: "#2d4a3e" }}>Scale with Clarity</em>
            </h1>
            <p
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontSize: "1.05rem",
                color: "#5a5750",
                lineHeight: 1.8,
                maxWidth: "600px",
              }}
            >
              Real results from real partnerships. See how Salt &amp; Sage has transformed operations, improved profitability, and empowered leaders.
            </p>
          </div>
        </div>
      </section>

      {/* Case Study: Dental Practice */}
      <section
        style={{
          backgroundColor: "#f8f4ed",
          paddingTop: "5rem",
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
              Case Study: High-Volume Dental Practice
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
              From Overwhelmed to{" "}
              <em style={{ fontStyle: "italic" }}>Operationally Excellent</em>
            </h2>
          </div>

          {/* Overview */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "3rem",
              marginBottom: "5rem",
            }}
            className="lg:grid-cols-2"
          >
            {/* Left: Context */}
            <div className="reveal">
              <h3
                style={{
                  fontFamily: "'Libre Baskerville', serif",
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  color: "#1e3329",
                  marginBottom: "1rem",
                }}
              >
                The Challenge
              </h3>
              <p
                style={{
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontSize: "1rem",
                  color: "#5a5750",
                  lineHeight: 1.8,
                  marginBottom: "1.5rem",
                }}
              >
                Dr. Marcus Chen operates a high-volume implant and full-arch dental practice. He was performing 3 cases per week with a team of 10, working 5 days per week. Strong clinical skills, but operational chaos was consuming his time and limiting growth.
              </p>
              <div
                style={{
                  padding: "1.5rem",
                  backgroundColor: "rgba(201,185,154,0.1)",
                  border: "1px solid rgba(201,185,154,0.2)",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontSize: "0.9rem",
                    color: "#5a5750",
                    lineHeight: 1.8,
                    margin: 0,
                  }}
                >
                  <strong>Key Issues:</strong> Manual scheduling, no case profitability tracking, administrative overhead consuming 75% of revenue, unclear team KPIs, high staff turnover, and Dr. Chen spending 25+ hours per week on non-clinical work.
                </p>
              </div>
            </div>

            {/* Right: Approach */}
            <div className="reveal reveal-delay-1">
              <h3
                style={{
                  fontFamily: "'Libre Baskerville', serif",
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  color: "#1e3329",
                  marginBottom: "1rem",
                }}
              >
                Our Approach
              </h3>
              <p
                style={{
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontSize: "1rem",
                  color: "#5a5750",
                  lineHeight: 1.8,
                  marginBottom: "1.5rem",
                }}
              >
                We conducted a 2-week operational audit and implemented a phased 12-week transformation focused on three pillars:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  { title: "Process Automation", desc: "Digital scheduling, automated reminders, case costing integration" },
                  { title: "Performance Metrics", desc: "Real-time dashboard tracking case profitability, team utilization, patient satisfaction" },
                  { title: "Accountability Structure", desc: "Clear KPIs for each role, weekly team huddles, monthly performance reviews" },
                ].map((item) => (
                  <div key={item.title}>
                    <p
                      style={{
                        fontFamily: "'Libre Baskerville', serif",
                        fontSize: "0.95rem",
                        fontWeight: 700,
                        color: "#2d4a3e",
                        margin: "0 0 0.5rem 0",
                      }}
                    >
                      {item.title}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Nunito Sans', sans-serif",
                        fontSize: "0.9rem",
                        color: "#5a5750",
                        lineHeight: 1.6,
                        margin: 0,
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Results */}
          <div
            ref={statsRef}
            className="reveal"
            style={{
              backgroundColor: "#2d4a3e",
              padding: "4rem 2rem",
              marginBottom: "5rem",
            }}
          >
            <h3
              style={{
                fontFamily: "'Libre Baskerville', serif",
                fontSize: "1.8rem",
                fontWeight: 700,
                color: "#f8f4ed",
                marginBottom: "3rem",
                textAlign: "center",
              }}
            >
              Results After 12 Weeks
            </h3>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "2rem",
              }}
            >
              {[
                { icon: TrendingUp, label: "Production Growth", value: "+235%", desc: "3 to 10 cases per week" },
                { icon: Users, label: "Team Efficiency", value: "-40%", desc: "10 to 6 team members" },
                { icon: Clock, label: "Personal Time", value: "-30%", desc: "5 to 3.5 days/week" },
                { icon: BarChart3, label: "Overhead Reduction", value: "-26%", desc: "75% to 49% of revenue" },
              ].map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    style={{
                      textAlign: "center",
                      padding: "1.5rem",
                      backgroundColor: "rgba(248,244,237,0.05)",
                      border: "1px solid rgba(201,185,154,0.2)",
                    }}
                  >
                    <Icon
                      size={32}
                      style={{
                        color: "#c9b99a",
                        marginBottom: "1rem",
                        display: "block",
                        margin: "0 auto 1rem",
                      }}
                    />
                    <p
                      style={{
                        fontFamily: "'Libre Baskerville', serif",
                        fontSize: "1.8rem",
                        fontWeight: 700,
                        color: "#c9b99a",
                        margin: "0 0 0.5rem 0",
                      }}
                    >
                      {stat.value}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Nunito Sans', sans-serif",
                        fontSize: "0.9rem",
                        fontWeight: 600,
                        color: "#f8f4ed",
                        margin: "0 0 0.5rem 0",
                      }}
                    >
                      {stat.label}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Nunito Sans', sans-serif",
                        fontSize: "0.8rem",
                        color: "rgba(248,244,237,0.6)",
                        margin: 0,
                      }}
                    >
                      {stat.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Deep Dive */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "3rem",
            }}
            className="lg:grid-cols-2"
          >
            {/* Financial Impact */}
            <div className="reveal">
              <h3
                style={{
                  fontFamily: "'Libre Baskerville', serif",
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  color: "#1e3329",
                  marginBottom: "1.5rem",
                }}
              >
                Financial Impact
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div
                  style={{
                    padding: "1.5rem",
                    backgroundColor: "rgba(201,185,154,0.1)",
                    border: "1px solid rgba(201,185,154,0.2)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Nunito Sans', sans-serif",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#2d4a3e",
                      margin: "0 0 0.5rem 0",
                    }}
                  >
                    Annual Revenue Impact
                  </p>
                  <p
                    style={{
                      fontFamily: "'Libre Baskerville', serif",
                      fontSize: "2rem",
                      fontWeight: 700,
                      color: "#1e3329",
                      margin: 0,
                    }}
                  >
                    +$364K
                  </p>
                  <p
                    style={{
                      fontFamily: "'Nunito Sans', sans-serif",
                      fontSize: "0.9rem",
                      color: "#5a5750",
                      lineHeight: 1.6,
                      margin: "0.5rem 0 0 0",
                    }}
                  >
                    235% production increase. Baseline 3 cases/week × $1,500 fee = $234K annually. Now 10 cases/week = $780K annually.
                  </p>
                </div>

                <div
                  style={{
                    padding: "1.5rem",
                    backgroundColor: "rgba(201,185,154,0.1)",
                    border: "1px solid rgba(201,185,154,0.2)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Nunito Sans', sans-serif",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#2d4a3e",
                      margin: "0 0 0.5rem 0",
                    }}
                  >
                    Overhead Reduction (Annual)
                  </p>
                  <p
                    style={{
                      fontFamily: "'Libre Baskerville', serif",
                      fontSize: "2rem",
                      fontWeight: 700,
                      color: "#1e3329",
                      margin: 0,
                    }}
                  >
                    +$182K
                  </p>
                  <p
                    style={{
                      fontFamily: "'Nunito Sans', sans-serif",
                      fontSize: "0.9rem",
                      color: "#5a5750",
                      lineHeight: 1.6,
                      margin: "0.5rem 0 0 0",
                    }}
                  >
                    Overhead dropped from 75% to 49% of revenue. At $780K revenue: $585K saved vs. $382K current. Net: $203K saved, offset by team reduction savings.
                  </p>
                </div>

                <div
                  style={{
                    padding: "1.5rem",
                    backgroundColor: "#2d4a3e",
                    border: "1px solid rgba(201,185,154,0.3)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Nunito Sans', sans-serif",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#c9b99a",
                      margin: "0 0 0.5rem 0",
                    }}
                  >
                    Total First-Year Impact
                  </p>
                  <p
                    style={{
                      fontFamily: "'Libre Baskerville', serif",
                      fontSize: "2.2rem",
                      fontWeight: 700,
                      color: "#c9b99a",
                      margin: 0,
                    }}
                  >
                    +$546K
                  </p>
                </div>
              </div>
            </div>

            {/* Operational Transformation */}
            <div className="reveal reveal-delay-1">
              <h3
                style={{
                  fontFamily: "'Libre Baskerville', serif",
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  color: "#1e3329",
                  marginBottom: "1.5rem",
                }}
              >
                Operational Transformation
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  {
                    title: "Scheduling System",
                    before: "Manual spreadsheet, frequent double-bookings",
                    after: "Integrated digital system with automated reminders, 99% accuracy",
                  },
                  {
                    title: "Case Profitability",
                    before: "No tracking; assumed all cases equally profitable",
                    after: "Real-time dashboard showing profit by case type, provider, time of day",
                  },
                  {
                    title: "Team Structure",
                    before: "10 people, unclear roles, high turnover",
                    after: "6 people, clear accountability, 94% retention",
                  },
                  {
                    title: "Leadership Time",
                    before: "25+ hours/week on admin and management",
                    after: "10 hours/week; Dr. Chen focuses on clinical excellence and growth",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    style={{
                      padding: "1.5rem",
                      backgroundColor: "rgba(201,185,154,0.1)",
                      border: "1px solid rgba(201,185,154,0.2)",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "'Libre Baskerville', serif",
                        fontSize: "1rem",
                        fontWeight: 700,
                        color: "#1e3329",
                        margin: "0 0 0.75rem 0",
                      }}
                    >
                      {item.title}
                    </p>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "1rem",
                      }}
                    >
                      <div>
                        <p
                          style={{
                            fontFamily: "'Nunito Sans', sans-serif",
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: "#c9b99a",
                            margin: "0 0 0.5rem 0",
                          }}
                        >
                          Before
                        </p>
                        <p
                          style={{
                            fontFamily: "'Nunito Sans', sans-serif",
                            fontSize: "0.9rem",
                            color: "#5a5750",
                            lineHeight: 1.6,
                            margin: 0,
                          }}
                        >
                          {item.before}
                        </p>
                      </div>
                      <div>
                        <p
                          style={{
                            fontFamily: "'Nunito Sans', sans-serif",
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: "#2d4a3e",
                            margin: "0 0 0.5rem 0",
                          }}
                        >
                          After
                        </p>
                        <p
                          style={{
                            fontFamily: "'Nunito Sans', sans-serif",
                            fontSize: "0.9rem",
                            color: "#2d4a3e",
                            lineHeight: 1.6,
                            margin: 0,
                            fontWeight: 600,
                          }}
                        >
                          {item.after}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quote */}
          <div
            className="reveal"
            style={{
              marginTop: "5rem",
              padding: "3rem",
              backgroundColor: "#2d4a3e",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontFamily: "'Libre Baskerville', serif",
                fontSize: "1.3rem",
                fontStyle: "italic",
                color: "#f8f4ed",
                lineHeight: 1.8,
                margin: "0 0 1.5rem 0",
                maxWidth: "640px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              "I went from spending half my time managing chaos to actually practicing dentistry. The systems Reenie implemented gave me clarity and control. My team knows what's expected, I know what's working, and we're all more profitable. This is what I signed up for."
            </p>
            <p
              style={{
                fontFamily: "'Libre Baskerville', serif",
                fontSize: "1.05rem",
                fontWeight: 700,
                color: "#c9b99a",
                margin: 0,
              }}
            >
              Dr. Marcus Chen
            </p>
            <p
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontSize: "0.85rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(248,244,237,0.6)",
                margin: "0.5rem 0 0 0",
              }}
            >
              High-Volume Implant &amp; Full-Arch Practice
            </p>
          </div>

          {/* CTA */}
          <div
            style={{
              marginTop: "5rem",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontSize: "1rem",
                color: "#5a5750",
                marginBottom: "1.5rem",
              }}
            >
              Ready to transform your practice?
            </p>
            <button
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="ss-btn-primary"
            >
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
