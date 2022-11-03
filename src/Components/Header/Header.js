import React from "react";
import "./Header.css";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <>
      <div id="HeaderBox">
        {/* <h2 id="logo">
          Sandeep <br /> Bhatt
        </h2> */}
        <div id="logo">
          <img src={require("../../images/logo.png")} alt="my_iamge" />
        </div>
        <NavBar />
        <input className="search" type="text" placeholder="Search" />
      </div>
    </>
  );
}
