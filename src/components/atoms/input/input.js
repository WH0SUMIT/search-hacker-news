import "./input.scss";

export default function Input({
  id,
  type,
  placeholder,
  value,
  onChange,
  onBlur,
  onFocus,
  disabled,
  width,
}) {
  const styles = {
    width: `${width}px`,
  };

  if (type === "textarea") {
    return (
      <textarea
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        style={styles}
        disabled={disabled}
      />
    );
  } else {
    return (
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        style={styles}
        onFocus={onFocus}
        disabled={disabled}
      />
    );
  }
}
