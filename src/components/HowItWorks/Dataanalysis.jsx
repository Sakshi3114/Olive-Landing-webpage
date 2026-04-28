import seaSalt from "../../assets/sea-salt.webp";
import sparklingWater from "../../assets/sparkling-water.webp";
import spinach from "../../assets/spinach.jfif";
import bread from "../../assets/organic-bread.webp";
import larabar from "../../assets/larabar.webp";

const slides = [
  { id: 1, imageSrc: seaSalt, label: "Product A" },
  { id: 2, imageSrc: sparklingWater, label: "Product B" },
  { id: 3, imageSrc: spinach, label: "Product C" },
  { id: 4, imageSrc: bread, label: "Product D" },
  { id: 5, imageSrc: larabar, label: "Product E" },
];

const bgColors = ["#d4e8c2", "#c2d4e8", "#e8c2c2", "#d4c2e8", "#c2dde8"];

const allSlides = [...slides, ...slides, ...slides];

export default function DataAnalysis() {
  return (
    <div className="bg-[#eef3eb] rounded-3xl p-6 flex flex-col">
      <p
        className="text-sm font-semibold text-[#1e3310] mb-4"
        style={{ fontFamily: "DM Sans, sans-serif" }}
      >
        Data Analysis &amp; Validation
      </p>

      <div
        className="flex flex-col items-center justify-center mb-5"
        style={{ height: 235 }}
      >
        <div className="relative w-full overflow-hidden" style={{ height: 90 }}>
          <div
            className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(to right, #eef3eb, transparent)",
            }}
          />

          <div
            className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(to left, #eef3eb, transparent)",
            }}
          />

          <div
            className="marquee-track flex items-center"
            style={{ width: "max-content", paddingTop: 4 }}
          >
            {allSlides.map((item, i) => {
              const isFeature = i % 5 === 2;
              return (
                <div
                  key={i}
                  className="shrink-0 rounded-2xl overflow-hidden"
                  style={{
                    width: isFeature ? 90 : 72,
                    height: isFeature ? 90 : 72,
                    marginRight: 12,
                    background: bgColors[item.id % bgColors.length],
                    boxShadow: isFeature
                      ? "0 6px 20px rgba(45,74,30,0.18)"
                      : "none",
                    alignSelf: "center",
                    transition: "box-shadow 0.3s",
                  }}
                >
                  {item.imageSrc ? (
                    <img
                      src={item.imageSrc}
                      alt={item.label}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 24 24"
                        fill="#2d4a1e"
                        opacity="0.3"
                      >
                        <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8">
          <div className="flex items-center gap-2 bg-white border border-[#c8e0b4] rounded-full px-5 py-2.5 shadow-sm">
            <div className="w-5 h-5 rounded-full bg-[#2d4a1e] flex items-center justify-center shrink-0">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                <path
                  d="M20 6L9 17l-5-5"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span
              className="text-sm font-semibold text-[#1e3310]"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              Safe to consume
            </span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p
        className="text-xs text-[#4a6035] leading-relaxed"
        style={{ fontFamily: "DM Sans, sans-serif" }}
      >
        After scanning, our food scanner app compares product data with an
        extensive, up-to-date food database. Using expert nutritional
        guidelines, Olive filters out potentially dangerous ingredients so you
        never have to second guess
      </p>
    </div>
  );
}
