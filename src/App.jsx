import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import HealthBenefits from "./components/Healthbenefits";
import Testimonials from "./components/Testimonials";
import CompareSection from "./components/CompareSection";
import PricingSection from "./components/PricingSelection";
import FamilyCTASection from "./components/FamilyCTASection";
import IndependentSection from "./components/IndependantSection";
import FAQ from "./components/FAQItem";
import HeroOlive from "./components/HeroOlive";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#f0f5ee] w-full">
      <Navbar />
      <Hero />
      <HowItWorks />
      <HealthBenefits />
      <Testimonials />
      <CompareSection />
      <PricingSection />
      <FamilyCTASection />
      <IndependentSection />
      <FAQ />
      <HeroOlive />
      <Footer />
    </div>
  );
}

export default App;
