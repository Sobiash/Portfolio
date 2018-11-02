import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitterSquare } from "@fortawesome/free-solid-svg-icons";

const contact = () => {
  return (
    <div>
      <div className="links">
        <a href="#" className="social-link" title="Twitter">
          <FontAwesomeIcon icon={["fab", "faTwitterSquare"]} />
        </a>
        <a
          href="https://github.com/Sobiash"
          className="social-link"
          title="Github"
        >
          <i className="fa fa-github purple" aria-hidden="true" />
        </a>
        <a
          href="https://www.linkedin.com/in/sobia-shahbaz"
          className="social-link"
          title="Linkedin"
        >
          <i className="fa fa-linkedin dark-blue" aria-hidden="true" />
        </a>
        <a
          href="mailto:ali07cat07@gmail.com"
          className="social-link"
          title="email me"
        >
          <i className="fa fa-envelope red" aria-hidden="true" />
        </a>
        <a href="#" className="social-link" title="Instagram">
          <i className="fa fa-instagram purple" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
};

export default contact;
