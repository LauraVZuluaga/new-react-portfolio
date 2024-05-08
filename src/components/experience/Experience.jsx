import React from "react";
import "./experience.css";
import { BsFillCheckCircleFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience-container">
        <div className="experience-frontend">
          <h3>Frontend Development</h3>
          <div className="experience-content">
            <article className="experience-details">
              <BsFillCheckCircleFill className="experience-detail-icon" />
              <h4>HTML</h4>
            </article>
            <article className="experience-details">
              <BsFillCheckCircleFill className="experience-detail-icon" />
              <h4>CSS</h4>
            </article>
            <article className="experience-details">
              <BsFillCheckCircleFill className="experience-detail-icon" />
              <h4>Javascript</h4>
            </article>
            <article className="experience-details">
              <BsFillCheckCircleFill className="experience-detail-icon" />
              <h4>SASS</h4>
            </article>
            <article className="experience-details">
              <BsFillCheckCircleFill className="experience-detail-icon" />
              <h4>Vue Js</h4>
            </article>
            <article className="experience-details">
              <BsFillCheckCircleFill className="experience-detail-icon" />
              <h4>UX/UI</h4>
            </article>
            <article className="experience-details">
              <BsFillCheckCircleFill className="experience-detail-icon" />
              <h4>React Js</h4>
            </article>
            <article className="experience-details">
              <BsFillCheckCircleFill className="experience-detail-icon" />
              <h4>SEO</h4>
            </article>
          </div>
        </div>
        <div className="experience-soft">
          <h3>Soft Skills</h3>
          <div className="experience-content">
            <article className="experience-details">
              <BsFillCheckCircleFill className="experience-detail-icon experience-detail-icon-size empathy" />
              <div>
                <h4>Empathy</h4>
                <small className="text-light">
                  with colleagues and clients
                </small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillCheckCircleFill className="experience-detail-icon" />
              <h4>Teamwork</h4>
            </article>
            <article className="experience-details">
              <BsFillCheckCircleFill className="experience-detail-icon" />
              <h4>Adaptability</h4>
            </article>
            <article className="experience-details">
              <BsFillCheckCircleFill className="experience-detail-icon experience-detail-icon-size communication" />
              <div>
                <h4>Good communication</h4>
                <small className="text-light">(Spanish and English B2)</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillCheckCircleFill className="experience-detail-icon" />
              <h4>Organization</h4>
            </article>
            <article className="experience-details">
              <BsFillCheckCircleFill className="experience-detail-icon" />
              <h4>Decision making</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
