import React from "react";
import { Link } from "react-router-dom";
import "./style.css"; // Import your CSS file

const Footer = () => {
  return (
    <div className="footer">
      <h3 className="text-center">All Right Reserved &copy; Natural Product</h3>
      <p className="text-center mt-3">
        <Link to="/about" className="footer-link">
          About
        </Link>
        |
        <Link to="/contact" className="footer-link">
          Contact
        </Link>
        |
        <Link to="/policy" className="footer-link">
          Privacy Policy
        </Link>
      </p>
    </div>
  );
};

export default Footer;
