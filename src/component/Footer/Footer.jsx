import React from "react";
import "./Footer.css";
import ss01 from "../assets/ss.png";
import logo1 from "../assets/logoo1.png";
import logo2 from "../assets/logoo2.png";
import logo3 from "../assets/logoo3.png";
import logo4 from "../assets/logoo4.png";
import logo5 from "../assets/logoo5.png";
import logo6 from "../assets/logoo6.png";
import logo7 from "../assets/logoo7.png";
import logo8 from "../assets/logoo8.png";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-item">
          <h3>SERVICES & QUERY</h3>
          <ul className="abc">
            <li>
              <i className="bx bx-envelope ii"></i>shivammanhas119@gmail.com
            </li>
            <h3>CAREER</h3>
            <li>
              <i className="bx bx-envelope ii"></i>hr@leadingedgeinfosolution.com
            </li>
            <h3>CALL US</h3>
            <li>
              <i className="bx bx-phone-call ii"></i>+91 78655 46753
            </li>
            <li>
              <i className="bx bx-phone-call ii"></i>+1 9765 467 853
            </li>
            <i className="bx bxl-whatsapp ii"></i>
            <i className="bx bxl-skype ii"></i>
          </ul>
        </div>
        <div className="footer-item">
          <h3>SERVICES</h3>
          <ul className="bcd">
            <li>Digital Marketing</li>
            <li>SEO</li>
            <li>PPC</li>
            <li>Web Design</li>
            <li>Content Marketing</li>
            <li>Social Media Marketing</li>
          </ul>
        </div>
        <div className="footer-item">
          <h3>INDUSTRY</h3>
          <ul className="cde">
            <li>Skin Care Marketing</li>
            <li>Healthcare Marketing</li>
            <li>Real Estate Marketing</li>
            <li>Pest Control Marketing</li>
            <li>Dental Marketing</li>
            <li>Chiropractor Marketing</li>
          </ul>
        </div>
        <div className="footer-item">
          <h3>QUICK LINKS</h3>
          <ul className="def">
            <li>About</li>
            <li>Contact</li>
            <li>Portfolio</li>
            <li>Blog</li>
            <li>Career</li>
            <i className="bx bxl-facebook-circle ii"></i>
            <i className="bx bxl-linkedin-square ii"></i>
            <i className="bx bxl-instagram-alt ii"></i>
            <i className="bx bxl-youtube ii"></i>
          </ul>
        </div>
      </footer>

      <div className="back">
        <img className="emmi" src={logo1} alt="" />
        <img className="emmi" src={logo2} alt="" />
        <img className="emmi" src={logo3} alt="" />
        <img className="emmi" src={logo4} alt="" />
        <img className="emmi" src={logo5} alt="" />
        <img className="emmi" src={logo6} alt="" />
        <img className="emmi" src={logo7} alt="" />
        <img className="emmi" src={logo8} alt="" />
      </div>

      <h3 className="bb">© 2024 Leading Edge Info Solutions (P) Ltd. All Rights Reserved.</h3>
    </>
  );
};

export default Footer;
