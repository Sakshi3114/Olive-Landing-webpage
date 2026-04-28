import NutritionalClarity from "./NutritionalClarity";
import IngredientFiltering from "./IngredientFiltering";
import RealHealthOutcomes from "./RealhealthOutcomes";

export default function HealthBenefits() {
  return (
    <section className="w-full">
      {/* ── Dark green header band ── */}
      <div
        className="w-full px-8 py-25 relative overflow-hidden"
        style={{ background: "#2d4a1e" }}
      >
        {/* Subtle dot-grid texture */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left: headline */}
          <h2
            className="text-[2.8rem] leading-[1.1] font-bold text-white"
            style={{ fontFamily: "Fraunces, serif" }}
          >
            Health Benefits of Using Olive
          </h2>

          {/* Right: sub-copy + CTA */}
          <div className="flex flex-col gap-6">
            <p
              className="text-[#b8d4a8] text-base leading-relaxed"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              Olive proactively flags harmful ingredients and offers
              personalized recommendations, empowering you to make better
              choices for your family's health.
            </p>
            <div>
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-white text-[#1e3310] text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#f0f5ee] transition-colors"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Download for iOS
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Three stacked cards — overlap slightly out of the green band ── */}
      <div
        className="max-w-5xl mx-auto px-6 flex flex-col gap-4 relative z-10"
        style={{
          marginTop: -60,
        }} /* pulls cards up to overlap the green band */
      >
        <NutritionalClarity />
        <IngredientFiltering />
        <RealHealthOutcomes />
      </div>

      {/* Bottom spacing */}
      <div className="h-20" />
    </section>
  );
}
