import React from 'react';

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div className="picture-container">    
        <img
          src="/images/me.png"
          alt="My Picture"
          className="profile-picture"
        />
      </div>
      <div className="text-container">
        <p className="about-me-paragraph">
          Hi there! I'm John Lavender, a passionate Software Developer with a love for technology and good
          software development. I've been on an exciting journey of learning and growth, and I'm eager to
          share my experiences and insights with you. You can find me working on creating my own video game,
          cooking, motorcycling, practicing piano, or enjoying nature. Let's connect and discuss!
        </p>
      </div>
      <style>{`
        .about-me-container {
          display: flex;
          align-items: flex-start;
        }
        .picture-container {
          flex: 1;
          margin-right: 20px;
        }
        .profile-picture {
          max-width: 100%;
          border-radius: 50%;
        }
        .text-container {
          flex: 2;
        }
        .about-me-paragraph {
          font-size: 16px;
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
};

export default AboutMe;
