import React from "react";
import "./about.css";
import image from "../../assets/frontPicture2.jpeg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { FaUserGraduate } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-img">
            <img src={image} alt="About image" />
          </div>
        </div>

        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <FaAward className="about-icon" />
              <h5>Experience</h5>
              <small>5+ Years Working</small>
            </article>
            <article className="about-card">
              <FiUsers className="about-icon" />
              <h5>Enterprises</h5>
              <small>
                3 different companies with offices in Mexico and Colombia
              </small>
            </article>
            <article className="about-card">
              <FaUserGraduate className="about-icon" />
              <h5>Career</h5>
              <small>Computer and systems engineering</small>
            </article>
          </div>

          <p>
          Hi! I am Laura Zuluaga, a frontend developer with over 5 years of experience in website development. I'm a proactive and analytical individual proficient in HTML, CSS, JavaScript, and technologies such as React and Vue.js. I have a passion for continuously enhancing my skills, collaborating within teams, engaging with clients, and understanding their needs.

          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
