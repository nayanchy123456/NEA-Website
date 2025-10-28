import React from "react";
import "../socialMedia/socialMedia.css";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const SocialSidebar = () => {
  return (
    <div className="social-sidebar">
      <a href="https://facebook.com" target="_blank" rel="noreferrer" className="facebook">
        <FaFacebookF />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noreferrer" className="twitter">
        <FaTwitter />
      </a>
      <a href="https://youtube.com" target="_blank" rel="noreferrer" className="youtube">
        <FaYoutube />
      </a>
    </div>
  );
};

export default SocialSidebar;
