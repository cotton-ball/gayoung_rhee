import React from "react";
import "./about.modules.css";

function About() {

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const randomNum = getRandomInt(1, 4);

  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-box1 z-up">
          <div className="about-header">
            <h2 className="dogica">about</h2>
            <div>
              <img src="/x.png" alt="x" />
            </div>
          </div>
          <div className="about1-content dogica">
            graphic, UIUX,motion,
            <br />
            editorial design
            <br />
            based in SEOUL&TOKYO
            <br />
            <br />
            ~contact~
            <br />
            instagram
            <br />
            gyrhee.e@gmail.com
          </div>
        </div>
        <div className="about-box2">
          <div className="about-header">
            <h2 className="dogica">about</h2>
            <div>
              <img src="/x.png" alt="x" />
            </div>
          </div>
          <div className="about2-content">
            <img src={`/about/i${randomNum}.png`} alt="i1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
