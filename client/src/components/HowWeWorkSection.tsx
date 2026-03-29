/* =============================================================
   HowWeWorkSection — Salt & Sage How We Work Process
   Showcase the engagement process and timeline
   ============================================================= */

import { useEffect, useRef } from "react";
import { CheckCircle2 } from "lucide-react";

const processSteps = [
  {
    phase: "Discovery",
    duration: "Week 1-2",
    description: "We conduct a comprehensive audit of your operations, team structure, financials, and strategic goals.",
    activities: ["Initial consultation", "Process mapping", "Data collection", "Stakeholder interviews"],
  },
  {
    phase: "Assessment",
    duration: "Week 3",
    description: "Analyze findings to identify inefficiencies, opportunities, and the specific levers that will drive impact.",
    activities: ["Gap analysis", "Opportunity prioritization", "ROI modeling", "Recommendation report"],
  },
  {
    phase: "Planning",
    duration: "Week 4",
    description: "Develop a detailed implementation roadmap with clear milestones, responsibilities, and success metrics.",
    activities: ["Strategy session", "Timeline development", "Resource allocation", "Team alignment"],
  },
  {
    phase: "Implementation",
    duration: "Week 5-12",
    description: "Execute the transformation plan with hands-on support, training, and course correction as needed.",
    activities: ["System setup", "Process implementation", "Team training", "Weekly check-ins"],
  },
  {
    phase: "Optimization",
    duration: "Week 13+",
    description: "Monitor performance, refine systems, and provide ongoing coaching to sustain and build on results.",
    activities: ["Performance tracking", "Continuous improvement", "Advanced training", "Strategic guidance"],
  },
];

export default function HowWeWorkSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

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
    stepsRef.current.forEach((el, i) => observe(el, i * 150));
  }, []);

  return (
    <section
      style={{
        backgroundColor: "#f8f4ed",
        paddingTop: "7rem",
        paddingBottom: "7rem",
      }}
    >
      <div className="container">
        {/* Header */}
        <div
          ref={containerRef}
          className="reveal"
          style={{ marginBottom: "5rem", maxWidth: "720px" }}
        >
          <span className="ss-label" style={{ marginBottom: "1rem", display: "block", color: "#c9b99a" }}>
            Our Process
          </span>
          <span
            className="ss-divider"
            style={{
              backgroundColor: "#c9b99a",
            }}
          />
          <h2
            className="ss-display"
            style={{
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 700,
              color: "#d0ddd8",
              marginBottom: "1.25rem",
              lineHeight: 1.15,
            }}
          >
            How We <em style={{ fontStyle: "italic", color: "#c9b99a" }}>Work</em>
          </h2>
          <p
            style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: "1rem",
              color: "rgba(40,40,40,0.7)",
              lineHeight: 1.8,
            }}
          >
            Our engagement model is structured, transparent, and results-driven. Here's how we guide organizations from vision to operational excellence.
          </p>
        </div>

        {/* Process Timeline */}
        <div
          style={{
            position: "relative",
            paddingBottom: "2rem",
          }}
        >
          {/* Vertical Line */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "0",
              bottom: "0",
              width: "2px",
              backgroundColor: "rgba(201,185,154,0.2)",
              transform: "translateX(-50%)",
              display: "none",
            }}
            className="lg:block"
          />

          {/* Steps */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "3rem",
            }}
          >
            {processSteps.map((step, i) => (
              <div
                key={step.phase}
                ref={(el) => { if (el) stepsRef.current[i] = el; }}
                className="reveal lg:grid-cols-2"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "2rem",
                  alignItems: "start",
                }}
              >
                {/* Left side (alternates) */}
                <div
                  style={{
                    order: i % 2 === 0 ? 1 : 2,
                    padding: "2rem",
                    backgroundColor: "rgba(40,40,40,0.05)",
                    border: "1px solid rgba(201,185,154,0.2)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      marginBottom: "1rem",
                    }}
                  >
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "50%",
                        backgroundColor: "#c9b99a",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'Libre Baskerville', serif",
                          fontSize: "1.5rem",
                          fontWeight: 700,
                          color: "#f8f4ed",
                        }}
                      >
                        {i + 1}
                      </span>
                    </div>
                    <div>
                      <h3
                        style={{
                          fontFamily: "'Libre Baskerville', serif",
                          fontSize: "1.3rem",
                          fontWeight: 700,
                          color: "#d0ddd8",
                          margin: 0,
                        }}
                      >
                        {step.phase}
                      </h3>
                      <p
                        style={{
                          fontFamily: "'Nunito Sans', sans-serif",
                          fontSize: "0.85rem",
                          color: "#c9b99a",
                          margin: "0.25rem 0 0 0",
                        }}
                      >
                        {step.duration}
                      </p>
                    </div>
                  </div>

                  <p
                    style={{
                      fontFamily: "'Nunito Sans', sans-serif",
                      fontSize: "0.95rem",
                      color: "rgba(40,40,40,0.7)",
                      lineHeight: 1.6,
                      marginBottom: "1.5rem",
                    }}
                  >
                    {step.description}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.75rem",
                    }}
                  >
                    {step.activities.map((activity) => (
                      <div
                        key={activity}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "0.75rem",
                        }}
                      >
                        <CheckCircle2
                          size={18}
                          style={{
                            color: "#c9b99a",
                            flexShrink: 0,
                            marginTop: "2px",
                          }}
                        />
                        <span
                          style={{
                            fontFamily: "'Nunito Sans', sans-serif",
                            fontSize: "0.9rem",
                            color: "rgba(40,40,40,0.6)",
                          }}
                        >
                          {activity}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right side (empty for spacing on desktop) */}
                <div style={{ order: i % 2 === 0 ? 2 : 1 }} />
              </div>
            ))}
          </div>
        </div>

        {/* Key Principles */}
        <div
          style={{
            marginTop: "6rem",
            padding: "3rem 2rem",
            backgroundColor: "rgba(40,40,40,0.05)",
            border: "1px solid rgba(201,185,154,0.2)",
          }}
        >
          <h3
            style={{
              fontFamily: "'Libre Baskerville', serif",
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "#d0ddd8",
              marginBottom: "2rem",
              textAlign: "center",
            }}
          >
            What Sets Us Apart
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "2rem",
            }}
            className="lg:grid-cols-3"
          >
            {[
              {
                title: "Hands-On Partnership",
                description: "We don't just advise—we implement alongside your team, ensuring accountability and results.",
              },
              {
                title: "Data-Driven Decisions",
                description: "Every recommendation is grounded in analysis, metrics, and your specific operational context.",
              },
              {
                title: "Sustainable Change",
                description: "We build systems and capabilities that persist, not temporary fixes that fade when we leave.",
              },
            ].map((principle) => (
              <div key={principle.title} style={{ textAlign: "center" }}>
                <p
                  style={{
                    fontFamily: "'Libre Baskerville', serif",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "#c9b99a",
                    marginBottom: "0.75rem",
                  }}
                >
                  {principle.title}
                </p>
                <p
                  style={{
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontSize: "0.9rem",
                    color: "rgba(40,40,40,0.6)",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
