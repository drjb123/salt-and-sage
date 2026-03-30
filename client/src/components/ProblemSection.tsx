/* =============================================================
   ProblemSection — Salt & Sage Problem Statement
   Articulate the pain points and challenges dentists face
   ============================================================= */

import { useEffect, useRef } from "react";
import { AlertCircle, TrendingDown, Clock, Users } from "lucide-react";

const problems = [
  {
    icon: TrendingDown,
    title: "You're Working Harder, Not Smarter",
    description: "Each year you add more cases, but your overhead keeps climbing. You're stuck on a treadmill where growth doesn't translate to freedom.",
  },
  {
    icon: Clock,
    title: "Your Time Isn't Your Own",
    description: "You're working 5+ days a week managing operations, team dynamics, and admin work. The clinical work you love gets squeezed into the margins.",
  },
  {
    icon: Users,
    title: "Your Team Isn't Operating at Full Capacity",
    description: "You have more people than you need, but they're not aligned on priorities. Accountability is unclear, and efficiency is left to chance.",
  },
  {
    icon: AlertCircle,
    title: "You Don't Have Visibility Into What's Actually Working",
    description: "You're making decisions based on intuition, not data. You don't know which levers actually drive profit, and you can't measure progress.",
  },
];

export default function ProblemSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const problemsRef = useRef<(HTMLDivElement | null)[]>([]);

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
    problemsRef.current.forEach((el, i) => observe(el, i * 100));
  }, []);

  return (
    <section
      style={{
        backgroundColor: "#c0d4cd",
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
          <span className="ss-label" style={{ marginBottom: "1rem", display: "block", color: "#6b5344" }}>
            The Challenge
          </span>
          <span
            className="ss-divider"
            style={{
              backgroundColor: "#6b5344",
            }}
          />
          <h2
            className="ss-display"
            style={{
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 700,
              color: "#1a1a1a",
              marginBottom: "1.25rem",
              lineHeight: 1.15,
            }}
          >
            The <em style={{ fontStyle: "italic", color: "#6b5344" }}>Real Cost</em> of Staying the Same
          </h2>
          <p
            style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: "1rem",
              color: "rgba(26,26,26,0.7)",
              lineHeight: 1.8,
            }}
          >
            Most dental practice owners face the same invisible challenges. You're not alone—and the good news is, these problems are solvable.
          </p>
        </div>

        {/* Problems Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2rem",
          }}
          className="lg:grid-cols-2"
        >
          {problems.map((problem, i) => {
            const Icon = problem.icon;
            return (
              <div
                key={problem.title}
                ref={(el) => { if (el) problemsRef.current[i] = el; }}
                className="reveal"
                style={{
                  padding: "2rem",
                  backgroundColor: "rgba(248,244,237,0.05)",
                  border: "1px solid rgba(107,83,68,0.2)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.backgroundColor = "rgba(248,244,237,0.08)";
                  el.style.borderColor = "rgba(107,83,68,0.4)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.backgroundColor = "rgba(248,244,237,0.05)";
                  el.style.borderColor = "rgba(107,83,68,0.2)";
                }}
              >
                <Icon
                  size={32}
                  style={{
                    color: "#6b5344",
                    marginBottom: "1rem",
                  }}
                />
                <h3
                  style={{
                    fontFamily: "'Libre Baskerville', serif",
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: "#1a1a1a",
                    marginBottom: "0.75rem",
                  }}
                >
                  {problem.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontSize: "0.95rem",
                    color: "rgba(26,26,26,0.6)",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Impact Statement */}
        <div
          style={{
            marginTop: "5rem",
            padding: "2.5rem",
            backgroundColor: "rgba(107,83,68,0.1)",
            border: "1px solid rgba(107,83,68,0.3)",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: "1rem",
              color: "rgba(26,26,26,0.8)",
              lineHeight: 1.8,
              margin: 0,
              marginBottom: "1.5rem",
            }}
          >
            The cost of inaction is real. Dentists staying on the current path are leaving{" "}
            <strong style={{ color: "#6b5344" }}>$300K-$500K on the table annually</strong> in lost
            efficiency, unnecessary overhead, and unrealized production potential.
          </p>
          <p
            style={{
              fontFamily: "'Libre Baskerville', serif",
              fontSize: "1.1rem",
              fontWeight: 700,
              color: "#6b5344",
              margin: 0,
            }}
          >
            The question isn't whether you can afford to change. It's whether you can afford not to.
          </p>
        </div>
      </div>
    </section>
  );
}
