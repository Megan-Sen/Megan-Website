import React from "react";
import { Link } from "react-router-dom";
import "./Logo.css";

function Logo() {
  return (
    <>
      <header>
        <Link className="link" to="/">
          <h1>Megan Sen</h1>
        </Link>
      </header>
    </>
  );
}
export default Logo;
