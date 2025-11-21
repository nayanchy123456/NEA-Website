import React from "react";
import ImageSection from "./ImageSection";
import "./hero.css"; 

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <div className="split-layout">
          <ImageSection />
        </div>
      </div>
    </section>
  );
};

export default Hero;
