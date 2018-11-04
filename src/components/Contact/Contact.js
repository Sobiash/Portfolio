import React from "react";
import RainBowText from "../RainBowText/RainBowText";
import SocialLinks from "../Social Links/SocialLinks";
import "../Social Links/SocialLinks.scss";
import "./Contact.scss";

const contact = () => {
  const contact = ["C", "O", "N", "T", "A", "C", "T"];
  return (
    <div>
      <div className="contact">
        <RainBowText text={contact} />
      </div>
      <SocialLinks />
    </div>
  );
};

export default contact;
