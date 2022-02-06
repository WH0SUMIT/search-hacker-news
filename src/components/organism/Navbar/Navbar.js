import "./Navbar.scss";

import React from "react";
import Input from "../../atoms/Input/Input";
import { RiSettings2Fill } from "react-icons/ri";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="">Search Hacker News</a>
      </div>
      <div className="navbar-search">
        <Input
          type="text"
          placeholder="Search Hackers News"
          width="700"
          className="input-pill"
        />
      </div>
      <RiSettings2Fill className="setting" />
    </nav>
  );
}
