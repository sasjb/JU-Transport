import React from 'react';
import '../css/Footer.css'; // Import your CSS file for styling

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p className="university-info">
          Jahangirnagar University, Savar, Dhaka-1342, Bangladesh
        </p>
        <p className="contact-info">
          Telephone: PABX: 02224491045-51, Fax: 02224491052
        </p>
        <p className="copyright">
          &copy; 2023 Jahangirnagar University
        </p>
      </div>
    </footer>
  );
}

export default Footer;
