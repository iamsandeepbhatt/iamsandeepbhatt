import React from "react";
import Banner from "./Banner";
import "./Home.css";
import R1Card from "./R1Card";
import R2Card from "./R2Card";
import Comment from "./Comment";
import SocialMedia from "./SocialMedia";
import Footer from "./Footer";
import Channel from "./Channel";

export default function Home() {
  return (
    <>
      <Banner />
      <Channel />
      <h2 className="Home_Heading">Latest Videos from Trick It</h2>
      <div className="R1Card_Container">
        <R1Card />
      </div>
      <br /> <br />
      <h2 className="Home_Heading">Latest Videos from WoW Geography</h2>
      <div className="R1Card_Container">
        <R2Card />
      </div>
      <br /> <br />
      <Comment />
      <SocialMedia />
      <Footer />
    </>
  );
}
