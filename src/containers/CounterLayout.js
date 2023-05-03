import "./CounterLayout.css";

function CounterLayout() {
  let counter = 0;

  const handleIncrease = () => {
    counter++;
    console.log(counter);
  };
  const handleDecrease = () => {
    counter--;
    console.log(counter);
  };

  return (
    <div className="counter-container">
      <h1 className="counter-heading">Counter</h1>
      <div className="btn-wrapper">
        <button className="counter-btn" onClick={handleDecrease}>-</button>
        <span className="count">{counter}</span>
        <button className="counter-btn" onClick={handleIncrease}>+</button>
      </div>
    </div>
  );
}

export default CounterLayout;
