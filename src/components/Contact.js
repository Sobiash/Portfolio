import React from "react";
import RainBowText from "./RainBowText";
import SocialLinks from "./SocialLinks";
import "../styles/SocialLinks.scss";
import "../styles/Contact.scss";

const contact = () => {
  const contact = ["C", "O", "N", "T", "A", "C", "T"];
  return (
    <div>
      <div className="contact">
        <RainBowText text={contact} className="text-center" />
      </div>
      <SocialLinks className="social-link" />
    </div>
  );
};

export default contact;
