import avacado from "../../assets/avacado.png";

const checks = [
  "Empowers parents to feel more in control of their family's health.",
  "Delivers personalized suggestions for healthier food choices.",
  "Promotes long-term well-being through informed, balanced decisions.",
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

export default function RealHealthOutcomes() {
  return (
    <div
      className="bg-white rounded-3xl overflow-hidden flex flex-col md:flex-row"
      style={{ minHeight: 340 }}
    >
      {/* LEFT */}
      <div className="flex-1 p-8 flex flex-col justify-between">
        <h3
          className="text-2xl font-bold text-[#1e3310] mb-8"
          style={{ fontFamily: "Fraunces, serif" }}
        >
          Real Health Outcomes for Your Family
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

      {/* RIGHT — illustration */}
      <div
        className="md:w-105 flex items-center justify-center shrink-0 relative overflow-hidden"
        style={{ background: "#f5edd6", minHeight: 280 }}
      >
        <img
          src={avacado}
          alt="Avocado family illustration"
          className="w-full h-full object-cover"
        />

        {/* <div className="flex flex-col items-center justify-center gap-4 p-8 opacity-40">
          <div className="text-8xl select-none">🥑</div>
          <p
            className="text-sm text-[#2d4a1e] text-center"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            Place avocado family illustration here
          </p>
        </div> */}
      </div>
    </div>
  );
}
