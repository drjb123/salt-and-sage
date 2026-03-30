/* =============================================================
   Blog — Salt & Sage Blog Section
   Thought leadership articles on advisory, operations, leadership
   ============================================================= */

import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Chatbot from "@/components/Chatbot";
import Footer from "@/components/Footer";
import { ArrowRight, Calendar, User, Home } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Hidden Cost of Operational Inefficiency",
    excerpt: "Most organizations don't realize how much revenue is lost to operational friction. We break down the metrics that matter and show you how to reclaim it.",
    content: `Most organizations operate with invisible inefficiencies baked into their daily workflows. These aren't dramatic failures—they're the small friction points that accumulate over time, draining resources and limiting growth.

Consider a dental practice performing 8-12 cases per week. If administrative overhead consumes 15-20% of team capacity, that's nearly one full day per week lost to non-clinical work. Multiply that by 52 weeks, and you're looking at 8-10 weeks of lost productivity annually.

The challenge is that these inefficiencies are often invisible. They're embedded in outdated processes, manual data entry, unclear accountability structures, and communication gaps. Leaders don't see them because they've become "the way we do things."

Our approach is systematic: we identify the specific operational levers that drive your business, measure current performance, and implement targeted improvements. The result isn't just efficiency—it's clarity, control, and measurable ROI.`,
    author: "Reenie Rausch",
    date: "March 20, 2026",
    category: "Operations",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Building Accountability Systems That Actually Work",
    excerpt: "Accountability isn't about blame—it's about clarity. Learn how to build systems that drive results without creating friction.",
    content: `Accountability is one of the most misunderstood concepts in business leadership. Most leaders associate it with blame, punishment, or micromanagement. But true accountability is something entirely different.

Accountability is clarity. It's knowing what success looks like, understanding your role in achieving it, and having visibility into progress. When accountability systems are built correctly, they don't create friction—they eliminate it.

The best accountability systems share three characteristics:

1. **Clear Metrics**: Everyone understands what "done" looks like and how progress is measured.
2. **Regular Visibility**: Data is accessible in real-time, not buried in quarterly reports.
3. **Structured Feedback**: Regular check-ins focus on learning and improvement, not judgment.

We help organizations design accountability frameworks that align with their culture and drive sustainable performance improvement.`,
    author: "Sarah Mitchell",
    date: "March 15, 2026",
    category: "Leadership",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Data-Driven Decision Making: From Insight to Action",
    excerpt: "Having data is one thing. Using it to make better decisions is another. Here's how to bridge that gap.",
    content: `Organizations collect more data than ever before. Yet many leaders still make decisions based on intuition, anecdote, or last quarter's results. The gap between data availability and data-driven decision-making is wider than most realize.

The problem isn't data scarcity—it's data clarity. Leaders need insights that are:
- **Timely**: Available when decisions need to be made, not weeks later
- **Relevant**: Connected to the specific question at hand
- **Actionable**: Pointing toward specific next steps

Our reporting platform bridges this gap by transforming raw operational data into visual, real-time dashboards that support confident decision-making. Instead of waiting for reports, leaders see performance as it happens and can adjust strategy in real-time.`,
    author: "James Chen",
    date: "March 10, 2026",
    category: "Strategy",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Scaling Without Losing Control",
    excerpt: "Growth is exciting. But without the right systems, it becomes chaotic. Here's how to scale intentionally.",
    content: `Rapid growth is a blessing and a curse. It brings opportunity but also complexity. Many organizations hit a scaling wall when the systems that worked at 10 people no longer work at 50.

The key to scaling without losing control is anticipating system needs before they become bottlenecks. This means:

1. **Documenting processes** before they become inconsistent
2. **Building measurement systems** that scale with the organization
3. **Creating clear accountability structures** that work across teams
4. **Investing in technology** that enables rather than constrains

We work with growing organizations to build scalable operating models that maintain quality, culture, and profitability as they expand.`,
    author: "Reenie Rausch",
    date: "March 5, 2026",
    category: "Growth",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
  },
];

