import React from "react";
import RainBowText from "../RainBowText/RainBowText";
import "../../styles/About/About.scss";
import SocialLinks from "../Social Links/SocialLinks";
import "../../styles/Social Links/SocialLinks.scss";
import img from "../../styles/About/sobia.shahbaz.jpg";

const about = () => {
  const about = ["A", "B", "O", "U", "T"];
  return (
    <div className="about">
      <div className="center">
        {" "}
        <RainBowText text={about} className="text-center" />
      </div>

      <div className="bio">
        <div className="bio__pic">
          <img src={img} alt="Sobia Shahbaz" />
        </div>
        <div className="bio__desc">
          <p>
            I have the really cool job of teaching other people how to code at{" "}
          </p>
          <p>
            My favorite stack is React.js on the frontend. I also have worked
            with JavaScript, SASS, CSS, Php, Wordpress.
          </p>
          <p>
            When I'm not working you can find me watching my favorite New
            England sports teams, competing on CodeWars, taking runs around
            Capitol Hill, rock climbing, or participating in DC coding community
            events.
          </p>
          <p>
            I graduated from University of Southeastern Norway with a MSc in
            management completing research in how Digital Marketing affects a
            Business and scored 85% score in my research.
          </p>
        </div>

        <SocialLinks />
      </div>
    </div>
  );
};

export default about;
