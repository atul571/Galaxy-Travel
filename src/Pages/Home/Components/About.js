import React from 'react'

const About = ({heading}) => {
  return (
    <>
      <h1 className="heading">{heading}</h1>
      <div>
        <section className="about">
          <img src={require("../../../assets/aboutImg.jpg")} alt="" />
          <div classname="content">
            <h2>About Galaxy Travel</h2>
            <p>
              Galaxy Travel is a futuristic space tourism company dedicated to
              making space exploration possible for everyone. Our mission is to
              take travelers beyond Earth and offer them a once-in-a-lifetime
              cosmic experience.
            </p>
            <p>
              With advanced spacecraft, luxury space cabins, and AI-assisted
              guidance, Galaxy Travel ensures every journey is safe, exciting,
              and unforgettable. We believe the universe is meant to be explored
              — and we make it happen.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default About
