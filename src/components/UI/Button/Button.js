import "./Button.css";

const Button = ({ className, children, type, onClick }) => {
  return (
    <button
      type={type === "submit" ? "submit" : "button"}
      className={`btn ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;