import "./Card.scss";

export default function Card({ children, className, width, align, style }) {
  const CardStyles = {
    ...style,
    ...(className ? { className } : {}),
    width: width ? `${width}px` : "inherit",
    textAlign: align,
  };

  return (
    <div className={`card ${className}`} style={CardStyles}>
      {children}
    </div>
  );
}
