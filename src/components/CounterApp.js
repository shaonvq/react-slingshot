import React from "react";
import PropTypes from "prop-types";

const CounterApp = ({ incrementCount, count, resetCount }) => {
  return (
    <div className="grid-container">
      <div className="app">
        <h1>Meow {count}</h1>
        <button onClick={incrementCount}>X3</button>
        <button onClick={resetCount}>reset</button>
      </div>
    </div>
  );
};

CounterApp.propTypes = {
  incrementCount: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  resetCount: PropTypes.func.isRequired
};

export default CounterApp;
