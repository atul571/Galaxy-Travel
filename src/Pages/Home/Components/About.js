import React from 'react'

const About = () => {
  return (
    <>
      <h1 className="heading">About us</h1>
      <div>
        <section className="about">
          <img src={require("../../../assets/aboutImg.jpg")} alt="" />
          <div classname="content">
            <h2>Lorem, ipsum dolor.</h2>
            <p>
              Lorem Atul Yadva is a good human being whos dream is to make
              everone happy and give a or spread positive vibes around himself
            </p>
            <p>
              lorem Lorem Atul Yadva is a good human being whos dream is to make
              everone happy and give a or spread positive vibes around himself
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default About
