import React from "react";
import "./portfolio.css";
import fireApp from "../../assets/fire-app.png";
import movieApp from "../../assets/movie-app.png";
import reactPortfolio from "../../assets/react-portfolio.jpg";

const data = [
  {
    id: 1,
    image: fireApp,
    title: "Fire App",
    description:
      "HTML, CSS, Nuxt JS, Axios, Random User Api And Continuous Deployment With Netlify",
    github: "https://github.com/LauraVZuluaga/fire-app",
    demo: "https://fire-app.netlify.app/",
  },
  {
    id: 2,
    image: movieApp,
    title: "Movie App",
    description:
      "HTML, CSS (Responsive), Nuxt JS, Axios, TMDB API And Continuous Deployment With Netlify",
    github: "https://github.com/LauraVZuluaga/movie-app",
    demo: "https://movie-nuxt-app.netlify.app/",
  },
  {
    id: 3,
    image: reactPortfolio,
    title: "React Portfolio",
    description:
      "HTML, CSS (Responsive), React, SwiperJS, And Continuous Deployment With Netlify",
    github: "https://github.com/LauraVZuluaga/movie-app",
    demo: "https://movie-nuxt-app.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio-container">
        {data.map(({ id, image, title, description, github, demo }) => {
          return (
            <article key={id} className="portfolio-item">
              <div className="portfolio-item-img">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfollio-item-small">
                <small className="text-light">{description}</small>
              </div>
              <div className="portfolio-item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
