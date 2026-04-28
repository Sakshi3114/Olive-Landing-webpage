const safeIngredients = [
  "High Fibre",
  "No MSG",
  "Cholesterol-Free",
  "Non-GMO",
  "Rich in Vitamins",
  "Gluten-Free",
  "TBHQ Free",
  "Sodium Nitrite Free",
  "Sterol-Free",
];

const harmfulIngredients = [
  "Artificial Colors",
  "Sodium Benzoate",
  "Palm Oil",
  "Saccharin",
  "Sodium B",
  "Aspartame",
  "Potassium Bromate",
  "MSG",
  "Carrageenan",
  "BPA",
];

const rows = [
  [
    { label: "High Fibre", safe: true },
    { label: "No MSG", safe: true },
    { label: "Rich in Vitamins", safe: true },
  ],
  [
    { label: "Cholesterol-Free", safe: true },
    { label: "Non-GMO", safe: true },
  ],
  [
    { label: "Gluten-Free", safe: true },
    { label: "Sodium Nitrite", safe: false },
    { label: "TBHQ", safe: false },
  ],
  [
    { label: "Sterol-Free", safe: true },
    { label: "Artificial Colors", safe: false },
    { label: "Sodium B", safe: false },
  ],
  [
    { label: "Saccharin", safe: false },
    { label: "Palm Oil", safe: false },
  ],
  [
    { label: "Aspartame", safe: false },
    { label: "Potassium Bromate", safe: false },
    { label: "MSG", safe: false },
  ],
];

const strips = [
  {
    tags: [
      { label: "No MSG", safe: true },
      { label: "High Fibre", safe: true },
      { label: "Artificial Colors", safe: false },
      { label: "Cholesterol-Free", safe: true },
      { label: "Sodium Nitrite", safe: false },
      { label: "Non-GMO", safe: true },
      { label: "No MSG", safe: true },
      { label: "High Fibre", safe: true },
      { label: "Artificial Colors", safe: false },
      { label: "Cholesterol-Free", safe: true },
    ],
    speed: 18,
    offsetY: 0,
    offsetX: 0,
  },
  {
    tags: [
      { label: "Gluten-Free", safe: true },
      { label: "Palm Oil", safe: false },
      { label: "TBHQ", safe: false },
      { label: "Rich in Vitamins", safe: true },
      { label: "Saccharin", safe: false },
      { label: "Gluten-Free", safe: true },
      { label: "Palm Oil", safe: false },
      { label: "TBHQ", safe: false },
    ],
    speed: 22,
    offsetY: 44,
    offsetX: -30,
  },
  {
    tags: [
      { label: "Aspartame", safe: false },
      { label: "Sterol-Free", safe: true },
      { label: "Potassium Bromate", safe: false },
      { label: "BPA Free", safe: true },
      { label: "Sodium Benzoate", safe: false },
      { label: "Aspartame", safe: false },
      { label: "Sterol-Free", safe: true },
      { label: "Potassium Bromate", safe: false },
    ],
    speed: 16,
    offsetY: 88,
    offsetX: 20,
  },
  {
    tags: [
      { label: "Carrageenan", safe: false },
      { label: "Non-GMO", safe: true },
      { label: "MSG Free", safe: true },
      { label: "Sodium B", safe: false },
      { label: "Carrageenan", safe: false },
      { label: "Non-GMO", safe: true },
      { label: "MSG Free", safe: true },
      { label: "Sodium B", safe: false },
    ],
    speed: 20,
    offsetY: 132,
    offsetX: -10,
  },
  {
    tags: [
      { label: "Vitamin Rich", safe: true },
      { label: "BHT", safe: false },
      { label: "High Fibre", safe: true },
      { label: "Artificial Dye", safe: false },
      { label: "Vitamin Rich", safe: true },
      { label: "BHT", safe: false },
    ],
    speed: 25,
    offsetY: 176,
    offsetX: 40,
  },
];

function Tag({ label, safe }) {
  return (
    <div
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium shrink-0"
      style={{
        background: "white",
        color: "#1e3310",
        fontFamily: "DM Sans, sans-serif",
        boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
        whiteSpace: "nowrap",
      }}
    >
      {safe ? (
        <span className="w-3.5 h-3.5 rounded-full bg-[#1e3310] flex items-center justify-center shrink-0">
          <svg width="8" height="8" viewBox="0 0 12 12" fill="none">
            <path
              d="M2 6l3 3 5-5"
              stroke="white"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      ) : (
        <span className="w-3.5 h-3.5 rounded-full bg-[#e55] flex items-center justify-center shrink-0">
          <svg width="7" height="7" viewBox="0 0 12 12" fill="none">
            <path
              d="M3 3l6 6M9 3l-6 6"
              stroke="white"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </span>
      )}
      {label}
    </div>
  );
}

const checks = [
  "Olive flags harmful additives and controversial ingredients before they become mainstream concerns.",
  "Keeps you ahead of potential food safety concerns.",
  "Gives busy parents the confidence to make safer food choices every time.",
];

function CheckIcon() {
  return (
    <div
      className="shrink-0 mt-0.5 rounded-full bg-[#1e3310] flex items-center justify-center"
      style={{ width: 18, height: 18 }}
    >
      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
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

export default function IngredientFiltering() {
  return (
    <div
      className="bg-white rounded-3xl overflow-hidden flex flex-col md:flex-row"
      style={{ minHeight: 380 }}
    >
      {/* LEFT */}
      <div className="flex-1 p-8 flex flex-col justify-between">
        <h3
          className="text-2xl font-bold text-[#1e3310] mb-8"
          style={{ fontFamily: "Fraunces, serif" }}
        >
          Proactive Ingredient Filtering
        </h3>
        <ul className="space-y-4 mt-auto">
          {checks.map((text, i) => (
            <li key={i} className="flex gap-3 items-start">
              <CheckIcon />
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

      {/* RIGHT — diagonal scrolling marquee */}
      <div
        className="md:w-105 relative overflow-hidden shrink-0"
        style={{ background: "#fce8ee", minHeight: 300 }}
      >
        {/* Rotate the whole container ~-20deg so tags flow diagonally */}
        <div
          className="absolute"
          style={{
            top: 0,
            left: -60,
            right: -60,
            bottom: -60,
            transform: "rotate(-20deg)",
          }}
        >
          {strips.map((strip, si) => {
            // Duplicate tags for seamless loop
            const allTags = [...strip.tags, ...strip.tags];
            // Total width: rough estimate each tag ~130px + 8px gap
            const totalW = strip.tags.length * 138;
            return (
              <div
                key={si}
                className="absolute flex items-center"
                style={{
                  top: strip.offsetY,
                  left: 0,
                  gap: 8,
                }}
              >
                <div
                  className="flex items-center"
                  style={{
                    gap: 8,
                    animation: `diagMarquee${si} ${strip.speed}s linear infinite`,
                    animationDelay: `${si * -3}s`,
                  }}
                >
                  {allTags.map((tag, ti) => (
                    <Tag key={ti} label={tag.label} safe={tag.safe} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Keyframes injected inline via style tag */}
        <style>{`
            ${strips
              .map((strip, si) => {
                const totalW = strip.tags.length * 138;
                return `
                @keyframes diagMarquee${si} {
                  0%   { transform: translateX(0); }
                  100% { transform: translateX(-${totalW}px); }
                }
              `;
              })
              .join("\n")}
          `}</style>
      </div>
    </div>
  );
}
