import { Check } from "lucide-react";

const monthlyFeatures = [
  "Unlimited Scans",
  "Unlimited Database Searches",
  "Comprehensive Lab-Testing Data",
];

const yearlyFeatures = [
  "Everything in monthly plan",
  "Get 7 months free",
  "60% Savings",
];

function Feature({ text, dark = false }) {
  return (
    <div className="flex items-center gap-4">
      <div
        className={`w-7 h-7 rounded-full flex items-center justify-center ${
          dark ? "bg-white text-[#396f3f]" : "bg-[#396f3f] text-white"
        }`}
      >
        <Check size={16} strokeWidth={3} />
      </div>

      <span
        className={`text-[18px] ${dark ? "text-white" : "text-[#09111a]"}`}
        style={{ fontFamily: "DM Sans, sans-serif" }}
      >
        {text}
      </span>
    </div>
  );
}

function SubscribeButton({ dark = false }) {
  return (
    <button
      className={`w-full rounded-full py-5 text-xl font-medium transition hover:scale-[1.02] ${
        dark ? "bg-white text-[#1e3310]" : "bg-[#1f3b08] text-white shadow-md"
      }`}
      style={{ fontFamily: "DM Sans, sans-serif" }}
    >
      Subscribe
    </button>
  );
}

function PlanCard({
  title,
  price,
  oldPrice,
  suffix,
  features,
  dark = false,
  floatingIcon = false,
}) {
  return (
    <div
      className={`relative rounded-[34px] p-10 ${
        dark ? "bg-[#396f3f]" : "bg-[#eef3ee]"
      }`}
    >
      {/* floating olive icon */}
      {floatingIcon && (
        <div className="absolute -top-16 -left-8 text-[72px]">🥑</div>
      )}

      {/* title */}
      <p
        className={`text-[20px] mb-2 ${dark ? "text-white" : "text-[#09111a]"}`}
        style={{ fontFamily: "DM Sans, sans-serif" }}
      >
        {title}
      </p>

      {/* pricing */}
      <div className="flex flex-wrap items-end gap-3 mb-10">
        <span
          className={`text-[64px] leading-none font-medium ${
            dark ? "text-white" : "text-[#09111a]"
          }`}
          style={{ fontFamily: "DM Sans, sans-serif" }}
        >
          {price}
        </span>

        {oldPrice && (
          <span
            className="text-[28px] line-through text-white/55"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            {oldPrice}
          </span>
        )}

        <span
          className={`text-[28px] mb-2 ${
            dark ? "text-white/80" : "text-[#09111a]/70"
          }`}
          style={{ fontFamily: "DM Sans, sans-serif" }}
        >
          {suffix}
        </span>
      </div>

      <div className="space-y-7 mb-12">
        {features.map((item) => (
          <Feature key={item} text={item} dark={dark} />
        ))}
      </div>

      <SubscribeButton dark={dark} />
    </div>
  );
}

export default function PricingSection() {
  return (
    <section className="relative overflow-hidden bg-[#f5f5f3] py-24 px-6">
      <div className="absolute right-45 top-1/2 -translate-y-1/2 opacity-90 pointer-events-none">
        <FlowerBlob />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2
            className="text-[56px] md:text-[72px] leading-[1.12] text-[#1e3310]"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            Healthy Choices
            <br />
            Honest Pricing
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-end max-w-5xl mx-auto">
          <PlanCard
            title="Monthly"
            price="$14.99"
            suffix="/monthly"
            features={monthlyFeatures}
            floatingIcon
          />

          <PlanCard
            title="Yearly"
            price="$69.99"
            oldPrice="$179.88"
            suffix="/yearly"
            features={yearlyFeatures}
            dark
          />
        </div>
      </div>
    </section>
  );
}

function FlowerBlob() {
  return (
    <svg
      width="560"
      height="560"
      viewBox="0 0 560 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="#e3ebe2">
        <ellipse cx="280" cy="70" rx="58" ry="140" />
        <ellipse
          cx="430"
          cy="135"
          rx="58"
          ry="140"
          transform="rotate(45 430 135)"
        />
        <ellipse
          cx="495"
          cy="280"
          rx="58"
          ry="140"
          transform="rotate(90 495 280)"
        />
        <ellipse
          cx="430"
          cy="425"
          rx="58"
          ry="140"
          transform="rotate(135 430 425)"
        />
        <ellipse cx="280" cy="490" rx="58" ry="140" />
        <ellipse
          cx="135"
          cy="425"
          rx="58"
          ry="140"
          transform="rotate(45 135 425)"
        />
        <ellipse
          cx="70"
          cy="280"
          rx="58"
          ry="140"
          transform="rotate(90 70 280)"
        />
        <ellipse
          cx="135"
          cy="135"
          rx="58"
          ry="140"
          transform="rotate(135 135 135)"
        />
      </g>
    </svg>
  );
}
