import seaSalt from "../../assets/sea-salt.webp";
import sparklingWater from "../../assets/sparkling-water.webp";
import spinach from "../../assets/spinach.jfif";

const foregroundImages = [
  { id: 1, imageSrc: seaSalt }, // left image  → replace with your path
  { id: 2, imageSrc: sparklingWater }, // center image (taller, on top)
  { id: 3, imageSrc: spinach }, // right image
];

const backdropItems = [
  "Stuffed Bell Peppers with Rice",
  "Organic Bread Loaf",
  "Chole (Chickpea Curry)",
  "Almond Milk Unsweetened",
  "Greek Yogurt Plain",
  "Veggie Stir Fry Mix",
  "Brown Rice Cakes",
  "Lentil and Spinach Soup",
];

const fgColors = ["#c2d4e8", "#e8c2c2", "#c8e6c9"];

// Duplicate for seamless infinite scroll
const allBackdrop = [...backdropItems, ...backdropItems];

function ForegroundImage({ item, style }) {
  const bg = fgColors[item.id % fgColors.length];
  return (
    <div
      className="rounded-2xl overflow-hidden shrink-0"
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
            opacity="0.3"
          >
            <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
          </svg>
        </div>
      )}
    </div>
  );
}

export default function ActionableInsights() {
  return (
    <div className="bg-[#eef3eb] rounded-3xl p-6 flex flex-col">
      <p
        className="text-sm font-semibold text-[#1e3310] mb-4"
        style={{ fontFamily: "DM Sans, sans-serif" }}
      >
        Actionable Insights &amp; Recommendations
      </p>

      <div
        className="relative rounded-2xl overflow-hidden mb-5 flex items-center justify-center"
        style={{ height: 235 }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-0 left-0 right-0 h-10 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(to bottom, #eef3eb, transparent)",
            }}
          />

          <div
            className="absolute bottom-0 left-0 right-0 h-10 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(to top, #eef3eb, transparent)",
            }}
          />

          {/* Scrolling pill track */}
          <div
            className="backdrop-scroll-track absolute left-0 right-0"
            style={{ top: 0 }}
          >
            {allBackdrop.map((label, i) => (
              <div
                key={i}
                className="mx-3 mb-1.5 bg-white rounded-xl px-3 py-1.5 flex items-center"
                style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}
              >
                <span
                  className="text-[11px] text-[#6b8c5a] truncate"
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          className="relative z-20 flex items-end justify-center"
          style={{ gap: 0 }}
        >
          <ForegroundImage
            item={foregroundImages[0]}
            style={{
              width: 90,
              height: 120,
              transform: "rotate(-6deg) translateX(16px)",
              zIndex: 1,
              boxShadow: "0 8px 24px rgba(0,0,0,0.14)",
            }}
          />

          <ForegroundImage
            item={foregroundImages[1]}
            style={{
              width: 110,
              height: 148,
              zIndex: 3,
              boxShadow: "0 12px 32px rgba(0,0,0,0.2)",
            }}
          />

          <ForegroundImage
            item={foregroundImages[2]}
            style={{
              width: 90,
              height: 120,
              transform: "rotate(6deg) translateX(-16px)",
              zIndex: 2,
              boxShadow: "0 8px 24px rgba(0,0,0,0.14)",
            }}
          />
        </div>
      </div>

      {/* Description */}
      <p
        className="text-xs text-[#4a6035] leading-relaxed"
        style={{ fontFamily: "DM Sans, sans-serif" }}
      >
        Once analyzed, Olive provides tailored insights and healthier product
        suggestions. Olive proactively flags harmful ingredients and offers
        personalized recommendations, empowering you to make better choices for
        your family's health &amp; nutrition.
      </p>
    </div>
  );
}
