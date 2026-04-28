import { Apple } from "lucide-react";
import { rows } from "../utils/products";

function CheckIcon() {
  return (
    <div className="w-8 h-8 rounded-full bg-[#b7bf33] flex items-center justify-center">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#2f5d34"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 6L9 17l-5-5" />
      </svg>
    </div>
  );
}

function CrossIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ff1d1d"
      strokeWidth="4"
      strokeLinecap="round"
    >
      <path d="M6 6L18 18" />
      <path d="M18 6L6 18" />
    </svg>
  );
}

function Value({ yes }) {
  return (
    <div className="flex justify-center">
      {yes ? <CheckIcon /> : <CrossIcon />}
    </div>
  );
}

function AppIcon({ type }) {
  if (type === "olive") {
    return (
      <div className="w-10 h-10 rounded-full bg-[#24351d] flex items-center justify-center text-xl">
        🫒
      </div>
    );
  }

  if (type === "yuka") {
    return (
      <div className="w-10 h-10 rounded-full flex items-center justify-center text-3xl">
        🥕
      </div>
    );
  }

  return (
    <div className="w-10 h-10 rounded-full border-2 border-[#dfe8db] text-[#dfe8db] flex items-center justify-center font-bold text-lg">
      ß
    </div>
  );
}

export default function CompareSection() {
  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-6xl mx-auto bg-[#396f3f] rounded-3xl px-8 md:px-12 py-12 md:py-16">
        <div className="text-center">
          <h2
            className="text-white text-4xl md:text-6xl leading-tight font-medium"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            Olive Food Scanner App
            <br />
            vs. The Rest
          </h2>

          <button className="mt-8 inline-flex items-center gap-3 bg-white text-[#396f3f] px-7 py-4 rounded-full text-sm font-semibold shadow-sm hover:scale-[1.02] transition">
            <Apple size={18} />
            Download for iOS
          </button>
        </div>

        <div className="mt-14 overflow-x-auto">
          <div className="min-w-190">
            <div className="grid grid-cols-[2.2fr_1fr_1fr_1fr] items-center pb-8">
              <div />
              <div className="flex justify-center">
                <AppIcon type="olive" />
              </div>
              <div className="flex justify-center">
                <AppIcon type="yuka" />
              </div>
              <div className="flex justify-center">
                <AppIcon type="other" />
              </div>
            </div>

            {/* Rows */}
            {rows.map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-[2.2fr_1fr_1fr_1fr] items-center py-8 ${
                  i !== rows.length - 1
                    ? "border-b border-[rgba(255,255,255,0.18)]"
                    : ""
                }`}
              >
                <div
                  className="text-white text-sm md:text-base pr-4"
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                >
                  {row.label}
                </div>

                <Value yes={row.olive} />
                <Value yes={row.yuka} />
                <Value yes={row.thinkDirty} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
