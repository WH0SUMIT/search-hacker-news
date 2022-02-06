import React from "react";
import Navbar from "../organism/Navbar/Navbar";
import Dropdown from "../molecules/Dropdown/Dropdown";

export default function Home() {
  return (
    <div
      style={{
        margin: "2rem",
      }}
    >
      <Navbar />
      <div
        className="search row"
        style={{
          margin: "2rem",
        }}
      >
        <p>Search</p>
        <Dropdown title="All">
          <a>All</a>
          <a>Stories</a>
          <a>Comments</a>
        </Dropdown>
        <p>By</p>
        <Dropdown title="Popularity">
          <a>Popularity</a>
          <a>Date</a>
        </Dropdown>
        <p>For</p>
        <Dropdown title="All Time">
          <a>All Time</a>
          <a>Past Hour</a>
          <a>Past 24 Hours</a>
          <a>Past Week</a>
          <a>Past Month</a>
          <a>Past Year</a>
        </Dropdown>
      </div>
    </div>
  );
}
