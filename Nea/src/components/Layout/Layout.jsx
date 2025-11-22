import { useEffect } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Hero from "../hero/Hero";
import Navbar from "../Navbar/Navbar";
import SocialSidebar from "../socialMedia/SocialMedia";
import "./Layout.css";
import Section1 from "../section1/Section1";

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
        <SocialSidebar/>
        <Section1/>
        <Footer/>
      </main>
    </div>
  );
}