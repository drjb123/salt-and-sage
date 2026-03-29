/* =============================================================
   TeamTrainingSection — Salt & Sage Team Training
   Showcase team training programs and development framework
   ============================================================= */

import { useEffect, useRef } from "react";
import { BookOpen, Users, TrendingUp, Award } from "lucide-react";

const trainingPrograms = [
  {
    icon: BookOpen,
    title: "Operational Excellence",
    description: "Train your team on systems, processes, and best practices that drive efficiency and consistency.",
    topics: ["Process Documentation", "Quality Standards", "Efficiency Metrics", "Best Practices"],
  },
  {
    icon: Users,
    title: "Leadership Development",
    description: "Equip managers and leaders with frameworks to guide teams, make decisions, and drive accountability.",
    topics: ["Team Management", "Decision-Making", "Accountability", "Coaching Skills"],
  },
  {
    icon: TrendingUp,
    title: "Performance Management",
    description: "Build skills in setting goals, measuring progress, and providing feedback that drives improvement.",
    topics: ["Goal Setting", "Performance Tracking", "Feedback Delivery", "Continuous Improvement"],
  },
  {
    icon: Award,
    title: "Skill Development",
    description: "Targeted training for clinical and operational roles to enhance competency and confidence.",
    topics: ["Clinical Skills", "Patient Communication", "Technical Skills", "Industry Updates"],
  },
];

export default function TeamTrainingSection() {
  const containerRef = useRef<HTMLDivElement>(null);
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

    observe(containerRef.current);
    cardsRef.current.forEach((el, i) => observe(el, i * 100));
  }, []);

  return (
    <section
      style={{
        backgroundColor: "#d0ddd8",
        paddingTop: "7rem",
        paddingBottom: "7rem",
      }}
    >
      <div className="container">
        {/* Header */}
        <div
          ref={containerRef}
          className="reveal"
          style={{ marginBottom: "4rem", maxWidth: "720px" }}
        >
          <span className="ss-label" style={{ marginBottom: "1rem", display: "block", color: "#f8f4ed" }}>
            Team Development
          </span>
          <span className="ss-divider" />
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
            Invest in Your Team's <em style={{ fontStyle: "italic" }}>Growth</em>
          </h2>
          <p
            style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: "1rem",
              color: "#5a5750",
              lineHeight: 1.8,
            }}
          >
            Strong systems require strong people. We provide structured training programs that build capability, confidence, and alignment across your team.
          </p>
        </div>

        {/* Training Programs Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2rem",
            marginBottom: "5rem",
          }}
          className="lg:grid-cols-2"
        >
          {trainingPrograms.map((program, i) => {
            const Icon = program.icon;
            return (
              <div
                key={program.title}
                ref={(el) => { if (el) cardsRef.current[i] = el; }}
                className="reveal"
                style={{
                  padding: "2rem",
                  backgroundColor: "#fff",
                  border: "1px solid rgba(201,185,154,0.2)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = "rgba(201,185,154,0.4)";
                  el.style.boxShadow = "0 8px 24px rgba(0,0,0,0.08)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = "rgba(201,185,154,0.2)";
                  el.style.boxShadow = "none";
                }}
              >
                <Icon
                  size={32}
                  style={{
                    color: "#f8f4ed",
                    marginBottom: "1rem",
                  }}
                />
                <h3
                  style={{
                    fontFamily: "'Libre Baskerville', serif",
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "#d0ddd8",
                    marginBottom: "0.75rem",
                  }}
                >
                  {program.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontSize: "0.95rem",
                    color: "#5a5750",
                    lineHeight: 1.6,
                    marginBottom: "1.5rem",
                  }}
                >
                  {program.description}
                </p>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.75rem",
                  }}
                >
                  {program.topics.map((topic) => (
                    <span
                      key={topic}
                      style={{
                        fontFamily: "'Nunito Sans', sans-serif",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        color: "#f8f4ed",
                        backgroundColor: "rgba(201,185,154,0.1)",
                        padding: "0.5rem 0.75rem",
                        borderRadius: "4px",
                      }}
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Training Approach */}
        <div
          style={{
            backgroundColor: "#f8f4ed",
            padding: "3rem 2rem",
            marginBottom: "4rem",
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
            Our Training Approach
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "2rem",
            }}
            className="lg:grid-cols-4"
          >
            {[
              {
                step: "01",
                title: "Assessment",
                description: "Identify current skill levels and development gaps across your team.",
              },
              {
                step: "02",
                title: "Design",
                description: "Create customized training programs aligned to your practice needs.",
              },
              {
                step: "03",
                title: "Delivery",
                description: "Conduct interactive training sessions with hands-on practice and feedback.",
              },
              {
                step: "04",
                title: "Reinforcement",
                description: "Ongoing coaching and support to ensure skills transfer to daily work.",
              },
            ].map((item) => (
              <div key={item.step} style={{ textAlign: "center" }}>
                <p
                  style={{
                    fontFamily: "'Libre Baskerville', serif",
                    fontSize: "2rem",
                    fontWeight: 700,
                    color: "#c9b99a",
                    margin: "0 0 1rem 0",
                  }}
                >
                  {item.step}
                </p>
                <p
                  style={{
                    fontFamily: "'Libre Baskerville', serif",
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: "#d0ddd8",
                    margin: "0 0 0.75rem 0",
                  }}
                >
                  {item.title}
                </p>
                <p
                  style={{
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontSize: "0.9rem",
                    color: "rgba(40,40,40,0.7)",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          style={{
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
            Ready to build a stronger, more capable team?
          </p>
          <button
            onClick={() => {
              const el = document.querySelector("#contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="ss-btn-primary"
          >
            Discuss Training Options
          </button>
        </div>
      </div>
    </section>
  );
}
