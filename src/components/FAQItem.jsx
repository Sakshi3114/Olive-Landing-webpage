// FAQ.jsx
import { useState } from "react";
import { faqs } from "../utils/products";

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div
      className="rounded-2xl border cursor-pointer transition-all duration-200"
      style={{
        borderColor: isOpen ? "#d4e3c4" : "#e8e8e0",
        background: isOpen ? "#f8faf4" : "white",
      }}
      onClick={onToggle}
    >
      <div className="flex items-center justify-between px-6 py-5 gap-4">
        <p
          className="text-sm font-medium text-[#1e3310] leading-snug"
          style={{ fontFamily: "DM Sans, sans-serif" }}
        >
          {faq.question}
        </p>
        \
        <div
          className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-200"
          style={{ background: "#1e3310" }}
        >
          {isOpen ? (
            <svg width="12" height="2" viewBox="0 0 12 2" fill="none">
              <rect x="0" y="0" width="12" height="2" rx="1" fill="white" />
            </svg>
          ) : (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <rect x="5" y="0" width="2" height="12" rx="1" fill="white" />
              <rect x="0" y="5" width="12" height="2" rx="1" fill="white" />
            </svg>
          )}
        </div>
      </div>

      <div
        style={{
          maxHeight: isOpen ? 300 : 0,
          overflow: "hidden",
          transition: "max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <p
          className="px-6 pb-5 text-sm text-[#4a6035] leading-relaxed"
          style={{ fontFamily: "DM Sans, sans-serif" }}
        >
          {faq.answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="w-full px-6 py-20">
      <div
        className="mx-auto rounded-3xl px-8 py-14"
        style={{ maxWidth: 820, background: "#faf8f0" }}
      >
        {/* ── Header ── */}
        <div className="flex items-start justify-center gap-3 mb-8">
          <h2
            className="text-[2rem] font-bold text-[#1e3310] text-center leading-tight"
            style={{ fontFamily: "Fraunces, serif" }}
          >
            Frequently Asked
            <br />
            Questions by Parents
          </h2>
          <div className="text-4xl select-none mt-1" aria-hidden>
            🫒
          </div>
        </div>

        <div className="flex justify-center mb-10">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity"
            style={{
              background: "#1e3310",
              fontFamily: "DM Sans, sans-serif",
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="white">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download for iOS
          </a>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
