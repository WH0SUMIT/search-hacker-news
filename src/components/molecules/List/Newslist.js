import "./list.scss";

export default function Newslist({
  newsTitle,
  newsURL,
  newsPoints,
  newsUser,
  newsDate,
  newsComments,
  newsId,
  style,
}) {
  return (
    <div className="newslist" style={style}>
     
      <div className="newslist-title">
        {newsTitle} (
        <a href={newsURL} target="_blank">
          {newsURL}
        </a>
        )
      </div>
      <span>{newsPoints} Points</span> | <span>{newsUser}</span> |{" "}
      <span>{newsDate}</span> | <span>{newsComments} Comments</span>
    </div>
  );
}
