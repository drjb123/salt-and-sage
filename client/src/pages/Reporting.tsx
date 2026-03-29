/* =============================================================
   Reporting — Salt & Sage Reporting & Metrics Page
   Showcase digital dashboards and analytics examples
   ============================================================= */

import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Chatbot from "@/components/Chatbot";
import Footer from "@/components/Footer";
import { ArrowRight, BarChart3, LineChart, PieChart, TrendingUp, Home } from "lucide-react";

const DASHBOARD_OVERVIEW = "https://d2xsxph8kpxj0f.cloudfront.net/310519663480340383/HbaTftMmHdRjcnojrJYzyk/dental-dashboard-cases-Xf6xEpeGuz42SYUgeaiJAg.webp";
const DASHBOARD_OPERATIONS = "https://d2xsxph8kpxj0f.cloudfront.net/310519663480340383/HbaTftMmHdRjcnojrJYzyk/dental-dashboard-operations-8dVyrkZYVTi8pKwHaf8px8.webp";
const DASHBOARD_FINANCIAL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663480340383/HbaTftMmHdRjcnojrJYzyk/dental-dashboard-financial-85oge5PQ7zgsBdxntiDwmP.webp";
const DASHBOARD_TEAM = "https://d2xsxph8kpxj0f.cloudfront.net/310519663480340383/HbaTftMmHdRjcnojrJYzyk/dental-dashboard-team-UTDS6AUb245CWY4fHFiohW.webp";
const DASHBOARD_CLIENT = "https://d2xsxph8kpxj0f.cloudfront.net/310519663480340383/HbaTftMmHdRjcnojrJYzyk/dashboard-client-AGKLK54oBMJTjjdogot96Z.webp";

const dashboards = [
  {
    title: "Practice Overview",
    description: "Real-time case volume tracking, average case value, team utilization, and profitability by service type. Monitor your production growth and case mix at a glance.",
    image: DASHBOARD_OVERVIEW,
    icon: BarChart3,
    metrics: ["Cases/Week", "Avg Case Value", "Team Utilization", "Monthly Revenue"],
  },
  {
    title: "Operations Dashboard",
    description: "Appointment scheduling efficiency, patient wait times, operatory utilization, and supply inventory. Optimize your practice operations in real-time.",
    image: DASHBOARD_OPERATIONS,
    icon: TrendingUp,
    metrics: ["On-Time %", "Wait Times", "Operatory Util.", "Supply Cost"],
  },
  {
    title: "Financial Performance",
    description: "Revenue trends, overhead ratios, profit margins by service, and financial forecasting. Track your path to profitability and growth.",
    image: DASHBOARD_FINANCIAL,
    icon: LineChart,
    metrics: ["Monthly Revenue", "Overhead %", "Net Profit", "Revenue/Case"],
  },
  {
    title: "Team Performance",
    description: "Hygienist and assistant productivity, patient satisfaction by provider, team satisfaction scores, and training hours completed.",
    image: DASHBOARD_TEAM,
    icon: PieChart,
    metrics: ["Patients/Day", "Team Satisfaction", "Retention Rate", "Training Hours"],
  },
  {
    title: "Patient Analytics",
    description: "Patient acquisition trends, lifetime value, retention rates, and satisfaction metrics. Build lasting patient relationships.",
    image: DASHBOARD_CLIENT,
    icon: TrendingUp,
    metrics: ["New Patients", "Retention %", "Satisfaction", "Referral Rate"],
  },
];

const features = [
  {
    title: "Real-Time Data",
    description: "Live dashboards that update continuously, giving you instant visibility into your business performance.",
  },
  {
    title: "Custom Reports",
    description: "Tailored reporting aligned to your specific KPIs and business objectives.",
  },
  {
    title: "Predictive Analytics",
    description: "Forecasting and trend analysis to help you stay ahead of market changes.",
  },
  {
    title: "Automated Alerts",
    description: "Intelligent notifications when key metrics deviate from targets.",
  },
  {
    title: "Exportable Formats",
    description: "Download reports as PDFs, Excel files, or integrate directly with your systems.",
  },
  {
    title: "Mobile Access",
    description: "View dashboards and reports on any device, anywhere, anytime.",
  },
];

