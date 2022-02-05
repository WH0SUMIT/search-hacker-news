import "./button.scss";

export default function Button({ children, className, onClick, disabled }) {
  if (disabled === true) {
    return <button disabled>{children}</button>;
  } else {
    return (
      <button className={className} onClick={onClick}>
        {children}
      </button>
    );
  }
}
