import React from "react";
import CountUp from "react-countup";
import "../hero/hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Empowering Nepal with Reliable Energy</h1>
          <p>Leading the nation in electricity generation and distribution.</p>

          <div className="stats-container">
            <div className="stat-box">
              <h3>Total Energy Demand</h3>
              <CountUp end={55203} duration={2.5} separator="," suffix=" MWh" />
            </div>
            <div className="stat-box">
              <h3>National Energy Demand</h3>
              <CountUp end={31488} duration={2.5} separator="," suffix=" MWh" />
            </div>
            <div className="stat-box">
              <h3>Total Peak Demand</h3>
              <CountUp end={2629} duration={2.5} separator="," suffix=" MW" />
            </div>
            <div className="stat-box">
              <h3>National Peak Demand</h3>
              <CountUp end={1654} duration={2.5} separator="," suffix=" MW" />
            </div>
            <div className="stat-box">
              <h3>NEA</h3>
              <CountUp end={7310} duration={2.5} separator="," suffix=" MWh" />
            </div>
            <div className="stat-box">
              <h3>Subsidiary Companies</h3>
              <CountUp end={12686} duration={2.5} separator="," suffix=" MWh" />
            </div>
            <div className="stat-box">
              <h3>IPP</h3>
              <CountUp end={35208} duration={2.5} separator="," suffix=" MWh" />
            </div>
            <div className="stat-box">
              <h3>Export</h3>
              <CountUp end={23715} duration={2.5} separator="," suffix=" MWh" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
