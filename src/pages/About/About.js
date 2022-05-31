import React from "react";
// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";

import "./About.css";
import avatar from "./avatar.png";

export default function About() {
  return (
    <div className="about">
      <div className="profile">
        <div className="introduce">
          <p className="title">Profile</p>
          <p className="title">Megan Sen</p>
          <p>Front end developer based in the UK</p>
          <p>Graduated a coding course Feb 2022</p>
          <p>Internship at dijipiji in the UK since Feb 2022</p>
          <p className="title">Skill</p>
          <p>React</p>
          <p className="title">Contact</p>
          <p className="title">Detail</p>
          CV <FontAwesomeIcon icon={faPaperclip}></FontAwesomeIcon>
        </div>
        <img src={avatar} alt="my-avatar" className="my-avatar" />
      </div>
    </div>
  );
}
