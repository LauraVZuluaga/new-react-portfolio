import React from "react";
import "./testimonial.css";
import userProfile from "../../assets/user-profile.png";

// import Swiper core and required modules
import { Pagination, Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: userProfile,
    name: "Julián Salgado",
    review:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nemo dolore reiciendis dolor aperiam eum accusamus perspiciatis placeat possimus mollitia alias sequi faciliarchitecto, quae quisquam? Ipsam voluptate architecto sit.",
  },
  {
    avatar: userProfile,
    name: "Julián Salgado",
    review:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nemo dolore reiciendis dolor aperiam eum accusamus perspiciatis placeat possimus mollitia alias sequi faciliarchitecto, quae quisquam? Ipsam voluptate architecto sit.",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
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
