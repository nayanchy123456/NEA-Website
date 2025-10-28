import EnergyDashboard from "../energyRepresent/EnergyDashboard";
import Footer from "../footer/Footer";
import Hero from "../hero/Hero";
import Navbar from "../Navbar/Navbar";
import SocialSidebar from "../socialMedia/SocialMedia";
import "./Layout.css";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <main className="layout-content">
        <Hero/>
        <SocialSidebar/>
        <Footer/>
      </main>
    </div>
  );
}
