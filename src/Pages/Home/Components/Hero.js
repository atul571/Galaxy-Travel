import React from 'react'
import video from "../../../assets/space.mp4"
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div className="hero">
      <video src={video} autoPlay loop muted></video>
      <div className="content">
        <h1>Travel. Galaxies.</h1>
        <p>
          Lorem Ipsum dolor sit Atul Yadav is greatest of all time in Goodness!
        </p>
        <div className="buttons">
          <Link to="/training">Try Now</Link>
          <Link to="/contact">Launch</Link>
        </div>
      </div>
    </div>
  );
}

export default Hero
