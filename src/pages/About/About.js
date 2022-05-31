import React from "react";
// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./About.css";
import avatar from "./avatar.png";

export default function About() {
  return (
    <div className="about">
      <div className="profile">
        <img src={avatar} alt="my-avatar" className="my-avatar"/>
      </div>
      <p></p>
    </div>
  );
}
