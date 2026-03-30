/* =============================================================
   VideoTestimonialsSection — Salt & Sage Video Testimonials
   Showcase client video testimonials with play buttons
   ============================================================= */

import { useEffect, useRef, useState } from "react";
import { Play, X } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Dr. Marcus Chen",
    title: "High-Volume Dental Practice Owner",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    quote: "I went from spending half my time managing chaos to actually practicing dentistry.",
  },
  {
    id: 2,
    name: "Jennifer Walsh",
    title: "Dental Practice Manager",
    thumbnail: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    quote: "The systems transformed how our team communicates and executes.",
  },
  {
    id: 3,
    name: "Michael Torres",
    title: "Multi-Practice Owner",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    quote: "We scaled from 2 to 5 practices without losing control or culture.",
  },
];

export default function VideoTestimonialsSection() {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
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
        backgroundColor: "#c8d5c0",
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
          <span className="ss-label" style={{ marginBottom: "1rem", display: "block", color: "#c9b99a" }}>
            Client Voices
          </span>
          <span
            className="ss-divider"
            style={{
              backgroundColor: "#c9b99a",
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
            Hear from Leaders Who{" "}
            <em style={{ fontStyle: "italic", color: "#c9b99a" }}>Transformed Their Practice</em>
          </h2>
          <p
            style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: "1rem",
              color: "rgba(26,26,26,0.7)",
              lineHeight: 1.8,
            }}
          >
            Watch how dental practice owners and leaders describe their experience working with Salt &amp; Sage.
          </p>
        </div>

        {/* Video Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2rem",
            marginBottom: "4rem",
          }}
          className="lg:grid-cols-3"
        >
          {testimonials.map((testimonial, i) => (
            <div
              key={testimonial.id}
              ref={(el) => { if (el) cardsRef.current[i] = el; }}
              className="reveal"
              style={{
                backgroundColor: "rgba(248,244,237,0.05)",
                border: "1px solid rgba(201,185,154,0.2)",
                overflow: "hidden",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.backgroundColor = "rgba(248,244,237,0.08)";
                el.style.borderColor = "rgba(201,185,154,0.4)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.backgroundColor = "rgba(248,244,237,0.05)";
                el.style.borderColor = "rgba(201,185,154,0.2)";
              }}
            >
              {/* Thumbnail with Play Button */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  paddingBottom: "75%",
                  backgroundColor: "rgba(0,0,0,0.2)",
                  overflow: "hidden",
                }}
              >
                <img
                  src={testimonial.thumbnail}
                  alt={testimonial.name}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <button
                  onClick={() => setSelectedVideo(testimonial.id)}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    backgroundColor: "#c9b99a",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLButtonElement;
                    el.style.transform = "translate(-50%, -50%) scale(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLButtonElement;
                    el.style.transform = "translate(-50%, -50%) scale(1)";
                  }}
                >
                  <Play size={24} style={{ color: "#c8d5c0", marginLeft: "4px" }} />
                </button>
              </div>

              {/* Content */}
              <div style={{ padding: "1.5rem" }}>
                <p
                  style={{
                    fontFamily: "'Libre Baskerville', serif",
                    fontSize: "1rem",
                    fontStyle: "italic",
                    color: "rgba(26,26,26,0.8)",
                    lineHeight: 1.6,
                    marginBottom: "1.5rem",
                    minHeight: "60px",
                  }}
                >
                  "{testimonial.quote}"
                </p>

                <div
                  style={{
                    borderTop: "1px solid rgba(201,185,154,0.2)",
                    paddingTop: "1rem",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Nunito Sans', sans-serif",
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      color: "#1a1a1a",
                      margin: "0 0 0.25rem 0",
                    }}
                  >
                    {testimonial.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Nunito Sans', sans-serif",
                      fontSize: "0.8rem",
                      color: "#c9b99a",
                      margin: 0,
                    }}
                  >
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          style={{
            textAlign: "center",
            padding: "2rem",
            backgroundColor: "rgba(248,244,237,0.05)",
            border: "1px solid rgba(201,185,154,0.2)",
          }}
        >
          <p
            style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: "0.95rem",
              color: "rgba(26,26,26,0.7)",
              marginBottom: "1.5rem",
            }}
          >
            Ready to write your own success story?
          </p>
          <button
            onClick={() => {
              const el = document.querySelector("#contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="ss-btn-primary"
          >
            Get in Touch
          </button>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 50,
            padding: "1rem",
          }}
          onClick={() => setSelectedVideo(null)}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "800px",
              backgroundColor: "#000",
              borderRadius: "8px",
              overflow: "hidden",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedVideo(null)}
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "#c9b99a",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 10,
              }}
            >
              <X size={20} style={{ color: "#c8d5c0" }} />
            </button>

            {/* Video */}
            <div
              style={{
                position: "relative",
                width: "100%",
                paddingBottom: "56.25%",
              }}
            >
              <iframe
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                src={testimonials.find((t) => t.id === selectedVideo)?.videoUrl}
                title="Client Testimonial"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
