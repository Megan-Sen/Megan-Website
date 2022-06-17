import React from "react";
// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import "./About.css";
import Footer from "../../components/Footer/Footer";
// import avatar from "./avatar.png";

export default function About() {
  return (
    <div className="about">
      <div className="profile">
        <div className="introduce">
          <p className="title-1">Profile</p>
          <hr></hr>
          <p className="title">Megan Sen</p>
          <p>Front End Developer based in the UK</p>
          <p>Internship at DIJIPIJI LIMITED in Edinburgh since Feb 2022</p>
          <p>
            Graduated from 1 year coding course CODE YOUR FUTURE in Feb 2022
          </p>
          <p className="title">Skill</p>
          <p>React, Javascript, Node.js</p>

          <p className="title">Contact</p>
          <p>megan@dijipiji.is</p>
          <p className="title">Detail</p>
          <p>
            CV <FontAwesomeIcon icon={faPaperclip}></FontAwesomeIcon>
          </p>
        </div>
        {/* <div className="avatar">
          <div className="my-avatar-shadow-2"></div>
          <div className="my-avatar-shadow-1"></div>
          <img src={avatar} alt="my-avatar" className="my-avatar" />
        </div> */}
      </div>
      <div className="fixed-footer">
        <Footer />
      </div>
    </div>
  );
}
