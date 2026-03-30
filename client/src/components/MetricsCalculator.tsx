/* =============================================================
   MetricsCalculator — Salt & Sage Success Metrics Calculator
   Interactive calculator showing ROI impact for dental practices
   ============================================================= */

import { useEffect, useRef, useState } from "react";
import { TrendingUp, Users, Clock, DollarSign } from "lucide-react";

export default function MetricsCalculator() {
  const [casesPerWeek, setCasesPerWeek] = useState(5);
  const [teamSize, setTeamSize] = useState(10);
  const [workDaysPerWeek, setWorkDaysPerWeek] = useState(5);
  const [overheadPercent, setOverheadPercent] = useState(70);
  const containerRef = useRef<HTMLDivElement>(null);

  // Projections based on Dr. Chen's transformation
  const projectedCasesPerWeek = Math.round(casesPerWeek * 3.3); // 235% increase
  const projectedTeamSize = Math.round(teamSize * 0.6); // 40% reduction
  const projectedWorkDays = (workDaysPerWeek * 0.7).toFixed(1); // 30% reduction
  const projectedOverhead = 49; // Fixed at 49%

  const caseGrowth = ((projectedCasesPerWeek - casesPerWeek) / casesPerWeek * 100).toFixed(0);
  const teamReduction = ((teamSize - projectedTeamSize) / teamSize * 100).toFixed(0);
  const timeRecovery = (workDaysPerWeek - parseFloat(projectedWorkDays)).toFixed(1);
  const overheadSavings = (overheadPercent - projectedOverhead).toFixed(0);

  // Financial impact (assuming $1,500 avg case fee)
  const avgCaseFee = 1500;
  const currentAnnualRevenue = casesPerWeek * 52 * avgCaseFee;
  const projectedAnnualRevenue = projectedCasesPerWeek * 52 * avgCaseFee;
  const revenueIncrease = projectedAnnualRevenue - currentAnnualRevenue;

  const currentOverheadCost = currentAnnualRevenue * (overheadPercent / 100);
  const projectedOverheadCost = projectedAnnualRevenue * (projectedOverhead / 100);
  const overheadSavingsDollars = currentOverheadCost - projectedOverheadCost;

  const totalImpact = revenueIncrease + overheadSavingsDollars;

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
          style={{ marginBottom: "4rem", maxWidth: "720px" }}
        >
          <span className="ss-label" style={{ marginBottom: "1rem", display: "block", color: "#1a1a1a" }}>
            Your Potential
          </span>
          <span className="ss-divider" />
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
            Calculate Your{" "}
            <em style={{ fontStyle: "italic" }}>Success Metrics</em>
          </h2>
          <p
            style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: "1rem",
              color: "#1a1a1a",
              lineHeight: 1.8,
            }}
          >
            See how Salt & Sage's operational framework could transform your practice. Adjust your current metrics below.
          </p>
        </div>

        {/* Calculator Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2rem",
            marginBottom: "4rem",
          }}
          className="lg:grid-cols-2"
        >
          {/* Input Section */}
          <div
            style={{
              padding: "2rem",
              backgroundColor: "#f8f4ed",
              border: "1px solid rgba(107,83,68,0.3)",
            }}
          >
            <h3
              style={{
                fontFamily: "'Libre Baskerville', serif",
                fontSize: "1.2rem",
                fontWeight: 700,
                color: "#1a1a1a",
                marginBottom: "2rem",
              }}
            >
              Your Current Practice
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {/* Cases Per Week */}
              <div>
                <label
                  style={{
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    color: "#1a1a1a",
                    display: "block",
                    marginBottom: "0.75rem",
                  }}
                >
                  Cases per week: <strong>{casesPerWeek}</strong>
                </label>
                <input
                  type="range"
                  min="1"
                  max="15"
                  value={casesPerWeek}
                  onChange={(e) => setCasesPerWeek(parseInt(e.target.value))}
                  style={{
                    width: "100%",
                    height: "6px",
                    borderRadius: "3px",
                    backgroundColor: "rgba(107,83,68,0.2)",
                    outline: "none",
                    WebkitAppearance: "none",
                  }}
                />
              </div>

              {/* Team Size */}
              <div>
                <label
                  style={{
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    color: "#1a1a1a",
                    display: "block",
                    marginBottom: "0.75rem",
                  }}
                >
                  Team size: <strong>{teamSize}</strong>
                </label>
                <input
                  type="range"
                  min="5"
                  max="20"
                  value={teamSize}
                  onChange={(e) => setTeamSize(parseInt(e.target.value))}
                  style={{
                    width: "100%",
                    height: "6px",
                    borderRadius: "3px",
                    backgroundColor: "rgba(107,83,68,0.2)",
                    outline: "none",
                    WebkitAppearance: "none",
                  }}
                />
              </div>

              {/* Work Days Per Week */}
              <div>
                <label
                  style={{
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    color: "#1a1a1a",
                    display: "block",
                    marginBottom: "0.75rem",
                  }}
                >
                  Your work days/week: <strong>{workDaysPerWeek}</strong>
                </label>
                <input
                  type="range"
                  min="2"
                  max="5"
                  step="0.5"
                  value={workDaysPerWeek}
                  onChange={(e) => setWorkDaysPerWeek(parseFloat(e.target.value))}
                  style={{
                    width: "100%",
                    height: "6px",
                    borderRadius: "3px",
                    backgroundColor: "rgba(107,83,68,0.2)",
                    outline: "none",
                    WebkitAppearance: "none",
                  }}
                />
              </div>

              {/* Overhead Percent */}
              <div>
                <label
                  style={{
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    color: "#1a1a1a",
                    display: "block",
                    marginBottom: "0.75rem",
                  }}
                >
                  Overhead %: <strong>{overheadPercent}%</strong>
                </label>
                <input
                  type="range"
                  min="40"
                  max="85"
                  value={overheadPercent}
                  onChange={(e) => setOverheadPercent(parseInt(e.target.value))}
                  style={{
                    width: "100%",
                    height: "6px",
                    borderRadius: "3px",
                    backgroundColor: "rgba(107,83,68,0.2)",
                    outline: "none",
                    WebkitAppearance: "none",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div
            style={{
              padding: "2rem",
              backgroundColor: "#c0d4cd",
              border: "1px solid rgba(107,83,68,0.3)",
            }}
          >
            <h3
              style={{
                fontFamily: "'Libre Baskerville', serif",
                fontSize: "1.2rem",
                fontWeight: 700,
                color: "#1a1a1a",
                marginBottom: "2rem",
              }}
            >
              Your Projected Results
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                {
                  icon: TrendingUp,
                  label: "Case Growth",
                  current: casesPerWeek,
                  projected: projectedCasesPerWeek,
                  unit: "cases/week",
                  change: caseGrowth,
                },
                {
                  icon: Users,
                  label: "Team Size",
                  current: teamSize,
                  projected: projectedTeamSize,
                  unit: "people",
                  change: `-${teamReduction}%`,
                },
                {
                  icon: Clock,
                  label: "Your Time",
                  current: workDaysPerWeek,
                  projected: parseFloat(projectedWorkDays),
                  unit: "days/week",
                  change: `-${timeRecovery} days`,
                },
                {
                  icon: DollarSign,
                  label: "Overhead",
                  current: overheadPercent,
                  projected: projectedOverhead,
                  unit: "%",
                  change: `-${overheadSavings}%`,
                },
              ].map((metric) => {
                const Icon = metric.icon;
                return (
                  <div key={metric.label}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        marginBottom: "0.75rem",
                      }}
                    >
                      <Icon size={18} style={{ color: "#6b5344" }} />
                      <p
                        style={{
                          fontFamily: "'Nunito Sans', sans-serif",
                          fontSize: "0.9rem",
                          fontWeight: 600,
                          color: "#1a1a1a",
                          margin: 0,
                        }}
                      >
                        {metric.label}
                      </p>
                    </div>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr",
                        gap: "1rem",
                        paddingLeft: "2rem",
                      }}
                    >
                      <div>
                        <p
                          style={{
                            fontFamily: "'Nunito Sans', sans-serif",
                            fontSize: "0.75rem",
                            color: "rgba(26,26,26,0.6)",
                            margin: "0 0 0.25rem 0",
                          }}
                        >
                          Current
                        </p>
                        <p
                          style={{
                            fontFamily: "'Libre Baskerville', serif",
                            fontSize: "1.1rem",
                            fontWeight: 700,
                            color: "#1a1a1a",
                            margin: 0,
                          }}
                        >
                          {metric.current} {metric.unit}
                        </p>
                      </div>
                      <div>
                        <p
                          style={{
                            fontFamily: "'Nunito Sans', sans-serif",
                            fontSize: "0.75rem",
                            color: "rgba(26,26,26,0.6)",
                            margin: "0 0 0.25rem 0",
                          }}
                        >
                          Projected
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
                          {metric.projected} {metric.unit}
                        </p>
                      </div>
                      <div>
                        <p
                          style={{
                            fontFamily: "'Nunito Sans', sans-serif",
                            fontSize: "0.75rem",
                            color: "rgba(26,26,26,0.6)",
                            margin: "0 0 0.25rem 0",
                          }}
                        >
                          Change
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
                          +{metric.change}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Financial Impact */}
        <div
          style={{
            padding: "3rem",
            backgroundColor: "#c0d4cd",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: "0.9rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(26,26,26,0.6)",
              margin: "0 0 1rem 0",
            }}
          >
            Annual Financial Impact
          </p>
          <p
            style={{
              fontFamily: "'Libre Baskerville', serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 700,
              color: "#6b5344",
              margin: "0 0 1.5rem 0",
            }}
          >
            +${(totalImpact / 1000).toFixed(0)}K
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "2rem",
              maxWidth: "600px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            className="lg:grid-cols-2"
          >
            <div>
              <p
                style={{
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontSize: "0.8rem",
                  color: "rgba(26,26,26,0.6)",
                  margin: "0 0 0.5rem 0",
                }}
              >
                Revenue Increase
              </p>
              <p
                style={{
                  fontFamily: "'Libre Baskerville', serif",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "#1a1a1a",
                  margin: 0,
                }}
              >
                +${(revenueIncrease / 1000).toFixed(0)}K
              </p>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontSize: "0.8rem",
                  color: "rgba(26,26,26,0.6)",
                  margin: "0 0 0.5rem 0",
                }}
              >
                Overhead Savings
              </p>
              <p
                style={{
                  fontFamily: "'Libre Baskerville', serif",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "#1a1a1a",
                  margin: 0,
                }}
              >
                +${(overheadSavingsDollars / 1000).toFixed(0)}K
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          style={{
            marginTop: "4rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: "1rem",
              color: "#1a1a1a",
              marginBottom: "1.5rem",
            }}
          >
            Ready to explore your transformation?
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
  );
}
