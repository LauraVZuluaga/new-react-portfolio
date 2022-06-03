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
              <small>2+ Years Working</small>
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
          Systems Engineer dedicated to frontend development. I am a proactive and analytical person. I work mainly with Javascript (Vue Js, Nuxt Js), but it is always an excellent opportunity to learn new technologies like I do right now with React Js and Typescript 👩‍💻. I am passionate about constantly improving my skills, working as a team, interacting with clients and understanding their needs ✍. I love dancing, singing, nature 🌞, spending time with my family and my new hobby is crafts 🧡. 

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
