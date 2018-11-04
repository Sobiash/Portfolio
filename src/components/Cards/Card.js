import React from "react";
import Projects from "./Projects.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Card.scss";

const card = () => {
  return (
    <div className="container">
      {Projects.map(details => {
        return (
          <div className="card" key={details.id}>
            <h5>{details.name}</h5>
            <div>
              <FontAwesomeIcon icon={details.icons} className="icons" />
            </div>
            <p>{details.tools.join(", ")}</p>
            <ul>
              <li>
                <a href={details.deploy_link} target="_blank">
                  View Project
                </a>
              </li>
              <li>
                <a href={details.code_link} target="_blank">
                  View Code
                </a>
              </li>
            </ul>
            <p className="description">{details.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default card;
