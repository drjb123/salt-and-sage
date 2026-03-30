/* =============================================================
   Navbar — Salt & Sage Warm Editorial Luxury
   Fixed top nav: transparent → forest-green on scroll
   ============================================================= */

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Purpose", href: "#purpose" },
  { label: "Services", href: "#services" },
  { label: "Experts", href: "#experts" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Reporting", href: "/reporting" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith("/")) {
      // Use window.location for external routes
      window.location.pathname = href;
    } else if (href.startsWith("#")) {
      // For anchor links, check if we're on home page
      const isHomePage = window.location.pathname === "/";
      if (isHomePage) {
        // Already on home, just scroll to element
        const el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // On secondary page, navigate to home with anchor
        window.location.href = "/" + href;
      }
    }
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? "#e8ede4" : "transparent",
        boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,0.12)" : "none",
      }}
    >
      <div className="container flex items-center justify-between py-5">
        {/* Logo */}
        <a
          href="/"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          style={{ textDecoration: "none", display: "flex", alignItems: "center" }}
        >
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663480340383/HbaTftMmHdRjcnojrJYzyk/salt-sage-logo_b8c3927f.png"
            alt="Salt & Sage"
            style={{
              height: "336px",
              width: "auto",
              objectFit: "contain",
              filter: "brightness(0) saturate(100%) invert(3%) sepia(5%) saturate(20%) hue-rotate(30deg) brightness(10%)",
            }}
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#0a0a0a",
                background: "none",
                border: "none",
                padding: "0",
                transition: "color 0.3s ease",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color = "#c9b99a";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color = "#0a0a0a";
              }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#contact")}
            style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#f8f4ed",
              backgroundColor: "#5a4a3a",
              border: "1px solid",
              borderColor: "#5a4a3a",
              padding: "0.6rem 1.4rem",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              const btn = e.currentTarget as HTMLButtonElement;
              btn.style.backgroundColor = "#6b5a4a";
              btn.style.borderColor = "#6b5a4a";
              btn.style.color = "#f8f4ed";
            }}
            onMouseLeave={(e) => {
              const btn = e.currentTarget as HTMLButtonElement;
              btn.style.backgroundColor = "#5a4a3a";
              btn.style.borderColor = "#5a4a3a";
              btn.style.color = "#f8f4ed";
            }}
          >
            Get in Touch
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            color: "#0a0a0a",
            background: "none",
            border: "none",
            padding: "4px",
          }}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            backgroundColor: "#e8ede4",
            borderTop: "1px solid rgba(201,185,154,0.2)",
          }}
        >
          <div className="container py-6 flex flex-col gap-5">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                style={{
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#0a0a0a",
                  background: "none",
                  border: "none",
                  textAlign: "left",
                  padding: "0",
                }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#contact")}
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#2d2d2a",
                backgroundColor: "#c9b99a",
                border: "none",
                padding: "0.75rem 1.5rem",
                alignSelf: "flex-start",
                marginTop: "0.5rem",
              }}
            >
              Get in Touch
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
