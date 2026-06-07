import React from "react";

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div className="about-me-picture-container">
        <img src="/images/me.png" alt="My Picture" className="about-me-profile-picture" />
      </div>
      <div className="about-me-text-container">
        <p className="about-me-paragraph">
          Hi there! I'm John Lavender, a passionate Software Developer with a love for technology and good
          software development. I've been on an exciting journey of learning and growth, and I'm eager to
          share my experiences and insights with you. You can find me working on creating my own video game,
          cooking, motorcycling, practicing piano, or enjoying nature. Let's connect and discuss!
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