export default function Reporting() {
  const headerRef = useRef<HTMLDivElement>(null);
  const dashboardsRef = useRef<(HTMLDivElement | null)[]>([]);

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
    dashboardsRef.current.forEach((el, i) => observe(el, i * 100));
  }, []);

  return (
    <div style={{ backgroundColor: "#1c1c1a" }}>
      <Navbar />
      <Chatbot />

      {/* Back to Home */}
      <div
        style={{
          backgroundColor: "#1c1c1a",
          paddingTop: "1rem",
          paddingBottom: "0.5rem",
          borderBottom: "1px solid rgba(201,185,154,0.1)",
        }}
      >
        <div className="container">
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            <a
              href="/#purpose"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontFamily: "'Nunito Sans', sans-serif",
                fontSize: "0.9rem",
                color: "#c0d4cd",
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Purpose
            </a>
            <a
              href="/#services"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontFamily: "'Nunito Sans', sans-serif",
                fontSize: "0.9rem",
                color: "#c0d4cd",
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Services
            </a>
            <a
              href="/#experts"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontFamily: "'Nunito Sans', sans-serif",
                fontSize: "0.9rem",
                color: "#c0d4cd",
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Experts
            </a>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section
        style={{
          minHeight: "70vh",
          backgroundColor: "#1c1c1a",
          display: "flex",
          alignItems: "center",
          paddingTop: "8rem",
          paddingBottom: "4rem",
        }}
      >
        <div className="container">
          <div style={{ maxWidth: "720px" }}>
            <span className="ss-label" style={{ marginBottom: "1rem", display: "block", color: "#c0d4cd" }}>
              Reporting &amp; Metrics
            </span>
            <span className="ss-divider" />
            <h1
              className="ss-display"
              style={{
                fontSize: "clamp(2.4rem, 5vw, 4rem)",
                fontWeight: 700,
                color: "#d0ddd8",
                marginBottom: "1.5rem",
                lineHeight: 1.1,
              }}
            >
              Data-Driven Insights,{" "}
              <em style={{ fontStyle: "italic", color: "#c0d4cd" }}>Delivered Daily</em>
            </h1>
            <p
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontSize: "1.05rem",
                color: "#5a5750",
                lineHeight: 1.8,
                marginBottom: "2.5rem",
                maxWidth: "600px",
              }}
            >
              Our digital reporting platform transforms complex operational data into actionable intelligence. Real-time dashboards, custom metrics, and predictive analytics—all designed for tech-forward leaders.
            </p>
            <button
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="ss-btn-primary"
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              Request a Demo
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* Dashboard Gallery */}
      <section
        style={{
          backgroundColor: "#1c1c1a",
          paddingTop: "5rem",
          paddingBottom: "7rem",
        }}
      >
        <div className="container">
          <div
            ref={headerRef}
            className="reveal"
            style={{ marginBottom: "4rem", maxWidth: "640px" }}
          >
            <span className="ss-label" style={{ marginBottom: "1rem", display: "block", color: "#c0d4cd" }}>
              Dashboard Examples
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
              See Your Business{" "}
              <em style={{ fontStyle: "italic" }}>in Real Time</em>
            </h2>
          </div>

          {/* Dashboard Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "3rem",
            }}
          >
            {dashboards.map((dashboard, i) => {
              const Icon = dashboard.icon;
              return (
                <div
                  key={dashboard.title}
                  ref={(el) => { dashboardsRef.current[i] = el; }}
                  className="reveal grid-cols-1 lg:grid-cols-2"
                  style={{
                    display: "grid",
                    gap: "2rem",
                    alignItems: "center",
                  }}
                >
                  {/* Text (alternating left/right) */}
                  <div
                    style={{
                      order: i % 2 === 0 ? 1 : 2,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        marginBottom: "1rem",
                      }}
                    >
                      <div
                        style={{
                          width: "40px",
                          height: "40px",
                          backgroundColor: "#c0d4cd",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Icon size={18} style={{ color: "#c9b99a" }} />
                      </div>
                      <h3
                        style={{
                          fontFamily: "'Libre Baskerville', serif",
                          fontSize: "1.3rem",
                          fontWeight: 700,
                          color: "#d0ddd8",
                        }}
                      >
                        {dashboard.title}
                      </h3>
                    </div>

                    <p
                      style={{
                        fontFamily: "'Nunito Sans', sans-serif",
                        fontSize: "1rem",
                        color: "#5a5750",
                        lineHeight: 1.8,
                        marginBottom: "1.5rem",
                      }}
                    >
                      {dashboard.description}
                    </p>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                      {dashboard.metrics.map((metric) => (
                        <span
                          key={metric}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            padding: "0.5rem 1rem",
                            backgroundColor: "rgba(201,185,154,0.12)",
                            border: "1px solid rgba(201,185,154,0.25)",
                            fontFamily: "'Nunito Sans', sans-serif",
                            fontSize: "0.8rem",
                            fontWeight: 600,
                            color: "#c0d4cd",
                          }}
                        >
                          <span style={{ width: "4px", height: "4px", backgroundColor: "#c9b99a" }} />
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Image */}
                  <div
                    style={{
                      order: i % 2 === 0 ? 2 : 1,
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "-1.5rem",
                        left: "-1.5rem",
                        right: "1.5rem",
                        bottom: "1.5rem",
                        border: "1px solid rgba(201,185,154,0.3)",
                        zIndex: 0,
                      }}
                    />
                    <img
                      src={dashboard.image}
                      alt={dashboard.title}
                      style={{
                        width: "100%",
                        height: "auto",
                        position: "relative",
                        zIndex: 1,
                        display: "block",
                        borderRadius: "2px",
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        style={{
          backgroundColor: "#c0d4cd",
          paddingTop: "7rem",
          paddingBottom: "7rem",
        }}
      >
        <div className="container">
          <div style={{ marginBottom: "4rem", maxWidth: "640px" }}>
            <span className="ss-label" style={{ marginBottom: "1rem", display: "block", color: "#c9b99a" }}>
              Reporting Capabilities
            </span>
            <span
              className="ss-divider"
              style={{ backgroundColor: "#c9b99a" }}
            />
            <h2
              className="ss-display"
              style={{
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontWeight: 700,
                color: "#1c1c1a",
                marginBottom: "1.25rem",
                lineHeight: 1.15,
              }}
            >
              Built for{" "}
              <em style={{ fontStyle: "italic", color: "#c9b99a" }}>Tech-Forward Leaders</em>
            </h2>
            <p
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontSize: "1rem",
                color: "rgba(28,28,26,0.75)",
                lineHeight: 1.8,
              }}
            >
              Our platform integrates seamlessly with your existing systems and delivers insights in the format you prefer.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            {features.map((feature) => (
              <div
                key={feature.title}
                style={{
                  padding: "2rem",
                  backgroundColor: "rgba(28,28,26,0.05)",
                  border: "1px solid rgba(201,185,154,0.15)",
                  transition: "background-color 0.3s ease, border-color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.backgroundColor = "rgba(28,28,26,0.08)";
                  el.style.borderColor = "rgba(201,185,154,0.3)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.backgroundColor = "rgba(28,28,26,0.05)";
                  el.style.borderColor = "rgba(201,185,154,0.15)";
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Libre Baskerville', serif",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "#1c1c1a",
                    marginBottom: "0.75rem",
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontSize: "0.9rem",
                    color: "rgba(28,28,26,0.65)",
                    lineHeight: 1.75,
                  }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          backgroundColor: "#1c1c1a",
          paddingTop: "6rem",
          paddingBottom: "6rem",
          textAlign: "center",
        }}
      >
        <div className="container" style={{ maxWidth: "640px" }}>
          <h2
            className="ss-display"
            style={{
              fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
              fontWeight: 700,
              color: "#d0ddd8",
              marginBottom: "1.5rem",
              lineHeight: 1.15,
            }}
          >
            Ready to Transform Your Data Into{" "}
            <em style={{ fontStyle: "italic" }}>Strategic Advantage?</em>
          </h2>
          <p
            style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: "1rem",
              color: "#5a5750",
              lineHeight: 1.8,
              marginBottom: "2.5rem",
            }}
          >
            Schedule a personalized demo to see how our reporting platform can elevate your decision-making.
          </p>
          <button
            onClick={() => {
              const el = document.querySelector("#contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="ss-btn-primary"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
          >
            Schedule Demo
            <ArrowRight size={14} />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
