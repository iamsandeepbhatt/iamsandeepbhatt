import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <>
      <nav id="Nav_Box">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/ContactUs">Contact Us</NavLink>
        <NavLink to="/AboutUs">About Us</NavLink>
        <NavLink to="/AboutUs" className={"navhover"}>
          Sign Up
        </NavLink>
      </nav>
    </>
  );
}
