import barcodeImage from "../../assets/barcode-image.webp";

export default function ScanDetect() {
  return (
    <div className="bg-[#eef3eb] rounded-3xl p-7 flex flex-col h-full">
      <p
        className="text-base font-semibold text-[#1e3310] mb-5"
        style={{ fontFamily: "DM Sans, sans-serif" }}
      >
        Scan &amp; Detect
      </p>

      <div className="relative flex-1 flex items-center justify-center mb-6 min-h-55">
        <div className="absolute inset-6">
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#2d4a1e] rounded-tl-md" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#2d4a1e] rounded-tr-md" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#2d4a1e] rounded-bl-md" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#2d4a1e] rounded-br-md" />

          <div className="absolute top-4 left-8 w-1.5 h-1.5 bg-[#7cb518] rounded-full opacity-60" />
          <div className="absolute top-12 left-3 w-1 h-1 bg-[#7cb518] rounded-full opacity-40" />
          <div className="absolute top-6 right-6 w-1.5 h-1.5 bg-[#7cb518] rounded-full opacity-60" />
          <div className="absolute bottom-10 right-3 w-1 h-1 bg-[#7cb518] rounded-full opacity-40" />
          <div className="absolute bottom-4 left-14 w-1 h-1 bg-[#7cb518] rounded-full opacity-50" />

          <SparkleIcon
            className="absolute top-3 left-14 opacity-30 text-[#2d4a1e]"
            size={14}
          />
          <SparkleIcon
            className="absolute bottom-6 right-14 opacity-25 text-[#2d4a1e]"
            size={10}
          />
          <SparkleIcon
            className="absolute top-16 right-10 opacity-20 text-[#2d4a1e]"
            size={8}
          />
        </div>

        <div className="relative z-10 w-32 h-32 flex items-center justify-center">
          <img
            src={barcodeImage}
            alt="Product"
            className="w-full h-full object-contain"
          />
        </div>

        <div
          className="absolute left-7 right-7 h-0.5 z-20 scan-line"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, #2d9b4e 20%, #4fc87a 50%, #2d9b4e 80%, transparent 100%)",
            boxShadow: "0 0 8px 2px rgba(76, 200, 120, 0.6)",
          }}
        />
      </div>

      <p
        className="text-xs text-[#4a6035] leading-relaxed"
        style={{ fontFamily: "DM Sans, sans-serif" }}
      >
        When you open Olive simply scan the barcode to instantly detect product
        ingredients. Olive's intuitive design means busy parents can quickly see
        which items contain harmful substances, delivering peace of mind with
        every scan.
      </p>
    </div>
  );
}

function SparkleIcon({ className, size = 14 }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2l2.4 7.6H22l-6.4 4.6 2.4 7.8L12 17.4 6 22l2.4-7.8L2 9.6h7.6z" />
    </svg>
  );
}