export default function Blog() {
  const headerRef = useRef<HTMLDivElement>(null);
  const postsRef = useRef<HTMLDivElement[]>([]);

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
    postsRef.current.forEach((el, i) => observe(el, i * 100));
  }, []);

  return (
    <div style={{ backgroundColor: "#f8f4ed" }}>
      <Navbar />
      <Chatbot />

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
            <span className="ss-label" style={{ marginBottom: "1rem", display: "block", color: "#c0d4cd" }}>
              Insights &amp; Resources
            </span>
            <span className="ss-divider" />
            <h1
              className="ss-display"
              style={{
                fontSize: "clamp(2.4rem, 5vw, 4rem)",
                fontWeight: 700,
                color: "#c0d4cd",
                marginBottom: "1.5rem",
                lineHeight: 1.1,
              }}
            >
              Thought Leadership on{" "}
              <em style={{ fontStyle: "italic", color: "#c0d4cd" }}>Strategy &amp; Operations</em>
            </h1>
            <p
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontSize: "1.05rem",
                color: "#1a1a1a",
                lineHeight: 1.8,
                maxWidth: "600px",
              }}
            >
              Insights from our advisory work helping organizations build clarity, control, and sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section
        style={{
          backgroundColor: "#f8f4ed",
          paddingTop: "3rem",
          paddingBottom: "7rem",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "3rem",
            }}
            className="lg:grid-cols-2"
          >
            {blogPosts.map((post, i) => (
              <article
                key={post.id}
                ref={(el) => { if (el) postsRef.current[i] = el as HTMLDivElement; }}
                className="reveal"
                style={{
                  backgroundColor: "#f8f4ed",
                  border: "1px solid rgba(201,185,154,0.3)",
                  transition: "all 0.3s ease",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.boxShadow = "0 8px 32px rgba(0,0,0,0.08)";
                  el.style.borderColor = "rgba(201,185,154,0.5)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.boxShadow = "none";
                  el.style.borderColor = "rgba(201,185,154,0.3)";
                }}
              >
                {/* Image */}
                <div
                  style={{
                    width: "100%",
                    height: "200px",
                    overflow: "hidden",
                    backgroundColor: "rgba(201,185,154,0.1)",
                  }}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>

                {/* Content */}
                <div style={{ padding: "2rem" }}>
                  {/* Meta */}
                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      marginBottom: "1rem",
                      flexWrap: "wrap",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        fontFamily: "'Nunito Sans', sans-serif",
                        fontSize: "0.8rem",
                        color: "#6b5344",
                        fontWeight: 600,
                      }}
                    >
                      <Calendar size={14} />
                      {post.date}
                    </span>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        fontFamily: "'Nunito Sans', sans-serif",
                        fontSize: "0.8rem",
                        color: "#6b5344",
                        fontWeight: 600,
                      }}
                    >
                      <User size={14} />
                      {post.author}
                    </span>
                    <span
                      style={{
                        display: "inline-block",
                        padding: "0.25rem 0.75rem",
                        backgroundColor: "rgba(201,185,154,0.15)",
                        fontFamily: "'Nunito Sans', sans-serif",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "#c0d4cd",
                      }}
                    >
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: "'Libre Baskerville', serif",
                      fontSize: "1.3rem",
                      fontWeight: 700,
                      color: "#c0d4cd",
                      marginBottom: "0.75rem",
                      lineHeight: 1.3,
                    }}
                  >
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p
                    style={{
                      fontFamily: "'Nunito Sans', sans-serif",
                      fontSize: "0.95rem",
                      color: "#1a1a1a",
                      lineHeight: 1.8,
                      marginBottom: "1.5rem",
                    }}
                  >
                    {post.excerpt}
                  </p>

                  {/* Read More */}
                  <button
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      fontFamily: "'Nunito Sans', sans-serif",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      color: "#c0d4cd",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLButtonElement;
                      el.style.color = "#c0d4cd";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLButtonElement;
                      el.style.color = "#c0d4cd";
                    }}
                  >
                    Read Article
                    <ArrowRight size={14} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
