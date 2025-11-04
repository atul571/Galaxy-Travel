import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import service1 from "../../../assets/service1.jpg";
import service2 from "../../../assets/service2.jpg";
import service3 from "../../../assets/service3.jpg";

const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <section id="services" className="services-section">
      <h1 className="heading">My Services</h1>
      <div className="slider-container">
        <Slider {...settings}>
          <div className="slide">
            <img src={service1} alt="Service 1" />
            <h3>Web Development</h3>
            <p>
              I build modern, responsive, and scalable web applications using
              MERN Stack.
            </p>
          </div>
          <div className="slide">
            <img src={service2} alt="Service 2" />
            <h3>UI/UX Design</h3>
            <p>
              Designing creative, clean, and user-friendly interfaces that
              engage users.
            </p>
          </div>
          <div className="slide">
            <img src={service3} alt="Service 3" />
            <h3>Full Stack Projects</h3>
            <p>
              From backend APIs to frontend interfaces, I deliver complete web
              solutions.
            </p>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Services;
