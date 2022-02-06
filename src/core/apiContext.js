// create the api context to fetch all the data from the news api

import axios from "axios";
import React from "react";
import { useState, useEffect, createContext } from "react";
export const ApiContext = createContext();

export default function ApiProvider(props) {
  const [news, setNews] = useState([]);
  const [newsFlag, setNewsFlag] = useState(false);
  const newsapi = "http://hn.algolia.com/api/v1/search?query=test";
  useEffect(() => {
    axios
      .get(newsapi)
      .then((res) => {
        console.log(res.data.hits);
        setNews(res.data.hits);
        setNewsFlag(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setNews]);

  const newsTitle = newsFlag ? news : "loading";
  console.log(newsTitle);
  return newsFlag ? (
    <ApiContext.Provider value={newsTitle}>
      {props.children}
    </ApiContext.Provider>
  ) : (
    "loading"
  );
}
