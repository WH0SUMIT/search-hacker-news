import "./Navbar.scss";

import { useContext } from "react";
import Input from "../../atoms/Input/Input";
import { RiSettings2Fill } from "react-icons/ri";
import { ApiContext } from "../../../core/apiContext";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { setSearchQuery } = useContext(ApiContext);
  const getSearchQuery = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Search Hacker News</Link>
      </div>
      <div className="navbar-search">
        <Input
          type="text"
          placeholder="Search Hackers News 🔍"
          width="700"
          className="input-pill"
          onChange={getSearchQuery}
        />
      </div>
      <RiSettings2Fill className="setting" />
    </nav>
  );
}
