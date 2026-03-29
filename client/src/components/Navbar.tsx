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
    } else {
      // For anchor links, scroll to element
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? "#c0d4cd" : "transparent",
        boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,0.12)" : "none",
      }}
    >
      <div className="container flex items-center justify-between py-5">
        {/* Logo */}
        <a
          href="/"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="flex flex-col leading-none"
          style={{ textDecoration: "none" }}
        >
          <span
            style={{
              fontFamily: "'Libre Baskerville', serif",
              fontSize: "1.2rem",
              fontWeight: 700,
              color: scrolled ? "#1c1c1a" : "#c0d4cd",
              letterSpacing: "0.04em",
              transition: "color 0.4s ease",
            }}
          >
            Salt &amp; Sage
          </span>
          <span
            style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: "0.6rem",
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: scrolled ? "rgba(201,185,154,0.9)" : "#6b6560",
              transition: "color 0.4s ease",
              marginTop: "2px",
            }}
          >
            Strategic Advisory
          </span>
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
                color: scrolled ? "#1c1c1a" : "#c0d4cd",
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
                (e.currentTarget as HTMLButtonElement).style.color = scrolled ? "#1c1c1a" : "#c0d4cd";
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
              color: scrolled ? "#c0d4cd" : "#1c1c1a",
              backgroundColor: scrolled ? "#c9b99a" : "#c0d4cd",
              border: "1px solid",
              borderColor: scrolled ? "#c9b99a" : "#c0d4cd",
              padding: "0.6rem 1.4rem",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              const btn = e.currentTarget as HTMLButtonElement;
              btn.style.backgroundColor = "#d0ddd8";
              btn.style.borderColor = "#d0ddd8";
              btn.style.color = "#1c1c1a";
            }}
            onMouseLeave={(e) => {
              const btn = e.currentTarget as HTMLButtonElement;
              btn.style.backgroundColor = scrolled ? "#c9b99a" : "#c0d4cd";
              btn.style.borderColor = scrolled ? "#c9b99a" : "#c0d4cd";
              btn.style.color = scrolled ? "#c0d4cd" : "#1c1c1a";
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
            color: scrolled ? "#1c1c1a" : "#c0d4cd",
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
            backgroundColor: "#c0d4cd",
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
                  color: "#1c1c1a",
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
                color: "#c0d4cd",
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
