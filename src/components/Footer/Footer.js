import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <footer>
        <div className="icons">
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
        </div>
      </footer>
    </>
  );
}
export default Footer;
