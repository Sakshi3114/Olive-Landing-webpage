import React from "react";
import family from "../assets/family.webp";

const HeroOlive = () => {
  return (
    <section className="w-full bg-gray-100 py-10 px-4 md:px-10">
      <div className="max-w-6xl mx-auto relative rounded-3xl overflow-hidden">
        <img
          src={family}
          alt="Family dinner"
          className="w-full h-125 object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 text-white">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-xl">
            Keep your family <br /> safe with Olive
          </h1>

          <ul className="mt-6 space-y-3 text-lg">
            {[
              "Effortless food scanning",
              "Peace of mind for parents",
              "Healthy product recommendations",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-white text-black text-sm font-bold">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <button className="flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full font-medium shadow-md hover:scale-105 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M16.365 1.43c0 1.14-.41 2.23-1.22 3.07-.84.87-2.2 1.53-3.42 1.43-.15-1.1.45-2.3 1.23-3.08.84-.86 2.3-1.49 3.41-1.42zM21.6 17.1c-.6 1.37-.9 1.98-1.68 3.2-1.1 1.74-2.65 3.9-4.58 3.92-1.7.02-2.14-1.1-4.44-1.09-2.3.01-2.79 1.11-4.49 1.09-1.93-.02-3.4-2.01-4.5-3.74-3.08-4.76-3.4-10.34-1.5-13.36 1.34-2.14 3.45-3.4 5.44-3.4 2.04 0 3.32 1.13 5 1.13 1.63 0 2.62-1.13 4.98-1.13 1.77 0 3.64.96 4.98 2.6-4.38 2.4-3.67 8.6.79 10.78z" />
              </svg>
              Download for iOS
            </button>
          </div>
        </div>

        <div className="absolute top-0 left-0 w-40 h-40 border border-white/40 rounded-full translate-x-[-30%] translate-y-[-30%]" />
        <div className="absolute bottom-0 right-0 w-64 h-64 border border-white/40 rounded-full translate-x-[30%] translate-y-[30%]" />
      </div>
    </section>
  );
};

export default HeroOlive;
