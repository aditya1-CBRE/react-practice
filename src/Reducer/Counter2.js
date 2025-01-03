import React, { useReducer } from "react";

const initialState = {
  firstCount: 0,
  secondCount: 10,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCount: state.firstCount + action.value };
    case "decrement":
      return { ...state, firstCount: state.firstCount - action.value };
    case "increment2":
      return { ...state, secondCount: state.secondCount + action.value };
    case "decrement2":
      return { ...state, secondCount: state.secondCount - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function Counter2() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Count value of First Counter - {count.firstCount}</h1>
      <h1>Count value of Second Counter - {count.secondCount}</h1>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        decrement
      </button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        increment 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        decrement 5
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
      <div>
      <button onClick={() => dispatch({ type: "increment2", value: 1 })}>
        Increment Counter 2
      </button>
      <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
        Decrement Counter 2
      </button>
      </div>
    </div>
    
  );
}

export default Counter2;
