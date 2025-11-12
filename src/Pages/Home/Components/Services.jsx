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
            <h3>Interplanetary Tours</h3>
            <p>
              We organize luxury space trips to nearby planets like Mars and
              Jupiter’s moons for an unforgettable cosmic experience.
            </p>
          </div>
          <div className="slide">
            <img src={service2} alt="Service 2" />
            <h3>Zero-Gravity Adventures</h3>
            <p>
              Experience fun and thrill in zero-gravity zones with our safe and
              exciting orbit-based adventure programs.
            </p>
          </div>
          <div className="slide">
            <img src={service3} alt="Service 3" />
            <h3>Cosmic Cruise Packages</h3>
            <p>
              Enjoy breathtaking views of stars, nebulae, and galaxies while
              relaxing in our luxury interstellar cruise cabins.
            </p>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Services;
