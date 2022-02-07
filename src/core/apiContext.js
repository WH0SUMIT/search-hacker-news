// create the api context to fetch all the data from the news api

import axios from "axios";
import React from "react";
import { useState, useEffect, createContext } from "react";
export const ApiContext = createContext();

export default function ApiProvider(props) {
  const [news, setNews] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");

  const [newsFlag, setNewsFlag] = useState(false);
  const newsapi = `http://hn.algolia.com/api/v1/search?query=${searchQuery}`;
  useEffect(() => {
    axios
      .get(newsapi)
      .then((res) => {
        setNews(res.data.hits);
        console.log(res.data.hits);
        setNewsFlag(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchQuery]);

  const newsData = newsFlag ? news : "loading";

  return newsFlag ? (
    <ApiContext.Provider value={{ newsData, searchQuery, setSearchQuery }}>
      {props.children}
    </ApiContext.Provider>
  ) : (
    "loading"
  );
}
