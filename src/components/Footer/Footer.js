import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"; 

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="icons">
          <i class="fa-solid fa-circle-plus fa-beat"></i>
          <FontAwesomeIcon icon={faGithub} className="icon"></FontAwesomeIcon>
          <FontAwesomeIcon icon={faLinkedin} className="icon"></FontAwesomeIcon>
          <FontAwesomeIcon icon={faEnvelope} className="icon"></FontAwesomeIcon>
        </div>
      </div>
    </>
  );
}
export default Footer;
<FontAwesomeIcon icon="fa-brands fa-github" />;