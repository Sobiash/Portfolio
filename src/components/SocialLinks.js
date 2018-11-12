import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socialLinks = () => {
  return (
    <div className="links">
      <a
        href="https://twitter.com/sobia_shahbaz"
        className="social-link"
        title="Twitter"
        target="_blank"
      >
        <FontAwesomeIcon icon={["fab", "twitter"]} className="blue" />
      </a>
      <a
        href="https://github.com/Sobiash"
        className="social-link"
        title="Github"
        target="_blank"
      >
        <FontAwesomeIcon icon={["fab", "github"]} className="black" />
      </a>
      <a
        href="https://www.linkedin.com/in/sobia-shahbaz"
        className="social-link"
        title="Linkedin"
        target="_blank"
      >
        <FontAwesomeIcon icon={["fab", "linkedin"]} className="dark-blue" />
      </a>
      <a
        href="mailto:sobiashahbaz66@yahoo.com"
        className="social-link"
        title="email me"
        target="_blank"
      >
        <FontAwesomeIcon icon="envelope" className="red" />
      </a>
      <a
        href="https://www.instagram.com/sobia.shahbaz/"
        className="social-link"
        title="Instagram"
        target="_blank"
      >
        <FontAwesomeIcon icon={["fab", "instagram"]} className="purple" />
      </a>
    </div>
  );
};

export default socialLinks;
