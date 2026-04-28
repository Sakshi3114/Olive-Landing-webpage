import spinach from "../../assets/spinach.jfif";
import bread from "../../assets/organic-bread.webp";
import larabar from "../../assets/larabar.webp";

import { useEffect, useRef, useState } from "react";

const fanImages = [
  { id: 1, imageSrc: spinach },
  { id: 2, imageSrc: bread },
  { id: 3, imageSrc: larabar },
];

const fgColors = ["#b8d4c8", "#e8c4b8", "#c8d4e8"];

function useCountUp(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function FanImage({ item, style }) {
  const bg = fgColors[item.id % fgColors.length];
  return (
    <div
      className="absolute rounded-2xl overflow-hidden"
      style={{ background: bg, ...style }}
    >
      {item.imageSrc ? (
        <img
          src={item.imageSrc}
          alt=""
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="#2d4a1e"
            opacity="0.25"
          >
            <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
          </svg>
        </div>
      )}
    </div>
  );
}

const checks = [
  "Olive breaks down every ingredient into clear, actionable information.",
  "Olive scores products out of 100 based on additives, seedoils, processing level, and detected toxins.",
  "Our ranking system is designed by registered holistic health experts, ensuring you and your family make informed decisions and improve health outcomes.",
];

export default function NutritionalClarity() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const score = useCountUp(96, 1800, visible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-white rounded-3xl overflow-hidden flex flex-col md:flex-row"
      style={{ minHeight: 420 }}
    >
      <div className="flex-1 p-8 flex flex-col justify-between">
        <h3
          className="text-2xl font-bold text-[#1e3310] mb-8"
          style={{ fontFamily: "Fraunces, serif" }}
        >
          Achieve Nutritional Clarity
        </h3>
        <ul className="space-y-5 mt-auto">
          {checks.map((text, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span className="shrink-0 mt-0.5">
                <CheckIcon />
              </span>
              <p
                className="text-sm text-[#3a4a30] leading-relaxed"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                {text}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="md:w-105 relative flex flex-col"
        style={{ background: "#e8f0e4" }}
      >
        <div className="relative flex-1" style={{ minHeight: 220 }}>
          <FanImage
            item={fanImages[0]}
            style={{
              width: 120,
              height: 155,
              bottom: 0,
              left: "12%",
              transform: "rotate(-8deg)",
              zIndex: 1,
              boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
            }}
          />

          <FanImage
            item={fanImages[1]}
            style={{
              width: 140,
              height: 180,
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 3,
              boxShadow: "0 12px 32px rgba(0,0,0,0.18)",
            }}
          />

          <FanImage
            item={fanImages[2]}
            style={{
              width: 120,
              height: 155,
              bottom: 0,
              right: "12%",
              transform: "rotate(8deg)",
              zIndex: 2,
              boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
            }}
          />
        </div>

        <div className="relative z-10 mx-4 mb-4 bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-12 h-12 rounded-xl overflow-hidden shrink-0"
              style={{ background: fgColors[1] }}
            >
              {fanImages[1].imageSrc ? (
                <img
                  src={fanImages[1].imageSrc}
                  alt=""
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="#2d4a1e"
                    opacity="0.3"
                  >
                    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                  </svg>
                </div>
              )}
            </div>
            <div>
              <p
                className="text-sm font-bold text-[#1e3310]"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Organic-Bread
              </p>
              <div className="flex items-baseline gap-1.5 mt-0.5">
                {/* Animated counter */}
                <span
                  className="text-lg font-black text-[#1e3310]"
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                >
                  {score}/100
                </span>
                <span className="text-xs font-semibold text-[#22c55e]">
                  Excellent
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-xl p-3" style={{ background: "#f0f7ee" }}>
              <div className="flex items-center gap-1.5 mb-2">
                <CheckIcon size={14} />
                <span className="text-xs font-semibold text-[#1e3310]">
                  Positives
                </span>
              </div>
              {[60, 80, 50, 70].map((w, i) => (
                <div
                  key={i}
                  className="h-2 rounded-full mb-1.5 last:mb-0"
                  style={{ width: `${w}%`, background: "#c8e6b8" }}
                />
              ))}
            </div>
            {/* Negatives */}
            <div className="rounded-xl p-3" style={{ background: "#fdf0f0" }}>
              <div className="flex items-center gap-1.5 mb-2">
                <XIcon size={14} />
                <span className="text-xs font-semibold text-[#1e3310]">
                  Negatives
                </span>
              </div>
              {[55, 75, 40].map((w, i) => (
                <div
                  key={i}
                  className="h-2 rounded-full mb-1.5 last:mb-0"
                  style={{ width: `${w}%`, background: "#f5c8c8" }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CheckIcon({ size = 18 }) {
  return (
    <div
      className="shrink-0 rounded-full bg-[#1e3310] flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg
        width={size * 0.6}
        height={size * 0.6}
        viewBox="0 0 12 12"
        fill="none"
      >
        <path
          d="M2 6l3 3 5-5"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function XIcon({ size = 18 }) {
  return (
    <div
      className="shrink-0 rounded-full bg-[#e55] flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg
        width={size * 0.55}
        height={size * 0.55}
        viewBox="0 0 12 12"
        fill="none"
      >
        <path
          d="M3 3l6 6M9 3l-6 6"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
