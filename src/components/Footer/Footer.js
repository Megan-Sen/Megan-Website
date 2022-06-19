import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="icons">
          <i class="fa-solid fa-circle-plus fa-beat"></i>
          <a
            href="https://github.com/Megan-Sen"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="icon" alt="github-icon"/>
          </a>
          <a
            href="https://www.linkedin.com/in/megan-sen-5429b6218/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon" alt="linkedin-icon"/>
          </a>
          {/* <FontAwesomeIcon icon={faEnvelope} className="icon" /> */}
        </div>
      </div>
    </>
  );
}
export default Footer;
