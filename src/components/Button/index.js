import "./Button.css";

function Button(props) {
  return (
    <button
      className={`counter-btn 
      ${props.color === "success" ? "green" : ""} 
      ${props.color === "error" ? "red" : ""}
      ${props.size === "small" ? "small" : ""}
      ${props.size === "large" ? "large" : ""}
      `}
      onClick={props.handleClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}

export default Button;
