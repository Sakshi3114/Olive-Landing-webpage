import heroOne from "../assets/homepage.jpg";
import heroTwo from "../assets/homepage2.jpg";
import heroThree from "../assets/homepage3.jpg";

import { useEffect, useState } from "react";

const images = [heroOne, heroTwo, heroThree];

export default function FamilyCTASection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full px-6 py-20">
      <div className="mx-auto" style={{ maxWidth: 520 }}>
        <div
          className="relative bg-[#396f3f] rounded-[34px]"
          style={{ overflow: "hidden", minHeight: 680 }}
        >
          {/* ── IMAGE ZONE: top ~45% of the card ── */}
          <div className="relative" style={{ height: 340 }}>
            {/* Slides */}
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt="Healthy grocery shopping"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  active === idx ? "opacity-100" : "opacity-0"
                }`}
                style={{ objectPosition: "center top" }}
              />
            ))}

            {/* Dark overlay on the image */}
            <div
              className="absolute inset-0"
              style={{ background: "rgba(0,0,0,0.35)", zIndex: 1 }}
            />

            {/* ── Convex-UP arc: green ellipse positioned so its TOP arc
                cuts upward into the image from below.
                The ellipse center is BELOW the image bottom edge so only
                the top portion of the ellipse is visible — an arch curving up. ── */}
            <div
              className="absolute left-1/2 -translate-x-1/2"
              style={{
                top: "80%" /* start from within the image */,
                width: "160%",
                height: 500,
                background: "#396f3f",
                borderRadius: "50%",
                zIndex: 2,
              }}
            />
          </div>

          {/* ── SLIDE DOTS ── */}
          <div
            className="relative flex justify-center gap-2"
            style={{ zIndex: 3, marginTop: -8, paddingBottom: 8 }}
          >
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActive(idx)}
                aria-label={`Slide ${idx + 1}`}
                style={{
                  height: 8,
                  width: active === idx ? 22 : 8,
                  borderRadius: 99,
                  background:
                    active === idx ? "white" : "rgba(255,255,255,0.4)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s",
                  padding: 0,
                }}
              />
            ))}
          </div>

          {/* ── TEXT + CTA ── */}
          <div
            className="relative text-center"
            style={{ zIndex: 3, padding: "16px 32px 52px" }}
          >
            <h2
              className="text-white font-bold"
              style={{
                fontFamily: "Fraunces, serif",
                fontSize: "2.4rem",
                lineHeight: 1.12,
                marginBottom: 28,
              }}
            >
              Protect Your Family
              <br />
              From Hidden Toxins
            </h2>

            <button
              className="bg-white hover:scale-[1.02] transition-transform"
              style={{
                color: "#396f3f",
                fontFamily: "DM Sans, sans-serif",
                fontWeight: 600,
                fontSize: "0.95rem",
                padding: "13px 32px",
                borderRadius: 999,
                border: "none",
                cursor: "pointer",
                boxShadow: "0 2px 12px rgba(0,0,0,0.12)",
              }}
            >
              Sign up for Olive today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
