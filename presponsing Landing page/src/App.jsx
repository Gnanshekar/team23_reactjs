import React from "react";
import Navbar from "./Components/Navbar";
import HeroSction from "./Components/Herosection";
import FeaturingSection from "./Components/FeaturingSection";
import WorkFlowSection from "./Components/workFlowSection";
import PricingSection from "./Components/PricingSection";
import TestimonialSection from "./Components/TestimonialSection";
import Footer from "./Components/Footer";


const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSction />
        <FeaturingSection/>
        <WorkFlowSection/>
        <PricingSection/>
        <TestimonialSection/>
        <Footer/>
      </div>
    </>
  );
};

export default App;
