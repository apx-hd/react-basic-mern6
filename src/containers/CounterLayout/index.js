import "./CounterLayout.css";
import { useState } from "react";
import Button from "../../components/Button";

function CounterLayout() {
  // let counter = 0;
  const [counter, setCounter] = useState(0);

  const handleIncrease = () => {
    // setCounter(counter + 1)
    setCounter((prev) => prev + 1);
    console.log(counter);
  };

  const handleDecrease = () => {
    // setCounter(counter - 1)
    setCounter((prev) => prev - 1);
    console.log(counter);
  };

  return (
    <div className="counter-container">
      <h1 className="counter-heading">Counter</h1>
      <div className="btn-wrapper">
        <Button handleClick = {handleDecrease} color="error" size="small"> - </Button>
        <span className="count">{counter}</span>
        <Button handleClick = {handleIncrease} color="success" size="large" disabled> + </Button>
      </div>
    </div>
  );
}

export default CounterLayout;
