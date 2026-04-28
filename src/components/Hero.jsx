import PhoneCarousel from "./PhoneCarousel";

const avatarColors = ["#c8e6c9", "#b3d4f5", "#ffd5b8", "#e1bee7"];

function TrustAvatars() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex -space-x-2">
        {avatarColors.map((color, i) => (
          <div
            key={i}
            className="w-8 h-8 rounded-full border-2 border-[#f0f5ee] overflow-hidden"
            style={{ backgroundColor: color }}
          >
            <svg
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <circle cx="16" cy="13" r="5" fill="rgba(0,0,0,0.2)" />
              <ellipse cx="16" cy="26" rx="8" ry="6" fill="rgba(0,0,0,0.15)" />
            </svg>
          </div>
        ))}
      </div>
      <p
        className="text-sm text-[#4a6035]"
        style={{ fontFamily: "DM Sans, sans-serif" }}
      >
        Trusted by thousands of healthy families
      </p>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="w-full max-w-6xl mx-auto px-8 pt-6 pb-16">
      <div className="flex justify-center mb-8">
        <TrustAvatars />
      </div>
      <div className="text-center mb-6">
        <h1
          className="text-[3.5rem] leading-[1.1] font-bold text-[#1e3310] mb-5"
          style={{ fontFamily: "Fraunces, serif" }}
        >
          The Safest Way to
          <br />
          Shop for Groceries
        </h1>
        <p
          className="text-[#4a6035] text-base max-w-md mx-auto leading-relaxed"
          style={{ fontFamily: "DM Sans, sans-serif" }}
        >
          Use the Olive Food Scanner App to Instantly Eliminate Harmful
          Ingredients from Your Family's Diet and Get Expert-Backed Food
          Insights
        </p>
      </div>

      <div className="flex justify-center mb-12">
        <a
          href="#"
          className="inline-flex items-center gap-2.5 bg-[#1e3310] text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-[#2d4a1e] transition-colors"
          style={{ fontFamily: "DM Sans, sans-serif" }}
        >
          {/* Apple icon */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          Download for iOS
        </a>
      </div>
      <div className="flex justify-center">
        <PhoneCarousel />
      </div>
    </section>
  );
}
