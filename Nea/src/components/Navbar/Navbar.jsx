import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (e, dropdownName) => {
    e.preventDefault();
    if (window.innerWidth <= 1200) {
      setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
      setActiveSubmenu(null);
    }
  };

  const toggleSubmenu = (e, submenuName) => {
    e.preventDefault();
    if (window.innerWidth <= 1200) {
      setActiveSubmenu(activeSubmenu === submenuName ? null : submenuName);
    }
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="/src/assets/logo.png" alt="NEA Logo" />
        </div>

        {/* Hamburger icon */}
        <div className="hamburger" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`navbar-menu ${isMobileMenuOpen ? "open" : ""}`}>
          <a href="#">Home</a>

          {/* ABOUT US DROPDOWN */}
          <div
            className={`dropdown ${activeDropdown === "about" ? "active" : ""}`}
            onClick={(e) => toggleDropdown(e, "about")}
          >
            <span className="dropbtn">About Us</span>
            <div className="dropdown-content">
              {/* INTRODUCTION with submenu */}
              <div
                className={`submenu-item ${
                  activeSubmenu === "intro" ? "active" : ""
                }`}
                onClick={(e) => toggleSubmenu(e, "intro")}
              >
                <a href="#">INTRODUCTION</a>
                <div className="submenu">
                  <a href="#">About Us</a>
                  <a href="#">Organizational Structures</a>
                  <a href="#">Board of Directors</a>
                  <a href="#">Contact Information</a>
                </div>
              </div>

              {/* CORPORATE OFFICES with submenu */}
              <div
                className={`submenu-item ${
                  activeSubmenu === "corporate" ? "active" : ""
                }`}
                onClick={(e) => toggleSubmenu(e, "corporate")}
              >
                <a href="#">CORPORATE OFFICES</a>
                <div className="submenu">
                  <a href="#">Head Office</a>
                  <a href="#">Branch Offices</a>
                  <a href="#">Distribution Centers</a>
                </div>
              </div>

              {/* PROVINCIAL OFFICES with submenu */}
              <div
                className={`submenu-item ${
                  activeSubmenu === "provincial" ? "active" : ""
                }`}
                onClick={(e) => toggleSubmenu(e, "provincial")}
              >
                <a href="#">PROVINCIAL OFFICES</a>
                <div className="submenu">
                  <a href="#">Province 1</a>
                  <a href="#">Madhesh Province</a>
                  <a href="#">Bagmati Province</a>
                  <a href="#">Gandaki Province</a>
                  <a href="#">Lumbini Province</a>
                  <a href="#">Karnali Province</a>
                  <a href="#">Sudurpashchim Province</a>
                </div>
              </div>
            </div>
          </div>

          {/* MEDIA CENTER DROPDOWN */}
          <div
            className={`dropdown ${activeDropdown === "media" ? "active" : ""}`}
            onClick={(e) => toggleDropdown(e, "media")}
          >
            <span className="dropbtn">Media Center</span>
            <div className="dropdown-content">
              <div
                className={`submenu-item ${
                  activeSubmenu === "news" ? "active" : ""
                }`}
                onClick={(e) => toggleSubmenu(e, "news")}
              >
                <a href="#">News</a>
                <div className="submenu">
                  <a href="#">Press Releases</a>
                  <a href="#">Latest Updates</a>
                  <a href="#">Announcements</a>
                </div>
              </div>
              <div
                className={`submenu-item ${
                  activeSubmenu === "events" ? "active" : ""
                }`}
                onClick={(e) => toggleSubmenu(e, "events")}
              >
                <a href="#">Events</a>
                <div className="submenu">
                  <a href="#">Upcoming Events</a>
                  <a href="#">Past Events</a>
                  <a href="#">Workshops & Seminars</a>
                </div>
              </div>
              <a href="#">Gallery</a>
            </div>
          </div>

          {/* CONSUMERS DROPDOWN */}
          <div
            className={`dropdown ${activeDropdown === "consumers" ? "active" : ""}`}
            onClick={(e) => toggleDropdown(e, "consumers")}
          >
            <span className="dropbtn">Consumers</span>
            <div className="dropdown-content">
              <div
                className={`submenu-item ${
                  activeSubmenu === "support" ? "active" : ""
                }`}
                onClick={(e) => toggleSubmenu(e, "support")}
              >
                <a href="#">Customer Support</a>
                <div className="submenu">
                  <a href="#">Help Center</a>
                  <a href="#">FAQs</a>
                  <a href="#">File Complaint</a>
                  <a href="#">Track Complaint</a>
                </div>
              </div>
              <div
                className={`submenu-item ${
                  activeSubmenu === "billing" ? "active" : ""
                }`}
                onClick={(e) => toggleSubmenu(e, "billing")}
              >
                <a href="#">Billing</a>
                <div className="submenu">
                  <a href="#">Pay Online</a>
                  <a href="#">View Bill</a>
                  <a href="#">Bill History</a>
                  <a href="#">Payment Options</a>
                </div>
              </div>
            </div>
          </div>

          {/* RECRUITMENT DROPDOWN */}
          <div
            className={`dropdown ${activeDropdown === "recruitment" ? "active" : ""}`}
            onClick={(e) => toggleDropdown(e, "recruitment")}
          >
            <span className="dropbtn">Recruitment</span>
            <div className="dropdown-content">
              <div
                className={`submenu-item ${
                  activeSubmenu === "jobs" ? "active" : ""
                }`}
                onClick={(e) => toggleSubmenu(e, "jobs")}
              >
                <a href="#">Job Openings</a>
                <div className="submenu">
                  <a href="#">Current Vacancies</a>
                  <a href="#">How to Apply</a>
                  <a href="#">Selection Process</a>
                </div>
              </div>
              <a href="#">Internships</a>
            </div>
          </div>

          {/* ONLINE APPLICATION DROPDOWN */}
          <div
            className={`dropdown ${activeDropdown === "application" ? "active" : ""}`}
            onClick={(e) => toggleDropdown(e, "application")}
          >
            <span className="dropbtn">Online Application</span>
            <div className="dropdown-content">
              <a href="#">Apply Online</a>
              <a href="#">Application Status</a>
            </div>
          </div>

          {/* TENDERS DROPDOWN */}
          <div
            className={`dropdown ${activeDropdown === "tenders" ? "active" : ""}`}
            onClick={(e) => toggleDropdown(e, "tenders")}
          >
            <span className="dropbtn">Tenders</span>
            <div className="dropdown-content">
              <div
                className={`submenu-item ${
                  activeSubmenu === "current" ? "active" : ""
                }`}
                onClick={(e) => toggleSubmenu(e, "current")}
              >
                <a href="#">Current Tenders</a>
                <div className="submenu">
                  <a href="#">Open Tenders</a>
                  <a href="#">Bid Documents</a>
                  <a href="#">Submit Bid</a>
                </div>
              </div>
              <a href="#">Past Tenders</a>
            </div>
          </div>

          {/* NEA OPERATIONAL REPORTS DROPDOWN */}
          <div
            className={`dropdown ${activeDropdown === "reports" ? "active" : ""}`}
            onClick={(e) => toggleDropdown(e, "reports")}
          >
            <span className="dropbtn">Nea Operational Reports</span>
            <div className="dropdown-content">
              <a href="#">Annual Reports</a>
              <a href="#">Monthly Reports</a>
            </div>
          </div>

          <a href="#">स्वत प्रकाशन</a>

          {/* TARIFF RATES DROPDOWN */}
          <div
            className={`dropdown ${activeDropdown === "tariff" ? "active" : ""}`}
            onClick={(e) => toggleDropdown(e, "tariff")}
          >
            <span className="dropbtn">Tariff Rates</span>
            <div className="dropdown-content">
              <a href="#">Residential</a>
              <a href="#">Commercial</a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}