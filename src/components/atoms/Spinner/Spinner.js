import "./Spinner.scss";

export default function Spinner({ text }) {
  return (
    <div className="spinner-container">
      <p>{text ? text : "Loading...."}</p>
      <br />
      <div id="spinner"></div>
    </div>
  );
}
