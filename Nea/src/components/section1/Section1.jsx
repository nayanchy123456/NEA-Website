import React from 'react';
import Employees from '../employees/Employees.jsx';
import Services from '../services/Services.jsx';
import EnergyDetails from '../energyDetails/EnergyDetails.jsx';
import './section1.css';

export default function Section1() {
  return (
    <section className="section1-wrapper">
      <div className="section1-container">
        {/* Left Column - Employees */}
        <div className="section1-column section1-employees">
          <Employees />
        </div>

        {/* Center Column - Services Diamond Grid */}
        <div className="section1-column section1-services">
          <Services />
        </div>

        {/* Right Column - Energy Details */}
        <div className="section1-column section1-energy">
          <EnergyDetails />
        </div>
      </div>
    </section>
  );
}