import "./Spinner.scss";

export default function Spinner({ text: text = "Loading..." }) {
  return (
    <div className="spinner-container">
      <p>{text}</p>
      <br />
      <div id="spinner"></div>
    </div>
  );
}
