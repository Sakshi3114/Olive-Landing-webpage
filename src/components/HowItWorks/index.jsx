import ScanDetect from "./ScanDetect";
import DataAnalysis from "./DataAnalysis";
import ActionableInsights from "./ActionableInsights";

export default function HowItWorks() {
  return (
    <section className="w-full  px-8 py-16 bg-[#ffff]">
      <div className="relative flex items-start justify-center mb-14">
        <h2
          className="text-[2.8rem] leading-[1.12] font-bold text-[#1e3310] text-center max-w-lg"
          style={{ fontFamily: "Fraunces, serif" }}
        >
          How the Olive Food Scanner App Works
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
        <ScanDetect />
        <DataAnalysis />
        <ActionableInsights />
      </div>
    </section>
  );
}
