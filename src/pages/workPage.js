import React from "react";
import { NavLink } from "react-router-dom";
import Caravelle from "../assets/img/caravelle.png";
import Coversy from "../assets/img/coversy.PNG";
import JavaBlog from "../assets/img/javablog.PNG";

export const WorkPages = () => {
  return (
    <div className="MainContainer">
      <div className="container box">
        <div className="container-box">
          <div className="title-box">
            <h1>My Works</h1>
          </div>
          <div className="profolio">
            <div className="ctn">
              <NavLink
                target="_blank"
                to={{
                  pathname:
                    "https://caravelle.vercel.app/?fbclid=IwAR3AyyZnvuDA3E-dARvyVmx9pLof1-EZbdVDj45051YIH6JpAQ17rQHPPWI",
                }}
              >
                <div className="item">
                  <img src={Caravelle} alt="caravelle" />
                  <h3>Caravelle Restaurant</h3>
                </div>
              </NavLink>
              <NavLink
                target="_blank"
                to={{
                  pathname: "https://coversy.vercel.app/",
                }}
              >
                <div className="item">
                  <img src={Coversy} alt="coversy" />
                  <h3>Coversy</h3>
                </div>
              </NavLink>
              <NavLink
                target="_blank"
                to={{
                  pathname: "https://huumaica.wordpress.com/",
                }}
              >
                <div className="item">
                  <img src={JavaBlog} alt="javablog" />
                  <h3>Java Blog</h3>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
