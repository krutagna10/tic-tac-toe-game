import "./Button.css";

function Button({ children, className, onClick, type }) {
  return (
    <button
      className={`btn ${className}`}
      onClick={onClick}
      type={type === "submit" ? "submit" : "button"}
    >
      {children}
    </button>
  );
}

export default Button;
