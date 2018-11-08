import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socialLinks = () => {
  return (
    <div className="links">
      <a href="#" className="social-link" title="Twitter">
        <FontAwesomeIcon icon={["fab", "twitter"]} className="blue" />
      </a>
      <a
        href="https://github.com/Sobiash"
        className="social-link"
        title="Github"
      >
        <FontAwesomeIcon icon={["fab", "github"]} className="black" />
      </a>
      <a
        href="https://www.linkedin.com/in/sobia-shahbaz"
        className="social-link"
        title="Linkedin"
      >
        <FontAwesomeIcon icon={["fab", "linkedin"]} className="dark-blue" />
      </a>
      <a
        href="mailto:sobiashahbaz66@yahoo.com"
        className="social-link"
        title="email me"
      >
        <FontAwesomeIcon icon="envelope" className="red" />
      </a>
      <a href="#" className="social-link" title="Instagram">
        <FontAwesomeIcon icon={["fab", "instagram"]} className="purple" />
      </a>
    </div>
  );
};

export default socialLinks;
