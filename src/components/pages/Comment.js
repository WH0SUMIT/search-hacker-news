import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "../atoms/Spinner/Spinner";
import Card from "../molecules/Card/Card";
import Dropdown from "../molecules/Dropdown/Dropdown";
import Commentlist from "../molecules/List/Commentlist";

export default function Comment() {
  const newsID = localStorage.getItem("newsId");
  const [commentFlag, setCommentFlag] = useState(false);

  const [commentData, setCommentData] = useState([]);
  useEffect(() => {
    axios.get(`http://hn.algolia.com/api/v1/items/${newsID}`).then((res) => {
      setCommentData(res.data);
      console.log(res.data);
      setCommentFlag(true);
    });
  }, [newsID]);

  if (commentFlag) {
    return (
      <>
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
          <p className="text-button"> {commentData.children.length} results</p>
        </div>
        <Card className="bg-dark">
          <h6
            className="text-xl"
            style={{
              color: "white",
            }}
          >
            {commentData.title} (
            <a
              href={commentData.url}
              target="_blank"
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
                fontSize: ".1.2rem",
              }}
            >
              {commentData.url}
            </a>
            )
          </h6>
          {commentData.children.map((data, index) => {
            const d = new Date(data.created_at);
            return (
              data.text && (
                <Commentlist
                  user={data.author}
                  id={data.id}
                  CommentDate={
                    d.getUTCFullYear() +
                    "/" +
                    (d.getUTCMonth() + 1) +
                    "/" +
                    d.getUTCDate()
                  }
                  CommentText={data.text}
                />
              )
            );
          })}
        </Card>
      </>
    );
  } else {
    return <Spinner text="We're collecting comments for you, Just wait ⏳ " />;
  }
}
