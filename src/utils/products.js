import seaSalt from "../assets/sea-salt.webp";
import sparklingWater from "../assets/sparkling-water.webp";
import spinach from "../assets/spinach.jfif";
import bread from "../assets/organic-bread.webp";
import larabar from "../assets/larabar.webp";

export const products = [
  {
    id: 1,
    name: "Sea Salt & Vinegar Potato Crisps, Sea Salt & Vinegar",
    brand: "The Good Crisp Company",
    score: 39,
    scoreLabel: "Avoid",
    scoreBg: "#fee2e2",
    scoreColor: "#ef4444",
    ringColor: "#ef4444",
    imageSrc: seaSalt, // replace with your image path e.g. '/images/product1.png'
    oliveSays:
      "This snack's low score is mainly due to the presence of processed sugars like maltodextrin and several additives that can be harmful, which doesn't align with your goal of avoiding processed foods and additives for your family. It's best to look for healthier alternatives that are more kid-friendly and support better overall health.",
  },
  {
    id: 2,
    name: "Organic Baby Spinach, Fresh",
    brand: "Earthbound Farm",
    score: 91,
    scoreLabel: "Great",
    scoreBg: "#dcfce7",
    scoreColor: "#16a34a",
    ringColor: "#16a34a",
    imageSrc: spinach,
    oliveSays:
      "This is an excellent choice for your family. Organic baby spinach is packed with iron, calcium, and vitamins A and C. With no additives or preservatives, it aligns perfectly with your goal of feeding your family clean, nutritious foods.",
  },
  {
    id: 3,
    name: "Organic Bagels",
    brand: "Killer Dave's",
    score: 43,
    scoreLabel: "Good",
    scoreBg: "#fef9c3",
    scoreColor: "#ca8a04",
    ringColor: "#ca8a04",
    imageSrc: bread,
    oliveSays:
      "The Bread's low score comes from the organic expeller canola oil which is a seed oil that can be harmful, along with the presence of organic can sugar, which is a processed sugar that doesn't align with your goal of minimizing processed foods for your family.",
  },
  {
    id: 4,
    name: "Larabar Choclate Cookie Dough Fruits & nuts",
    brand: "Larabar",
    score: 92,
    scoreLabel: "Great",
    scoreBg: "#dcfce7",
    scoreColor: "#16a34a",
    ringColor: "#16a34a",
    imageSrc: larabar,
    oliveSays:
      "This product which includes ingredients like cashews and dates, scored well mainly because it doesn't contain processed sugars, harmful additives or seed oils, making it healthier choice for your family, especially as an occasional treat. The slight deduction of processing indicates it's not entirely raw, but it's still a good option that aligns with your goals of avoiding overly processed foods.",
  },
  {
    id: 5,
    name: "Sparkling Water, Lemon Flavor",
    brand: "LaCroix",
    score: 95,
    scoreLabel: "Great",
    scoreBg: "#dcfce7",
    scoreColor: "#16a34a",
    ringColor: "#16a34a",
    imageSrc: sparklingWater,
    oliveSays:
      "Nearly perfect score — just carbonated water and natural flavors. Zero sugar, zero calories, zero artificial sweeteners. An ideal hydration choice for the whole family.",
  },
];

export const rows = [
  {
    label: "Detailed Product Breakdown",
    olive: true,
    yuka: true,
    thinkDirty: true,
  },
  {
    label: "Comprehensive Water Data",
    olive: true,
    yuka: false,
    thinkDirty: false,
  },
  {
    label: "Seed Oil Free Dining Map",
    olive: true,
    yuka: false,
    thinkDirty: false,
  },
  {
    label: "Seed Oil Flagging",
    olive: true,
    yuka: false,
    thinkDirty: true,
  },
  {
    label: "Certified Lab-Testing Data",
    olive: true,
    yuka: false,
    thinkDirty: false,
  },
];

export const faqs = [
  {
    question: "What is the Food Scanner App and how does it work?",
    answer:
      "Olive is a comprehensive tool designed to help busy parents make informed food choices. By scanning product barcodes, it quickly identifies harmful ingredients and suggests safer alternatives, ensuring that you always stay ahead of potential health risks.",
  },
  {
    question:
      "How does Olive ensure the accuracy of the Food Scanner App results?",
    answer:
      "Our database is maintained by a team of registered nutritionists and holistic health experts. We continuously update our ingredient lists based on the latest scientific research and regulatory guidelines to ensure you receive the most accurate and up-to-date information.",
  },
  {
    question: "Which products can I scan with the Food Scanner App?",
    answer:
      "You can scan virtually any packaged food or beverage product that has a barcode. Olive covers millions of products across major grocery chains, health food stores, and online retailers worldwide.",
  },
  {
    question:
      "Can the Food Scanner App be customized to my family's dietary needs?",
    answer:
      "Absolutely. Olive lets you set personalized dietary preferences and health goals for each family member — from allergies and intolerances to specific goals like avoiding seed oils, reducing sugar, or going gluten-free. The app then tailors every scan result accordingly.",
  },
  {
    question: "Is my data secure when I use the Olive?",
    answer:
      "Yes. We take your privacy seriously. All personal data is encrypted in transit and at rest. We never sell your data to third parties, and you can delete your account and all associated data at any time from within the app.",
  },
  {
    question:
      "When will the Android version of the Food Scanner App be available?",
    answer:
      "We are actively developing the Android version and plan to launch it in the near future. Sign up for our newsletter to be the first to know when it drops — early sign-ups will receive exclusive early-access perks.",
  },
];
