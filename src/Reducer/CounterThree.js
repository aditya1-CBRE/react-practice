import React, { useReducer } from "react";

const intialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return intialState;
    default:
      return state;
  }
};

function CounterThree() {
  const [count, dispatch] = useReducer(reducer, intialState);
  const [countTwo,dispatchTwo]=useReducer(reducer,intialState)
  return (
    <div>
      <h1>Count Value - {count}</h1>
      <button
        onClick={() => {
          dispatch("increment");
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch("decrement");
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch("reset");
        }}
      >
        Reset
      </button>
      <div>
      <h1>Count Value of Counter Two - {countTwo}</h1>
      <button
        onClick={() => {
          dispatchTwo("increment");
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatchTwo("decrement");
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatchTwo("reset");
        }}
      >
        Reset
      </button>
    </div>
    </div>
  );
}

export default CounterThree;
