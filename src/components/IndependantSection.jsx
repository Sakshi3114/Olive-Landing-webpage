import React from "react";

const IndependentSection = () => {
  return (
    <section className="w-ful py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col items-start gap-10">
        {/* Left Heading */}
        <div className="flex-1">
          <h1 className="text-[60px] md:text-[96px] font-extrabold leading-[1.05] text-pink-300">
            100% Independent.
            {/* <br />
            Always. */}
          </h1>
        </div>

        {/* Right Content */}
        <div className="flex flex-col  md:flex-row max-w-full justify-center md:items:center gap-10">
          <h1 className="text-[60px] md:text-[96px] font-extrabold leading-[1.05] text-pink-300">
            Always.
          </h1>
          <p className="text-lg md:text-3xl font-medium text-gray-700 leading-relaxed">
            We{" "}
            <span className="text-lime-600 font-semibold">never monetize</span>{" "}
            through brand deals, affiliate links, or ads — so you can{" "}
            <span className="text-lime-600 font-semibold">
              trust our recommendations
            </span>{" "}
            are always aligned with our users.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IndependentSection;
