/* =============================================================
   PracticeBenchmarkingTool — Salt & Sage Practice Benchmarking
   Interactive tool to compare practice metrics against industry averages
   ============================================================= */

import { useState, useEffect, useRef } from "react";
import { TrendingDown, TrendingUp } from "lucide-react";

const industryBenchmarks = {
  casesPerWeek: { avg: 4.5, range: "3-8" },
  teamSize: { avg: 8, range: "5-12" },
  workDaysPerWeek: { avg: 4.5, range: "4-5" },
  overheadPercent: { avg: 65, range: "55-75" },
};

export default function PracticeBenchmarkingTool() {
  const [metrics, setMetrics] = useState({
    casesPerWeek: 5,
    teamSize: 10,
    workDaysPerWeek: 5,
    overheadPercent: 70,
  });

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observe = (el: Element | null) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add("visible");
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(el);
    };

    observe(containerRef.current);
  }, []);

  const handleChange = (key: keyof typeof metrics, value: number) => {
    setMetrics((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const getComparison = (key: keyof typeof metrics) => {
    const current = metrics[key];
    const benchmark = industryBenchmarks[key as keyof typeof industryBenchmarks];
    const diff = current - benchmark.avg;
    const percent = ((diff / benchmark.avg) * 100).toFixed(0);

    return {
      diff,
      percent,
      isAbove: diff > 0,
      benchmark: benchmark.avg,
    };
  };

  const comparisons = {
    casesPerWeek: getComparison("casesPerWeek"),
    teamSize: getComparison("teamSize"),
    workDaysPerWeek: getComparison("workDaysPerWeek"),
    overheadPercent: getComparison("overheadPercent"),
  };

  // Calculate potential impact
  const productionGap = (10 - metrics.casesPerWeek) * 1500 * 52; // Assuming $1,500 per case
  const teamEfficiency = ((metrics.teamSize - 6) / metrics.teamSize) * 100;
  const overheadSavings = ((metrics.overheadPercent - 49) / 100) * (metrics.casesPerWeek * 1500 * 52);

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
          <span className="ss-label" style={{ marginBottom: "1rem", display: "block", color: "#c0d4cd" }}>
            Benchmarking Tool
          </span>
          <span className="ss-divider" />
          <h2
            className="ss-display"
            style={{
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 700,
              color: "#c0d4cd",
              marginBottom: "1.25rem",
              lineHeight: 1.15,
            }}
          >
            How Does Your Practice <em style={{ fontStyle: "italic" }}>Compare?</em>
          </h2>
          <p
            style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: "1rem",
              color: "#1a1a1a",
              lineHeight: 1.8,
            }}
          >
            Compare your practice metrics against industry benchmarks. Adjust your numbers to see potential impact from operational improvements.
          </p>
        </div>

        {/* Main Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
          }}
          className="lg:grid-cols-2"
        >
          {/* Input Section */}
          <div
            style={{
              padding: "2rem",
              backgroundColor: "#fff",
              border: "1px solid rgba(201,185,154,0.2)",
            }}
          >
            <h3
              style={{
                fontFamily: "'Libre Baskerville', serif",
                fontSize: "1.3rem",
                fontWeight: 700,
                color: "#c0d4cd",
                marginBottom: "2rem",
              }}
            >
              Your Current Metrics
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {/* Cases Per Week */}
              <div>
                <label
                  style={{
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    color: "#c0d4cd",
                    display: "block",
                    marginBottom: "0.75rem",
                  }}
                >
                  Cases per Week: <strong>{metrics.casesPerWeek}</strong>
                </label>
                <input
                  type="range"
                  min="1"
                  max="15"
                  value={metrics.casesPerWeek}
                  onChange={(e) => handleChange("casesPerWeek", parseInt(e.target.value))}
                  style={{
                    width: "100%",
                    height: "6px",
                    borderRadius: "3px",
                    background: "linear-gradient(to right, #6b5344, #c0d4cd)",
                    outline: "none",
                    WebkitAppearance: "none",
                  }}
                />
                <p
                  style={{
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontSize: "0.8rem",
                    color: "#1a1a1a",
                    margin: "0.5rem 0 0 0",
                  }}
                >
                  Industry avg: {industryBenchmarks.casesPerWeek.avg} ({industryBenchmarks.casesPerWeek.range})
                </p>
              </div>

              {/* Team Size */}
              <div>
                <label
                  style={{
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    color: "#c0d4cd",
                    display: "block",
                    marginBottom: "0.75rem",
                  }}
                >
                  Team Size: <strong>{metrics.teamSize}</strong>
                </label>
                <input
                  type="range"
                  min="3"
                  max="20"
                  value={metrics.teamSize}
                  onChange={(e) => handleChange("teamSize", parseInt(e.target.value))}
                  style={{
                    width: "100%",
                    height: "6px",
                    borderRadius: "3px",
                    background: "linear-gradient(to right, #6b5344, #c0d4cd)",
                    outline: "none",
                    WebkitAppearance: "none",
                  }}
                />
                <p
                  style={{
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontSize: "0.8rem",
                    color: "#1a1a1a",
                    margin: "0.5rem 0 0 0",
                  }}
                >
                  Industry avg: {industryBenchmarks.teamSize.avg} ({industryBenchmarks.teamSize.range})
                </p>
              </div>

              {/* Work Days Per Week */}
              <div>
                <label
                  style={{
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    color: "#c0d4cd",
                    display: "block",
                    marginBottom: "0.75rem",
                  }}
                >
                  Your Work Days/Week: <strong>{metrics.workDaysPerWeek}</strong>
                </label>
                <input
                  type="range"
                  min="2"
                  max="5"
                  step="0.5"
                  value={metrics.workDaysPerWeek}
                  onChange={(e) => handleChange("workDaysPerWeek", parseFloat(e.target.value))}
                  style={{
                    width: "100%",
                    height: "6px",
                    borderRadius: "3px",
                    background: "linear-gradient(to right, #6b5344, #c0d4cd)",
                    outline: "none",
                    WebkitAppearance: "none",
                  }}
                />
                <p
                  style={{
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontSize: "0.8rem",
                    color: "#1a1a1a",
                    margin: "0.5rem 0 0 0",
                  }}
                >
                  Industry avg: {industryBenchmarks.workDaysPerWeek.avg} ({industryBenchmarks.workDaysPerWeek.range})
                </p>
              </div>

              {/* Overhead Percent */}
              <div>
                <label
                  style={{
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    color: "#c0d4cd",
                    display: "block",
                    marginBottom: "0.75rem",
                  }}
                >
                  Overhead %: <strong>{metrics.overheadPercent}%</strong>
                </label>
                <input
                  type="range"
                  min="30"
                  max="85"
                  value={metrics.overheadPercent}
                  onChange={(e) => handleChange("overheadPercent", parseInt(e.target.value))}
                  style={{
                    width: "100%",
                    height: "6px",
                    borderRadius: "3px",
                    background: "linear-gradient(to right, #6b5344, #c0d4cd)",
                    outline: "none",
                    WebkitAppearance: "none",
                  }}
                />
                <p
                  style={{
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontSize: "0.8rem",
                    color: "#1a1a1a",
                    margin: "0.5rem 0 0 0",
                  }}
                >
                  Industry avg: {industryBenchmarks.overheadPercent.avg}% ({industryBenchmarks.overheadPercent.range}%)
                </p>
              </div>
            </div>
          </div>

          {/* Comparison Section */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            {/* Cases Per Week Comparison */}
            <div
              style={{
                padding: "1.5rem",
                backgroundColor: "#fff",
                border: "1px solid rgba(201,185,154,0.2)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "1rem",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Libre Baskerville', serif",
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "#c0d4cd",
                    margin: 0,
                  }}
                >
                  Cases Per Week
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  {comparisons.casesPerWeek.isAbove ? (
                    <TrendingUp size={20} style={{ color: "#c0d4cd" }} />
                  ) : (
                    <TrendingDown size={20} style={{ color: "#6b5344" }} />
                  )}
                  <span
                    style={{
                      fontFamily: "'Nunito Sans', sans-serif",
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      color: comparisons.casesPerWeek.isAbove ? "#c0d4cd" : "#6b5344",
                    }}
                  >
                    {comparisons.casesPerWeek.isAbove ? "+" : ""}{comparisons.casesPerWeek.percent}%
                  </span>
                </div>
              </div>
              <p
                style={{
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontSize: "0.85rem",
                  color: "#1a1a1a",
                  margin: 0,
                }}
              >
                You: {metrics.casesPerWeek} | Industry Avg: {industryBenchmarks.casesPerWeek.avg}
              </p>
            </div>

            {/* Team Size Comparison */}
            <div
              style={{
                padding: "1.5rem",
                backgroundColor: "#fff",
                border: "1px solid rgba(201,185,154,0.2)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "1rem",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Libre Baskerville', serif",
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "#c0d4cd",
                    margin: 0,
                  }}
                >
                  Team Size
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  {comparisons.teamSize.isAbove ? (
                    <TrendingUp size={20} style={{ color: "#6b5344" }} />
                  ) : (
                    <TrendingDown size={20} style={{ color: "#c0d4cd" }} />
                  )}
                  <span
                    style={{
                      fontFamily: "'Nunito Sans', sans-serif",
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      color: comparisons.teamSize.isAbove ? "#6b5344" : "#c0d4cd",
                    }}
                  >
                    {comparisons.teamSize.isAbove ? "+" : ""}{comparisons.teamSize.percent}%
                  </span>
                </div>
              </div>
              <p
                style={{
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontSize: "0.85rem",
                  color: "#1a1a1a",
                  margin: 0,
                }}
              >
                You: {metrics.teamSize} | Industry Avg: {industryBenchmarks.teamSize.avg}
              </p>
            </div>

            {/* Overhead Comparison */}
            <div
              style={{
                padding: "1.5rem",
                backgroundColor: "#fff",
                border: "1px solid rgba(201,185,154,0.2)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "1rem",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Libre Baskerville', serif",
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "#c0d4cd",
                    margin: 0,
                  }}
                >
                  Overhead %
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  {comparisons.overheadPercent.isAbove ? (
                    <TrendingUp size={20} style={{ color: "#6b5344" }} />
                  ) : (
                    <TrendingDown size={20} style={{ color: "#c0d4cd" }} />
                  )}
                  <span
                    style={{
                      fontFamily: "'Nunito Sans', sans-serif",
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      color: comparisons.overheadPercent.isAbove ? "#6b5344" : "#c0d4cd",
                    }}
                  >
                    {comparisons.overheadPercent.isAbove ? "+" : ""}{comparisons.overheadPercent.percent}%
                  </span>
                </div>
              </div>
              <p
                style={{
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontSize: "0.85rem",
                  color: "#1a1a1a",
                  margin: 0,
                }}
              >
                You: {metrics.overheadPercent}% | Industry Avg: {industryBenchmarks.overheadPercent.avg}%
              </p>
            </div>
          </div>
        </div>

        {/* Potential Impact */}
        <div
          style={{
            marginTop: "4rem",
            padding: "2rem",
            backgroundColor: "#c0d4cd",
          }}
        >
          <h3
            style={{
              fontFamily: "'Libre Baskerville', serif",
              fontSize: "1.3rem",
              fontWeight: 700,
              color: "#f8f4ed",
              marginBottom: "2rem",
              textAlign: "center",
            }}
          >
            Your Potential Impact
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "2rem",
            }}
            className="lg:grid-cols-3"
          >
            <div style={{ textAlign: "center" }}>
              <p
                style={{
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#6b5344",
                  margin: "0 0 0.75rem 0",
                }}
              >
                Production Gap
              </p>
              <p
                style={{
                  fontFamily: "'Libre Baskerville', serif",
                  fontSize: "1.8rem",
                  fontWeight: 700,
                  color: "#f8f4ed",
                  margin: "0 0 0.5rem 0",
                }}
              >
                ${(productionGap / 1000).toFixed(0)}K
              </p>
              <p
                style={{
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontSize: "0.8rem",
                  color: "rgba(248,244,237,0.6)",
                  margin: 0,
                }}
              >
                Annual revenue opportunity
              </p>
            </div>

            <div style={{ textAlign: "center" }}>
              <p
                style={{
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#6b5344",
                  margin: "0 0 0.75rem 0",
                }}
              >
                Team Efficiency
              </p>
              <p
                style={{
                  fontFamily: "'Libre Baskerville', serif",
                  fontSize: "1.8rem",
                  fontWeight: 700,
                  color: "#f8f4ed",
                  margin: "0 0 0.5rem 0",
                }}
              >
                {teamEfficiency > 0 ? "+" : ""}{teamEfficiency.toFixed(0)}%
              </p>
              <p
                style={{
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontSize: "0.8rem",
                  color: "rgba(248,244,237,0.6)",
                  margin: 0,
                }}
              >
                Potential team reduction
              </p>
            </div>

            <div style={{ textAlign: "center" }}>
              <p
                style={{
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#6b5344",
                  margin: "0 0 0.75rem 0",
                }}
              >
                Overhead Savings
              </p>
              <p
                style={{
                  fontFamily: "'Libre Baskerville', serif",
                  fontSize: "1.8rem",
                  fontWeight: 700,
                  color: "#f8f4ed",
                  margin: "0 0 0.5rem 0",
                }}
              >
                ${(overheadSavings / 1000).toFixed(0)}K
              </p>
              <p
                style={{
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontSize: "0.8rem",
                  color: "rgba(248,244,237,0.6)",
                  margin: 0,
                }}
              >
                Annual cost reduction
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
