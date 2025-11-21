import { useEffect } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Hero from "../hero/Hero";
import Navbar from "../Navbar/Navbar";
import SocialSidebar from "../socialMedia/SocialMedia";
import "./Layout.css";
import EnergyDetails from "../energyDetails/EnergyDetails";
import Services from "../services/Services";
import Employees from "../employees/Employees";

export default function Layout({ children }) {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.nea-header');
      const navbar = document.querySelector('.navbar');
      
      if (window.scrollY > 50) {
        header?.classList.add('scrolled');
        navbar?.classList.add('scrolled');
      } else {
        header?.classList.remove('scrolled');
        navbar?.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    <div className="layout">
      <Header/>
      <Navbar />
      <main className="layout-content">
        <Hero/>
        {children}
        <SocialSidebar/>
        
        {/* Three Column Section */}
        <section className="three-column-section">
          <div className="three-column-container">
            <div className="column">
              <Employees/>
            </div>
            <div className="column">
              <Services/>
            </div>
            <div className="column">
              <EnergyDetails/>
            </div>
          </div>
        </section>
        
        <Footer/>
      </main>
    </div>
  );
}