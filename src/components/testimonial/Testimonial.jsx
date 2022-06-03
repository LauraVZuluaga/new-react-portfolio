import React from "react";
import "./testimonial.css";
import userProfile from "../../assets/user-profile.png";
import juliProfile from "../../assets/Juli.jpeg";
import jessiProfile from "../../assets/Jessi.jpg";
import alejoProfile from "../../assets/Alejo.jpeg";

// import Swiper core and required modules
import { Pagination, Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: juliProfile,
    name: "Julián Salgado - Ingeniero de Sistemas y Computación",
    review:
      "Es una mujer muy comprometida, disciplinada, perseverante y se enfoca fácilmente en sus deberes. Le gusta hacer las cosas bien hechas, comprendiendo el objetivo de ello y siempre pensando en la experiencia de la persona que va a utilizar su desarrollo. Le gusta organizarse escribiendo las tareas por colores identificándolas por prioridad. Le gusta ser propositiva, cuestionar y buscar soluciones a los problemas que surjan tanto profesional como personal. En los equipos de trabajo tiene iniciativa y casi siempre, resulta siendo la voz líder organizando las tareas que cada integrante debe hacer y, asignándolas sin mayor problema.",
  },
  {
    avatar: jessiProfile,
    name: "Jessica Quintero Gómez - QA Tester",
    review:
      "Laura es una desarrolladora dedicada, responsable, y con un gran nivel estético por los detalles. Siempre busca mejorar sus habilidades, capacitarse y mantenerse al día con las tendencias de desarrollo actuales. Cuenta con una excelente capacidad de liderazgo y de trabajo en equipo destacando las habilidades de sus compañeros y apoyándolos en sus falencias",
  },
  {
    avatar: alejoProfile,
    name: "Alejandro Victoria Tamayo - QA Tester",
    review:
      "Profesional destacada y enamorada de su arte, dando pinceladas de talento cada que tiene oportunidad. Líder por naturaleza, iluminando el camino de las personas en busca de su mejor versión. Cada día busca perfeccionar sus resultados combinando destreza y proactividad, en busca de un objetivo con calidad y excelencia.",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonials">
      <h5>Review from coworkers</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials-container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client-avatar">
                <img src={avatar} alt="user profile" />
              </div>
              <h5 className="client-name">{name}</h5>
              <small className="client-review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
