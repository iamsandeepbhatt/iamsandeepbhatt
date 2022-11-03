import React from "react";
import "./SocialMedia.css";

export default function SocialMedia() {
  return (
    <div id="SMBox">
      <h1 className="SocialMedia_Heading">Connect with us on Social Media</h1>
      <br />
      <br />
      <div id="Social_Media_Icons">
        <a href="https://youtube.com/trickit">
          <img src={require("./../images/icons-youtube.png")} alt="youtube" />
        </a>
        <a href="https://youtube.com/trickit">
          <img
            src={require("./../images/icons-instagram.png")}
            alt="instagram"
          />
        </a>
        <a href="https://youtube.com/trickit">
          <img src={require("./../images/icons-telegram.png")} alt="telegram" />
        </a>
        <a href="https://youtube.com/trickit">
          <img src={require("./../images/icons-linkedin.png")} alt="linkedin" />
        </a>
        <a href="https://youtube.com/trickit">
          <img src={require("./../images/icons-twitter.png")} alt="twitter" />
        </a>
        <a href="https://youtube.com/trickit">
          <img src={require("./../images/icons-facebook.png")} alt="facebook" />
        </a>
      </div>
    </div>
  );
}
