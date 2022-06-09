import React from "react";
// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./Works.css";
import finalproject from "./fina--project.png";
import tvshow from "./tv-show.png";
import cakeshop from "./cake.png";
import dijipiji from "./dijipiji.png"

export default function Works() {
  return (
    <>
      <div id="works-container">
        <div className="cyf-work">
          <div>
            <p className="works-title">Projects at CODE YOUR FUTURE 2021 - 2022</p>
          </div>
          <div className="cards-container">
            <a href="https://sensational-life-asd.herokuapp.com/">
              <div className="work-card">
                <p className="work-title">Final Project</p>
                <img
                  src={finalproject}
                  alt="websiteimage"
                  className="work-img"
                />
              </div>
            </a>
            <a href="https://tv-show-project-cyf.netlify.app/">
              <div className="work-card">
                <p className="work-title">TV SHOW</p>
                <img src={tvshow} alt="websiteimage" className="work-img" />
              </div>
            </a>
            <div className="work-card">
              <p className="work-title">Cake Shop Website</p>
              <img src={cakeshop} alt="websiteimage" className="work-img" />
            </div>
          </div>
        </div>

        <div className="dijipiji-work">
          <div>
            <p className="works-title">Internship at DIJIPIJI.LIMITED 2022</p>
          </div>
          <div className="cards-container">
            <div className="work-card">
              <p className="work-title">dijipiji Website - June 2022 -</p>
              <img src={dijipiji} alt="websiteimage" className="work-img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
