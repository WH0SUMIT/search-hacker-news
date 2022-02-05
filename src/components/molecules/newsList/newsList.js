import "./newsList.scss";
export default function newsList({
  newsTitle,
  newsURL,
  newsPoints,
  newsUser,
  newsDate,
  newsComments,
  newsContent,
}) {
  return (
    <div className="newslist">
      <div className="newslist__title">
        {newsTitle} (
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
