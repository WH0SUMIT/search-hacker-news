import { useContext } from "react";
import { ApiContext } from "../../../core/apiContext";
import "./Newslist.scss";

export default function Newslist({
  newsTitle,
  newsURL,
  newsPoints,
  newsUser,
  newsDate,
  newsComments,
  newsId,
}) {
  const newsTitles = useContext(ApiContext);
  return (
    <div className="newslist">
      <div className="newslist__title">
        {newsTitles} (
        <a href={newsURL} target="_blank">
          {newsURL}
        </a>
        )
      </div>
      <span>{newsPoints} Points</span> | <span>{newsUser}</span> |
      <span>{newsDate}</span> | <span>{newsComments} Comments</span>
    </div>
  );
}
