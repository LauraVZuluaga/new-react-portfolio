import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header-socials">
      <a
        href="https://www.linkedin.com/in/laura-vanessa-zuluaga-arango-69b942191/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/LauraVZuluaga" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
