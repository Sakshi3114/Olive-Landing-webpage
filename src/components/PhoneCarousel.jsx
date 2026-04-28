import { useState, useEffect, useRef } from "react";
import { Heart, Share2 } from "lucide-react";
import { products } from "../utils/products";

function ScoreRing({ score, color }) {
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  return (
    <svg width="52" height="52" viewBox="0 0 52 52">
      <circle
        cx="26"
        cy="26"
        r={radius}
        fill="none"
        stroke="#e5e7eb"
        strokeWidth="4"
      />
      <circle
        cx="26"
        cy="26"
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        transform="rotate(-90 26 26)"
        style={{ transition: "stroke-dashoffset 0.8s ease" }}
      />
      <text
        x="26"
        y="31"
        textAnchor="middle"
        fontSize="11"
        fontWeight="700"
        fill={color}
      >
        {score}
      </text>
    </svg>
  );
}

function ProductImagePlaceholder({ index }) {
  const colors = ["#d4e8c2", "#c2d4e8", "#e8d4c2", "#d4c2e8", "#c2e8d4"];
  return (
    <div
      className="w-full h-full flex items-center justify-center rounded-lg"
      style={{ backgroundColor: colors[index % colors.length] }}
    >
      <div className="text-center opacity-40">
        <div className="w-10 h-10 mx-auto mb-1 rounded border-2 border-current flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
          </svg>
        </div>
        <p
          className="text-xs font-medium"
          style={{ fontFamily: "DM Sans, sans-serif" }}
        >
          IMG
        </p>
      </div>
    </div>
  );
}

export default function PhoneCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [displayIndex, setDisplayIndex] = useState(0);
  const intervalRef = useRef(null);

  // How many items to show in the strip
  const visibleCount = 5;
  // Build a circular window of products around activeIndex
  const getWindow = (center) => {
    const result = [];
    const half = Math.floor(visibleCount / 2);
    for (let i = -half; i <= half; i++) {
      const idx =
        (((center + i) % products.length) + products.length) % products.length;
      result.push({ ...products[idx], windowOffset: i });
    }
    return result;
  };

  const [windowItems, setWindowItems] = useState(getWindow(0));
  const [slideDir, setSlideDir] = useState(0); // -1 left, 0 none

  const advance = () => {
    if (animating) return;
    setAnimating(true);
    setSlideDir(-1);

    setTimeout(() => {
      const next = (activeIndex + 1) % products.length;
      setActiveIndex(next);
      setDisplayIndex(next);
      setWindowItems(getWindow(next));
      setSlideDir(0);
      setAnimating(false);
    }, 600);
  };

  useEffect(() => {
    intervalRef.current = setInterval(advance, 3000);
    return () => clearInterval(intervalRef.current);
  }, [activeIndex, animating]);

  const currentProduct = products[displayIndex];

  return (
    <div className="relative w-full flex justify-center">
      {/* Phone shell */}
      <div className="relative phone-glow" style={{ width: 280, height: 560 }}>
        {/* Outer phone border */}
        <div
          className="absolute inset-0 rounded-[40px] bg-white"
          style={{
            boxShadow: "0 0 0 2px #d1d5db, 0 40px 80px rgba(0,0,0,0.18)",
          }}
        />

        {/* Dynamic island */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-10" />

        {/* Screen content */}
        <div className="absolute inset-0.5 rounded-[38px] overflow-hidden bg-white flex flex-col">
          {/* ---- Product strip carousel ---- */}
          <div className="relative h-32.5 bg-[#f8faf6] shrink-0 overflow-hidden">
            <CarouselStrip
              windowItems={windowItems}
              slideDir={slideDir}
              animating={animating}
              activeProduct={currentProduct}
            />
          </div>

          {/* ---- Product details card ---- */}
          <div className="flex-1 overflow-y-auto px-4 pt-3 pb-4">
            {/* Product info */}
            <div className="flex gap-3 items-start mb-3">
              {/* Thumbnail */}
              <div className="w-12 h-14 rounded-lg overflow-hidden shrink-0 bg-[#f0f5ee]">
                {currentProduct.imageSrc ? (
                  <img
                    src={currentProduct.imageSrc}
                    alt={currentProduct.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <ProductImagePlaceholder index={displayIndex} />
                )}
              </div>
              {/* Text */}
              <div className="flex-1 min-w-0">
                <p
                  className="text-[10px] font-bold text-[#1e3310] leading-tight line-clamp-2"
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                >
                  {currentProduct.name}
                </p>
                <p className="text-[9px] text-gray-400 mt-0.5">
                  {currentProduct.brand}
                </p>
              </div>
            </div>

            {/* Score row */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <ScoreRing
                  score={currentProduct.score}
                  color={currentProduct.ringColor}
                />
                <div>
                  <p
                    className="text-[10px] font-bold"
                    style={{
                      color: currentProduct.scoreColor,
                      fontFamily: "DM Sans, sans-serif",
                    }}
                  >
                    {currentProduct.scoreLabel}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                  <Heart size={11} className="text-gray-400" />
                </button>
                <button className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                  <Share2 size={11} className="text-gray-400" />
                </button>
              </div>
            </div>

            {/* Oliver says */}
            <div className="bg-[#f8faf6] rounded-xl p-3">
              <div className="flex items-center gap-1.5 mb-1.5">
                {/* Mini olive icon */}
                <div className="w-5 h-5 bg-[#7cb518] rounded-full flex items-center justify-center">
                  <span className="text-white text-[8px] font-bold">O</span>
                </div>
                <p className="text-[10px] font-bold text-[#2d4a1e]">
                  Oliver Says:
                </p>
              </div>
              <p className="text-[9px] text-gray-500 leading-relaxed line-clamp-5">
                "{currentProduct.oliveSays}"
              </p>
            </div>

            {/* Breakdown label */}
            <p className="text-[10px] font-bold text-[#2d4a1e] mt-3">
              Breakdown
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---- Strip of product images ---- */
function CarouselStrip({ windowItems, slideDir, animating }) {
  const itemW = 72; // px per card (including gap)
  const gap = 8;

  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
      <div
        className="flex items-center"
        style={{
          gap: gap,
          transform:
            animating && slideDir === -1
              ? `translateX(-${itemW + gap}px)`
              : "translateX(0)",
          transition: animating
            ? "transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)"
            : "none",
        }}
      >
        {windowItems.map((item, i) => {
          const isCenter = item.windowOffset === 0;
          return (
            <CarouselCard
              key={`${item.id}-${i}`}
              item={item}
              isCenter={isCenter}
            />
          );
        })}
      </div>
    </div>
  );
}

function CarouselCard({ item, isCenter }) {
  const colors = ["#d4e8c2", "#c2d4e8", "#e8d4c2", "#d4c2e8", "#c2e8d4"];

  return (
    <div
      className="shrink-0 rounded-2xl overflow-hidden relative"
      style={{
        width: isCenter ? 90 : 64,
        height: isCenter ? 110 : 80,
        transition: "all 0.5s cubic-bezier(0.4,0,0.2,1)",
        boxShadow: isCenter
          ? "0 8px 24px rgba(45,74,30,0.18)"
          : "0 2px 8px rgba(0,0,0,0.08)",
        opacity: isCenter ? 1 : 0.6,
        backgroundColor: colors[item.id % colors.length],
        zIndex: isCenter ? 2 : 1,
      }}
    >
      {item.imageSrc ? (
        <img
          src={item.imageSrc}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center opacity-40">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#2d4a1e">
            <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
          </svg>
        </div>
      )}
    </div>
  );
}
