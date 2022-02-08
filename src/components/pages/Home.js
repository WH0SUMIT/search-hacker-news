import { useContext } from "react";
import { ApiContext } from "../../core/apiContext";

import React from "react";

import Dropdown from "../molecules/Dropdown/Dropdown";
import Card from "../molecules/Card/Card";
import Newslist from "../molecules/List/Newslist";
import { Link } from "react-router-dom";

export default function Home() {
  const { newsData } = useContext(ApiContext);
  console.log(newsData);
  return (
    <>
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
            <a href="/#">
              This is just for UI, it does not have any functionality yet!
            </a>
          </Dropdown>
          <p>By</p>
          <Dropdown title="Popularity"></Dropdown>
          <p>For</p>
          <Dropdown title="All Time"></Dropdown>
        </div>
        <p> {newsData.length} News Results</p>
      </div>

      {/* Card Component With News List */}

      <Card className="bg-dark">
        {newsData.map((data, index) => {
          const d = new Date(data.created_at);
          return (
            data.title && (
              <Link
                to={`/comment/${data.objectID}`}
                key={index}
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
                onClick={() => {
                  localStorage.setItem("newsId", data.objectID);
                }}
              >
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
              </Link>
            )
          );
        })}
      </Card>
    </>
  );
}
