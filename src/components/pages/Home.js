import { useContext } from "react";
import { ApiContext } from "../../core/apiContext";

import React from "react";
import Navbar from "../organism/Navbar/Navbar";
import Dropdown from "../molecules/Dropdown/Dropdown";
import Card from "../molecules/Card/Card";
import Newslist from "../molecules/Newslist/Newslist";

export default function Home() {
  const news = useContext(ApiContext);
  console.log(news);
  return (
    <div
      style={{
        margin: "2rem",
      }}
    >
      {/* Navbar Component  */}
      <Navbar />

      {/* Search Funtionality */}
      <div
        className="search-container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          className="search row"
          style={{
            margin: "2rem",
          }}
        >
          <p>Search</p>
          <Dropdown title="All">
            <a href="/#">All</a>
            <a href="/#">Stories</a>
            <a href="/#">Comments</a>
          </Dropdown>
          <p>By</p>
          <Dropdown title="Popularity">
            <a href="/#">Popularity</a>
            <a href="/#">Date</a>
          </Dropdown>
          <p>For</p>
          <Dropdown title="All Time">
            <a href="/#">All Time</a>
            <a href="/#">Past Hour</a>
            <a href="/#">Past 24 Hours</a>
            <a href="/#">Past Week</a>
            <a href="/#">Past Month</a>
            <a href="/#">Past Year</a>
          </Dropdown>
        </div>
        <p>{news.length} results</p>
      </div>

      {/* Card Component With News List */}

      <Card className="bg-dark">
        {news.map((data, index) => {
          const d = new Date(data.created_at);
          return (
            <Newslist
              key={index}
              style={{
                margin: "1rem",
              }}
              newsTitle={data.title}
              newsURL={data.url}
              newsPoints={data.points}
              newsUser={data._highlightResult.author.value}
              newsDate={d.getUTCFullYear()}
              newsComments={data.num_comments}
              newsId={data.id}
            ></Newslist>
          );
        })}
      </Card>
    </div>
  );
}
