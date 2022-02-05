import Button from "../../atoms/buttons/button";
import "./dropdown.scss";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";

import { useState } from "react";

export default function Dropdown({ children, title }) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <ul>
      <li className="dropdown ">
        <Button
          className="btn-soft"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          {title}
          {showDropdown ? (
            <RiArrowUpSLine className="icon" />
          ) : (
            <RiArrowDownSLine className="icon" />
          )}
        </Button>
        {/* Navbar Dropdown Start */}
        {showDropdown ? (
          <ul
            className="rounded-5"
            style={{
              visibility: "visible",
            }}
          >
            {children}
          </ul>
        ) : (
          <ul
            className="rounded-5"
            style={{
              visibility: "hidden",
            }}
          >
            {children}
          </ul>
        )}
        {/* Navbar Dropdown End */}
      </li>
    </ul>
  );
}
