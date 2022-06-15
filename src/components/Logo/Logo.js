import React from "react";
import { Link } from "react-router-dom";
import "./Logo.css";

function Logo() {
  return (
    <>
      <div className="logo">
        <Link className="link" to="/">
          <h1>Megan Sen</h1>
        </Link>
        {/* <h3>Front End Developer - JavaScript & React</h3> */}
      </div>
    </>
  );
}
export default Logo;
