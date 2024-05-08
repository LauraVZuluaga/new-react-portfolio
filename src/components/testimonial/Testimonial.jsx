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
      "She is a very committed, disciplined, and persevering woman who easily focuses on her duties. She enjoys doing things well, understanding their purpose, and always considering the user experience for those who will use her work. She likes to organize tasks by color, prioritizing them. She is proactive, questions things, and seeks solutions to both professional and personal problems. In team settings, she takes initiative and often becomes the voice of leadership, organizing tasks for each team member and assigning them without any issues.",
  },
  {
    avatar: jessiProfile,
    name: "Jessica Quintero Gómez - QA Tester",
    review:
      "Laura is a dedicated developer, responsible, and with a great aesthetic sense for details. She always seeks to improve her skills, train herself, and stay up to date with current development trends. She has excellent leadership and teamwork skills, highlighting her colleagues' abilities and supporting them in their weaknesses.",
  },
  {
    avatar: alejoProfile,
    name: "Alejandro Victoria Tamayo - QA Tester",
    review:
      "An outstanding professional and passionate about her craft, she brushes strokes of talent whenever she gets the chance. A natural leader, illuminating the path for individuals in search of their best selves. Every day, she seeks to perfect her results by combining skill and proactivity, aiming for a goal with quality and excellence.",
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
