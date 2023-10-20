import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="green-footer">
      <div className="footer-section">
        <h4>Explore</h4>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Question</a>
          </li>
          <li>
            <a href="#">Article</a>
          </li>
          <li>
            <a href="#">Tutorials</a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Support</h4>
        <ul>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">FAQs</a>
          </li>
          <li>
            <a href="#">Help Center</a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Stay Connected</h4>
        <ul>
          <li>
            <a href="#">
              <i className="fab fa-facebook"></i> Facebook
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-twitter"></i> Twitter
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-center-content">
        <p>Dev@Deakin</p>
        <div className="horizontal-line">
          <a href="#">Privacy Policy</a>
          <a href="#">Code of Conduct</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
