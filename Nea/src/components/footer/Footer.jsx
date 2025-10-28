import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* About NEA Section */}
          <div className="footer-column">
            <h3 className="footer-title">About NEA</h3>
            <ul className="footer-links">
              <li><a href="/organization">Organization</a></li>
              <li><a href="/history">History</a></li>
              <li><a href="/vision-mission">Vision & Mission</a></li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="footer-column">
            <h3 className="footer-title">Services</h3>
            <ul className="footer-links">
              <li><a href="/bill-payment">Bill Payment</a></li>
              <li><a href="/new-connection">New Connection</a></li>
              <li><a href="/complaints">Complaints</a></li>
            </ul>
          </div>

          {/* Resources Section */}
          <div className="footer-column">
            <h3 className="footer-title">Resources</h3>
            <ul className="footer-links">
              <li><a href="/reports">Reports</a></li>
              <li><a href="/tenders">Tenders</a></li>
              <li><a href="/downloads">Downloads</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="footer-column">
            <h3 className="footer-title">Contact</h3>
            <ul className="footer-contact">
              <li>
                <span className="contact-label">Kathmandu, Nepal</span>
              </li>
              <li>
                <span className="contact-label">Phone:</span>
                <a href="tel:+9771-4413366">+977-1-4413366</a>
              </li>
              <li>
                <span className="contact-label">Email:</span>
                <a href="mailto:info@nea.org.np">info@nea.org.np</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} Nepal Electricity Authority. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;