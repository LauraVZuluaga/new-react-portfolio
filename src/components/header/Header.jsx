import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import Laura from "../../assets/happy-girl-wb.png";

const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <h5>Hello, I'm</h5>
        <h1>Laura Zuluaga</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={Laura} alt="about me" rel="noreferrer" />
        </div>

        <a href="#contact" className="scroll-down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
