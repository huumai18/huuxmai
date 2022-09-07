import React from "react";
import { Typewriter } from "react-simple-typewriter";

export const AboutPage = () => {
  return (
    <div className="MainContainer">
      <div className="container box">
        <div className="container-box">
          <div className="title-box">
            <h1>About Me</h1>
          </div>
          <div className="title-text">
            <p>
              Recent diploma graduate with Information Technology major Software
              Development with 2 years experience at Full-Stack Developer.
              Seeking to leverage 4.0 GPA for Database Admin and Emerging Trends
              in Tech, and 3.7 GPA for related experience for Web Application
              Programming. Seeking to use good at React JS, HTML5,
              CSS3/SCSS, Javascript, BootStrap, Wordpress for Font-End skills as
              Capstones Project with good at teamwork skills. Moreover, MongoDB,
              SQL Oracle, and Node/Express JS for additional my
              Back-End Skills. And, Ruby on Rails for Developer skills. I am
              willing to learn new enhance programming and design skills.
              <Typewriter
                loop={0}
                cursor
                typeSpeed={80}
                cursorStyle="_"
                words={[""]}
              ></Typewriter>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
