import motherImage from "../assets/testimonials.webp";
const lila = {
  text: "After just a week of using Olive, I feel more in control of my family's nutrition than ever before. It's empowering to make informed choices so quickly.",
  name: "Lila M.",
  stars: 5,
  avatarSrc: null,
  avatarColor: "#b0a090",
};

const megan = {
  text: "Olive has completely changed the way I shop for my family. I feel confident knowing exactly what's in our food before it ever hits our pantry.",
  name: "Megan L.",
  stars: 5,
  avatarSrc: null,
  avatarColor: "#d4a88c",
};

const tina = {
  text: "Meal planning used to be stressful. Now I scan, get recommendations, and feel great about what my kids are eating. It's that easy.",
  name: "Tina B.",
  stars: 5,
  avatarSrc: null,
  avatarColor: "#8c9e78",
};

function Stars({ count = 5 }) {
  return (
    <div className="flex gap-0.5 mt-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#f59e0b">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function Avatar({ src, color, size = 52 }) {
  return (
    <div
      className="rounded-full overflow-hidden shrink-0 border-[3px] border-white shadow-lg"
      style={{ width: size, height: size, background: color }}
    >
      {src ? (
        <img src={src} alt="" className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <svg viewBox="0 0 40 40" fill="none" width="100%" height="100%">
            <circle cx="20" cy="15" r="8" fill="rgba(255,255,255,0.55)" />
            <ellipse
              cx="20"
              cy="35"
              rx="12"
              ry="9"
              fill="rgba(255,255,255,0.4)"
            />
          </svg>
        </div>
      )}
    </div>
  );
}

function ReviewCard({ review, style = {} }) {
  return (
    <div
      className="bg-white rounded-2xl p-5"
      style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.09)", ...style }}
    >
      <p
        className="text-sm text-[#2a2a2a] leading-relaxed mb-3"
        style={{ fontFamily: "DM Sans, sans-serif" }}
      >
        {review.text}
      </p>
      <p
        className="text-sm font-semibold text-[#1e3310]"
        style={{ fontFamily: "DM Sans, sans-serif" }}
      >
        {review.name}
      </p>
      <Stars count={review.stars} />
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="w-full bg-white py-24 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="relative shrink-0" style={{ width: 520 }}>
            <div
              className="absolute pointer-events-none"
              style={{ left: -20, top: 60, zIndex: 0 }}
            >
              <CloverBlob />
            </div>

            <div
              className="relative rounded-3xl overflow-hidden"
              style={{
                width: 460,
                height: 510,
                marginLeft: 40,
                zIndex: 1,
                filter: "grayscale(100%)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.13)",
              }}
            >
              <img
                src={motherImage}
                alt="Mother with children"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div
              className="absolute z-10"
              style={{
                bottom: -30,
                left: 0,
                width: 340,
              }}
            >
              <ReviewCard review={lila} />

              <div className="absolute" style={{ bottom: -20, right: -20 }}>
                <Avatar
                  src={lila.avatarSrc}
                  color={lila.avatarColor}
                  size={52}
                />
              </div>
            </div>
          </div>

          <div
            className="flex-1 flex flex-col"
            style={{ minHeight: 560, paddingTop: 0 }}
          >
            <div
              className="relative self-start"
              style={{ maxWidth: 380, marginBottom: 32 }}
            >
              <ReviewCard review={megan} />

              <div
                className="absolute"
                style={{
                  right: -62,
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              >
                <Avatar
                  src={megan.avatarSrc}
                  color={megan.avatarColor}
                  size={52}
                />
              </div>
            </div>

            <div className="mb-auto">
              <h2
                className="font-bold text-[#1e3310]"
                style={{
                  fontFamily: "Fraunces, serif",
                  fontSize: "3.2rem",
                  lineHeight: 1.08,
                  marginBottom: 16,
                }}
              >
                Real Mothers
                <br />
                Real Results
              </h2>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm text-[#3a5c28] font-medium hover:underline"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                read all 3,147+ reviews
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <div
              className="relative self-end mt-10"
              style={{ maxWidth: 380, width: "100%" }}
            >
              <ReviewCard review={tina} />

              <div className="absolute" style={{ left: -28, bottom: -28 }}>
                <Avatar
                  src={tina.avatarSrc}
                  color={tina.avatarColor}
                  size={52}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Organic clover blob — pale green decorative shape on the left
function CloverBlob() {
  return (
    <svg
      width="200"
      height="360"
      viewBox="0 0 200 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Four rounded lobes meeting in the center */}
      <ellipse cx="100" cy="80" rx="65" ry="75" fill="#deecd8" opacity="0.8" />
      <ellipse cx="100" cy="280" rx="65" ry="75" fill="#deecd8" opacity="0.8" />
      <ellipse cx="38" cy="180" rx="55" ry="65" fill="#deecd8" opacity="0.8" />
      <ellipse cx="162" cy="180" rx="55" ry="65" fill="#deecd8" opacity="0.8" />
      {/* Center fill to make it solid */}
      <ellipse
        cx="100"
        cy="180"
        rx="70"
        ry="100"
        fill="#deecd8"
        opacity="0.8"
      />
    </svg>
  );
}
