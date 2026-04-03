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
    id: 0,
    title: "The Reports Every Dental Practice Should Be Running (But Most Don't)",
    excerpt: "Most dental practices are not underperforming because of a lack of effort. They are underperforming because the owner does not have a clear, consistent view of what is actually happening inside the business.",
    content: `Most dental practices are not underperforming because of a lack of effort.

They are underperforming because the owner does not have a clear, consistent view of what is actually happening inside the business.

Production feels strong. The schedule looks full. The team appears busy. But without structured reporting, those signals are unreliable. Practices drift. Expenses creep. Collections lag. Inefficiencies compound quietly.

The difference between a well-run practice and an average one is not talent.

It is visibility.

And visibility comes from running the right reports—consistently—and knowing exactly what to evaluate.

**The Core Principle: Frequency Creates Control**

A report that is run occasionally is not a management tool. It is a historical reference.

To actually improve performance, reports must be reviewed on a defined cadence with a defined purpose. Weekly, monthly, and quarterly rhythms matter.

The goal is not to "look at numbers."

The goal is to identify movement, detect problems early, and make decisions before issues compound.

**The Essential Reports Every Practice Should Be Reviewing**

**1. Production & Collections Report (Daily / Weekly / Monthly)**

What to run: Daily Production by Provider, Daily Collections, Month-to-Date Production vs Goal, Month-to-Date Collections vs Production

What to evaluate: Is production consistent or variable by provider? Are collections lagging behind production? Is there a growing gap between adjusted production and actual collections? Are certain days or providers underperforming?

Key insight: Production without collections is not performance. It is exposure.

**2. Adjustments & Write-Off Report (Weekly / Monthly)**

What to run: Adjustments by Provider, Adjustments by Type, Write-offs by Category

What to evaluate: Are adjustments trending upward? Are adjustments concentrated with specific team members? Are write-offs aligned with contracted rates or exceeding them? Are there unexplained or inconsistent adjustments?

Key insight: Uncontrolled adjustments are one of the most common sources of silent revenue loss.

**3. Accounts Receivable Aging Report (Weekly / Monthly)**

What to run: A/R Aging (0–30, 31–60, 61–90, 90+), Insurance vs Patient A/R breakdown

What to evaluate: Is A/R growing faster than production? What percentage of A/R is over 60 or 90 days? Are insurance claims being followed up consistently? Are patient balances being addressed proactively?

Key insight: A/R is not just a collections issue. It is a systems issue.

**4. Hygiene Reappointment & Utilization Report (Weekly / Monthly)**

What to run: Hygiene Reappointment Rate, Hygiene Production per Day, Open Chair Time / Unscheduled Patients

What to evaluate: What percentage of patients are leaving with their next visit scheduled? Are hygiene chairs fully utilized? Is there a growing pool of unscheduled patients?

Key insight: Hygiene is the foundation of predictable production. Instability here impacts everything downstream.

**5. Schedule Utilization Report (Daily / Weekly)**

What to run: Provider Schedule Fill Rate, Same-Day Openings, Cancellation and No-Show Rate

What to evaluate: Are high-value procedures scheduled efficiently? Are gaps being filled proactively or reactively? Are cancellations concentrated in specific times or providers?

Key insight: A full schedule is not the same as an optimized schedule.

**6. Payroll & Labor Ratio Report (Monthly)**

What to run: Total Payroll as % of Collections, Payroll by Department

What to evaluate: Is payroll aligned with production levels? Are certain roles over-resourced relative to output? Is overtime or inefficiency present?

Key insight: Labor is typically the largest controllable expense. Small inefficiencies scale quickly.

**7. Supply & Vendor Expense Report (Monthly / Quarterly)**

What to run: Supplies as % of Collections, Vendor Spend by Category, Subscription / Recurring Charges

What to evaluate: Are supplies trending upward without a corresponding increase in production? Are multiple vendors being used unnecessarily? Are there redundant subscriptions or services?

Key insight: Expense drift is rarely dramatic. It is gradual and cumulative.

**8. Case Acceptance & Treatment Planning Report (Monthly)**

What to run: Treatment Presented vs Accepted, Dollar Value of Accepted vs Declined Treatment

What to evaluate: Is case acceptance stable or declining? Are larger cases being delayed or rejected? Is financial presentation or communication a limiting factor?

Key insight: Production is not just about volume. It is about conversion.

**Why Most Practices Fail to Use These Effectively**

The issue is not access. Every major PMS can generate these reports.

The issue is consistency and interpretation. Reports are run inconsistently. Reviewed superficially. Or delegated without accountability. The owner assumes someone else is monitoring performance, but no one is truly responsible for synthesizing and acting on the data.

That creates blind spots.

**Where AI Becomes Useful**

This is where AI becomes practical, not theoretical.

AI can: Aggregate these reports into a single executive summary, Highlight deviations and trends automatically, Flag anomalies in adjustments, A/R, or expenses, Translate raw data into plain-language insights, Create weekly leadership summaries with action items

Instead of reviewing ten reports independently, the owner sees: What changed, What is off, What requires action

That is leverage.

**The Operating Shift**

Well-run practices do not guess. They operate with a defined reporting cadence, clear expectations, and structured review.

Weekly: Production, collections, schedule, hygiene, A/R
Monthly: Payroll, expenses, case acceptance, adjustments
Quarterly: Trend analysis, vendor review, strategic planning

That rhythm creates control. Without it, the practice is reactive.

**How Salt & Sage Helps**

Most practices do not need more reports. They need a system.

At Salt & Sage, we help dental practices: Identify the critical reports that actually matter, Build a structured reporting cadence, Translate data into actionable insight, Implement accountability across the team, Integrate AI to simplify and accelerate reporting

The objective is not complexity. It is clarity.

If your practice lacks consistent visibility into performance, or if reporting exists but is not driving decisions, it is time to implement a more disciplined operating model. AI can support that process. But the system comes first.`,
    author: "Reenie Rausch",
    date: "April 3, 2026",
    category: "Operations",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663480340383/HbaTftMmHdRjcnojrJYzyk/chatgpt_2026-04-03_08-14-39_9242_e05e4d80.webp",
  },
  {
    id: 1,
    title: "AI Is Becoming Essential to Running a Better Dental Practice",
    excerpt: "Most dentists didn't go to school to become operators, financial analysts, or systems architects. Yet many practices are still run on a model that assumes the business side will somehow take care of itself.",
    content: `Most dentists did not go to school to become operators, financial analysts, or systems architects. They became dentists to diagnose, treat, and care for patients.

Yet many practices are still run on a model that assumes the business side will somehow take care of itself. The doctor produces. The staff "handles the office." Reports are reviewed inconsistently, if at all. Expenses are tolerated rather than actively managed. Processes vary by team member. Performance issues are addressed late. Financial leakage goes unnoticed. Important decisions are made with partial visibility.

That model is no longer sustainable.

Artificial intelligence is becoming one of the most useful tools available to dental practices because it can help solve a problem that has existed for years: most practices have data, activity, and effort, but not enough clarity, structure, or control.

This is not about replacing people. It is about reducing waste, improving visibility, and creating a more disciplined operating environment.

**The Wrong Way to Think About AI**

Many businesses still think of AI primarily as a content tool. They use it to write social media posts, emails, newsletters, and website copy. That has value, but it is not where the greatest leverage sits for a dental practice.

The highest-value use of AI is not marketing content. It is operational execution.

AI is most useful when it helps the owner and leadership team understand what is happening inside the practice, identify where performance is slipping, standardize how work gets done, and improve the quality of decisions.

**Why Dentistry Is a Strong Fit for AI**

Dental practices are full of recurring workflows, predictable data patterns, administrative bottlenecks, and reporting gaps. Those conditions make them especially well-suited for AI-supported systems.

Many practices struggle with the same issues: inconsistent reporting, unclear accountability, payroll inefficiency, supply spend creep, incomplete process documentation, missed follow-up, weak meeting discipline, poor visibility into trends, and too much dependence on one or two key employees.

These are not rare failures. They are common structural weaknesses. AI is becoming useful because it can help organize the information around those weaknesses and support a more consistent operating model.

**Where AI Can Create Real Leverage**

The first major area is reporting and visibility. Most practices already have data in their PMS, accounting systems, payroll platforms, and spreadsheets. The problem is that the information is often fragmented, underused, or poorly interpreted.

AI can help convert raw data into usable management insight. Instead of just generating reports, it can summarize what changed, flag outliers, identify possible causes, and highlight where leadership should focus.

The second area is workflow standardization. A surprising number of practices are being held together by memory and habit. AI can help document processes, build SOPs, create checklists, draft scripts, clarify roles, and support training.

The third area is financial discipline. Many practice owners are less aware than they should be of what is happening in payroll, supplies, subscriptions, adjustments, and refunds. AI can help review spending patterns, categorize expenses, identify anomalies, and prepare cleaner summaries for decision-making.

The fourth area is communication and accountability. Meetings often happen without clear follow-through. AI can summarize meetings, extract decisions, assign tasks, create follow-up lists, and maintain continuity across leadership discussions.

The fifth area is strategic execution. Growth decisions, staffing changes, system transitions, and operational restructuring all require analysis and coordination. AI can consolidate information, organize options, and prepare decision-support materials far more efficiently.

**What AI Should Do, and What It Should Not Do**

AI should support leadership, not replace it. It should organize information, detect patterns, summarize findings, draft materials, track follow-up, and accelerate administrative work.

It should not independently make sensitive legal, compliance, HR, payroll, or financial-control decisions without qualified human oversight.

A dental practice still needs judgment. It still needs accountability. It still needs leadership. What AI can do is reduce the friction around those things.

**The Practices That Benefit Most**

The offices that get the most value from AI will not necessarily be the most technologically sophisticated. They will be the ones that apply it to real operational constraints.

That usually means starting with practical use cases such as: weekly KPI reporting, expense and overhead review, SOP development, team accountability tracking, meeting summaries and follow-up, patient communication workflows, operational bottleneck identification, vendor oversight, and leadership planning support.

**The Real Opportunity**

The future of the dental practice is not "AI-run." It is AI-supported. The strongest model is simple: the dentist leads, the team executes, the systems create consistency, and AI improves visibility, structure, and speed.

Dentistry is moving into a more demanding business environment. Labor is expensive. Margins are under pressure. Overhead matters. Operational inefficiency compounds quickly. Owners need stronger systems, better reporting, and greater control over the business side of practice.

AI is becoming an essential tool because it helps create those conditions. Not because it is fashionable. Because it is useful.

**How Salt & Sage Helps**

At Salt & Sage, we believe most practices do not need more noise. They need better structure. We help dental leaders build clearer reporting, stronger systems, better accountability, and more disciplined operations. Where AI can create leverage, we help integrate it in a way that is practical, measured, and aligned with the realities of running a dental business.

The goal is not to add complexity. The goal is to help practices run with greater clarity, consistency, and control. If your practice is growing, underperforming, or simply too dependent on manual effort and fragmented systems, now is the time to build a more durable operating model.`,
    author: "Reenie Rausch",
    date: "March 25, 2026",
    category: "Technology",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663480340383/HbaTftMmHdRjcnojrJYzyk/image_f1899bc8_3f2cad88.png",
  },
  {
    id: 2,
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

Our reporting program bridges this gap by transforming raw operational data into visual, real-time dashboards that support confident decision-making. Instead of waiting for reports, leaders see performance as it happens and can adjust strategy in real-time.`,
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

      {/* Hero */}
      <section
        style={{
          minHeight: "60vh",
          backgroundColor: "#f8f4ed",
          display: "flex",
          alignItems: "center",
          paddingTop: "20rem",
          paddingBottom: "4rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Muted strategy background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url(https://d2xsxph8kpxj0f.cloudfront.net/310519663480340383/HbaTftMmHdRjcnojrJYzyk/blog-hero_545c2b76.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.18,
            pointerEvents: "none",
            filter: "sepia(0.15) saturate(0.8)",
          }}
        />
        {/* Warm cream tint overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(248,244,237,0.35)",
            pointerEvents: "none",
          }}
        />
        <div className="container" style={{ position: "relative" }}>
          <div style={{ maxWidth: "720px" }}>
            <span className="ss-label" style={{ marginBottom: "1rem", display: "block", color: "#2d2d2a" }}>
              Insights &amp; Resources
            </span>
            <span className="ss-divider" />
            <h1
              className="ss-display"
              style={{
                fontSize: "clamp(2.4rem, 5vw, 4rem)",
                fontWeight: 700,
                color: "#2d2d2a",
                marginBottom: "1.5rem",
                lineHeight: 1.1,
              }}
            >
              Thought Leadership on{" "}
              <em style={{ fontStyle: "italic", color: "#2d2d2a" }}>Strategy &amp; Operations</em>
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
                        color: "#5c4a2e",
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
                        color: "#5c4a2e",
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
                        backgroundColor: "rgba(201,185,154,0.08)",
                        fontFamily: "'Nunito Sans', sans-serif",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "#2d2d2a",
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
                      color: "#2d2d2a",
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
                      color: "#5a5750",
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
                      color: "#2d2d2a",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLButtonElement;
                      el.style.color = "#2d2d2a";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLButtonElement;
                      el.style.color = "#2d2d2a";
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
