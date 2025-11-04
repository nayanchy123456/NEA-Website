import Footer from "../footer/Footer";
import Header from "../header/Header";
import Hero from "../hero/Hero";
import Navbar from "../Navbar/Navbar";
import SocialSidebar from "../socialMedia/SocialMedia";
import "./Layout.css";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Header/>
      <Navbar />
      <main className="layout-content">
        <Hero/>
        <SocialSidebar/>
        <Footer/>
      </main>
    </div>
  );
}
