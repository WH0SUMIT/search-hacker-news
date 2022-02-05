import "./card.scss";

export default function Card({ children, className, width, align }) {
  const CardStyles = {
    ...(className ? { className } : {}),
    width: width ? `${width}px` : "350px",
    textAlign: align,
  };

  if (width === "inherit") {
    CardStyles.width = "inherit";
  }

  return (
    <div className={`card ${className}`} style={CardStyles}>
      {children}
    </div>
  );
}
