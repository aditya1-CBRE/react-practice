import React, { useState } from "react";

function HookCounter() {
  const [count, setCount] = useState(0);
  const ClickHandler = () => {
    setCount(count+1);
  };
  return (
    <div>
      <button onClick={ClickHandler}>Click{count}</button>
    </div>
  );
}

export default HookCounter;
