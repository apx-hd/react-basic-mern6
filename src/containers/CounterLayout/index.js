import "./CounterLayout.css";
import { useState } from "react";
import Button from "../../components/Button";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../store/slices/counterSlice";

function CounterLayout() {
  // const [counter, setCounter] = useState(0);
  //Using state from redux
  const { value: counter } = useSelector(state => state.counter)
  //Initialize a dispatch object
  const dispatch = useDispatch();

  const handleIncrease = () => {
    // setCounter(counter + 1)
    // setCounter((prev) => prev + 1);

    //Using redux
    dispatch(increment());
  };

  const handleDecrease = () => {
    // setCounter(counter - 1)
    // setCounter((prev) => prev - 1);

    //Using redux
    dispatch(decrement())
  };

  return (
    <div className="counter-container">
      <h1 className="counter-heading">Counter</h1>
      <div className="btn-wrapper">
        <Button handleClick = {handleDecrease} color="error" size="small"> - </Button>
        <span className="count">{counter}</span>
        <Button handleClick = {handleIncrease} color="success" size="small"> + </Button>
      </div>
    </div>
  );
}

export default CounterLayout;
