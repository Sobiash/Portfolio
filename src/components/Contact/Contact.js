import React from "react";
import RainBowText from "../RainBowText/RainBowText";
import SocialLinks from "../Social Links/SocialLinks";
import "../../styles/Social Links/SocialLinks.scss";
import "../../styles/Contact/Contact.scss";

const contact = () => {
  const contact = ["C", "O", "N", "T", "A", "C", "T"];
  return (
    <div>
      <div className="contact">
        <RainBowText text={contact} className="text-center" />
      </div>
      <SocialLinks />
    </div>
  );
};

export default contact;
