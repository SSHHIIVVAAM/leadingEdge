import React from "react";
import "./Header.css";
import img1 from "../assets/img1.png";
import img2 from "../assets/images.png";

const Header = () => {
  return (
    <header className="header">
      <div className="left-section">
        <img src={img1} alt="" />
        <img className="imgzz" src={img2} alt="" />
      </div>
      <div className="right-section">
        <h3> <i class='bx bxl-whatsapp gg'></i>Talk to an expert</h3>
        <h3> <i class='bx bxs-phone'></i>+1 886 998 9876</h3>
        <h3><i class='bx bxs-phone'></i>+91- 9877566453</h3>
      </div>
    </header>
  );
};

export default Header;
