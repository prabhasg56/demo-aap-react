import React from "react";

import "./Footer.css";
import insta from "../../assets/insta.svg";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h2>CHIRAG KANSAL</h2>
        <address>
          Rich lifestyle, Avfits Space Solutions, 7th Floor, Knowledge
          Boulevard,
          <br />
          Block A, Sector 62, Noida-201309, India
        </address>
        <div className="social-links">
          <a href="#">
            <img src={insta} alt="insta" />
          </a>
          <a href="#">
            <img src={insta} alt="insta" />
          </a>
          <a href="#">
            <img src={insta} alt="insta" />
          </a>
          <a href="#">
            <img src={insta} alt="insta" />
          </a>
        </div>
      </div>
      <div className="footer-section">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Success Stories</a>
          </li>
          <li>
            <a href="#">Member login</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Free Downloads</a>
          </li>
          <li>
            <a href="#">Videos</a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <ul>
          <li>
            <a href="#">Self Placed Coaching</a>
          </li>
          <li>
            <a href="#">Group Coaching</a>
          </li>
          <li>
            <a href="#">One-One Coaching</a>
          </li>
          <li>
            <a href="#">Site Map</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms and Conditions</a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h2>CLIENT SUPPORT</h2>
        <p>
          <a href="mailto:www.logo@gmail.com">www.logo@gmail.com</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
