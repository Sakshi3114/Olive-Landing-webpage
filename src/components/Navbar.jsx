import { ChevronDown } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full px-8 py-4 flex items-center justify-between bg-[#f0f5ee]">
      {/* Logo */}
      <div className="flex items-center gap-1.5">
        <div className="w-8 h-8 relative">
          {/* Olive logo SVG */}
          <svg
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <ellipse cx="20" cy="22" rx="12" ry="14" fill="#7cb518" />
            <ellipse cx="20" cy="22" rx="7" ry="9" fill="#5a8a0f" />
            {/* Stem */}
            <path
              d="M20 8 Q24 4 28 6"
              stroke="#5a8a0f"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
            {/* Leaf */}
            <ellipse
              cx="26"
              cy="6"
              rx="4"
              ry="2"
              fill="#7cb518"
              transform="rotate(-30 26 6)"
            />
          </svg>
        </div>
        <span
          className="text-2xl font-bold tracking-tight"
          style={{ fontFamily: "Fraunces, serif", color: "#2d4a1e" }}
        >
          olive
        </span>
      </div>

      {/* Nav links */}
      <div className="hidden md:flex items-center gap-7">
        {[
          { label: "Solutions", hasChevron: true },
          { label: "Features", hasChevron: false },
          { label: "Pricing", hasChevron: false },
          { label: "Blog", hasChevron: true },
          { label: "Restaurants", hasChevron: false },
          { label: "Food", hasChevron: true },
        ].map(({ label, hasChevron }) => (
          <a
            key={label}
            href="#"
            className="flex items-center gap-0.5 text-sm text-[#2d4a1e] font-medium hover:opacity-70 transition-opacity"
          >
            {label}
            {hasChevron && (
              <ChevronDown size={14} className="mt-0.5 opacity-70" />
            )}
          </a>
        ))}
      </div>

      {/* CTA */}
      <div className="flex items-center gap-4">
        <a
          href="#"
          className="text-sm font-medium text-[#2d4a1e] hover:opacity-70 transition-opacity"
        >
          Sign in
        </a>
        <a
          href="#"
          className="flex items-center gap-2 bg-[#2d4a1e] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#3a5c28] transition-colors"
        >
          Get Olive
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M2 7h10M8 3l4 4-4 4"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </nav>
  );
}
