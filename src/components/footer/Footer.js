import React from "react";
import emoji from "react-easy-emoji";
import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer-div">
      <p className="footer-text">
        {emoji("© Josh Davis • Senior Manager, Developer Platform • Platform Engineering")}
      </p>
      <p className="footer-text">
        Built with React for developer platform, cloud governance, and enterprise architecture storytelling.
      </p>
    </div>
  );
}
