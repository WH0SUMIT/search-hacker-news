import "./list.scss";

export default function Commentlist({
  user,
  id,
  CommentDate,
  CommentText,

  style,
}) {
  const Text = CommentText.replace(/<[^>]+>/g, "");
  return (
    <>
      <div className="commentlist" style={style}>
        <div className="commentlist-title">
          {user} ( {CommentDate} ){" "}
        </div>
        {Text}
      </div>
    </>
  );
}
