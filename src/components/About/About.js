import React from "react";
import RainBowText from "../RainBowText/RainBowText";
import "./About.css";
import SocialLinks from "../Social Links/SocialLinks";
import img from "./sobia.shahbaz.jpg";

const about = () => {
  const about = ["A", "B", "O", "U", "T"];
  return (
    <div className="about">
      <RainBowText text={about} />
      <div class="bio">
        <img src={img} alt="Sobia Shahbaz" />
        <p>
          I have the really cool job of teaching other people how to code at{" "}
          {/* <span class="highlighted-purple">General Assembly DC's</span>
          Web Development Immersive program. Before that, I was a software
          engineer at <span class="highlighted-blue">0ptimus</span>. */}
        </p>
        <p>
          My favorite stack is React.js on the frontend. I also have worked with
          JavaScript, SASS, CSS, Php, Wordpress.
        </p>
        <p>
          When I'm not working you can find me watching my favorite New England
          sports teams, competing on CodeWars, taking runs around Capitol Hill,
          rock climbing, or participating in DC coding community events.
        </p>
        <p>
          I graduated from University of Southeastern Norway with a MSc in
          management completing research in how Digital Marketing affects a
          Business and scored 85% score in my research.
        </p>
      </div>
      <SocialLinks />
    </div>
  );
};

export default about;
