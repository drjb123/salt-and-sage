import { useEffect } from "react";
import { useLocation } from "wouter";

export default function Footer() {
  const year = new Date().getFullYear();
  const [location, navigate] = useLocation();

  const scrollToTarget = (target: string) => {
    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollTo = (id: string) => {
    if (id.startsWith("/")) {
      navigate(id);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (id.startsWith("#")) {
      const isHomePage = location === "/";

      if (isHomePage) {
        scrollToTarget(id);
      } else {
        sessionStorage.setItem("scrollTarget", id);
        navigate("/");
      }
    }
  };

  useEffect(() => {
    const scrollTarget = sessionStorage.getItem("scrollTarget");
    if (!scrollTarget) return;

    sessionStorage.removeItem("scrollTarget");

    const timer = window.setTimeout(() => {
      scrollToTarget(scrollTarget);
    }, 150);

    return () => window.clearTimeout(timer);
  }, [location]);

  return (
    <footer
      style={{
        backgroundColor: "#e8ede4",
        borderTop: "1px solid rgba(201,185,154,0.08)",
        paddingTop: "4rem",
        paddingBottom: "2.5rem",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gap: "3rem",
            marginBottom: "3rem",
          }}
          className="grid-cols-1 md:grid-cols-3"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                if (location !== "/") {
                  navigate("/");
                } else {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              style={{
                textDecoration: "none",
                display: "inline-block",
                marginBottom: "1.25rem",
                alignSelf: "center",
              }}
            >
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663480340383/HbaTftMmHdRjcnojrJYzyk/salt-sage-logo-bold-black_b61800b9.png"
                alt="Salt & Sage"
                style={{
                  height: "280px",
                  width: "auto",
                  objectFit: "contain",
                }}
              />
            </a>
            <p
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontSize: "0.88rem",
                color: "rgba(10,10,10,0.82)",
                lineHeight: 1.75,
                maxWidth: "260px",
                textAlign: "center",
                alignSelf: "center",
              }}
            >
              Connecting organizations with comprehensive support and specialized
              expertise across the disciplines that matter most.
            </p>
          </div>

          <div>
            <p
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#5c4a2e",
                marginBottom: "1.25rem",
              }}
            >
              Navigate
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { label: "Our Purpose", href: "#purpose" },
                { label: "Our Services", href: "#services" },
                { label: "Advisory Experts", href: "#experts" },
                { label: "Case Studies", href: "/case-studies" },
                { label: "Blog", href: "/blog" },
                { label: "Reporting", href: "/reporting" },
                { label: "Get in Touch", href: "#contact" },
              ].map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  style={{
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontSize: "0.88rem",
                    color: "rgba(10,10,10,0.85)",
                    background: "none",
                    border: "none",
                    padding: 0,
                    textAlign: "left",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#0a0a0a";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(10,10,10,0.85)";
                  }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#5c4a2e",
                marginBottom: "1.25rem",
              }}
            >
              Services
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                "Strategic Planning",
                "Growth Strategy",
                "Operational Excellence",
                "Leadership Advisory",
                "Change Management",
                "Performance & Accountability",
              ].map((item) => (
                <span
                  key={item}
                  style={{
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontSize: "0.88rem",
                    color: "rgba(10,10,10,0.78)",
                    lineHeight: 1.4,
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            height: "1px",
            backgroundColor: "rgba(201,185,154,0.06)",
            marginBottom: "1.75rem",
          }}
        />

        <div className="flex flex-col gap-2 items-start md:flex-row md:items-center md:justify-between">
          <p
            style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: "0.78rem",
              color: "rgba(10,10,10,0.7)",
            }}
          >
            &copy; {year} Salt &amp; Sage. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: "'Libre Baskerville', serif",
              fontSize: "0.78rem",
              fontStyle: "italic",
              color: "rgba(201,185,154,0.5)",
            }}
          >
            Where insight meets action.
          </p>
        </div>
      </div>
    </footer>
  );
}
