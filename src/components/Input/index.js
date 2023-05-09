import "./Input.css";

function Input(props) {
  return (
    <input
      type={props.type}
      className="input"
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  );
}

export default Input;
