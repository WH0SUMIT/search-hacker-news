import "./Input.scss";

export default function InputElement({
  id,
  type,
  placeholder,
  value,
  onChange,
  className,
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
        className={className}
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
        className={className}
        style={styles}
        onFocus={onFocus}
        disabled={disabled}
      />
    );
  }
}
