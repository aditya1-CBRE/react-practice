import React, { useEffect } from "react";
import CountUp, { useCountUp } from "react-countup";

function CountupExample() {
  const { countUp, start, pauseResume, reset, update } = useCountUp({
    end: 1000,
    duration: 5,
    startOnMount: false,
  });

  useEffect(() => {
    console.log("countUp value:", countUp);
  }, [countUp]);

  return (
    <div>
      <div>
        <h1>{countUp}</h1>
        <button onClick={start}>Start</button>
        <button onClick={pauseResume}>Pause/Resume</button>
        <button onClick={reset}>Reset</button>
        <button onClick={() => update(2000)}>Update to 2000</button>
      </div>
      <h1>
        <CountUp end={200} />
      </h1>
      <h1>
        <CountUp end={200} duration={5} />
      </h1>
      <h1>
        <CountUp end={1000} duration={5} start={500} />
      </h1>
      <h1>
        <CountUp end={1000} duration={5} prefix="$" decimals={2} />
      </h1>
      <h1>
        <CountUp end={1000} duration={5} suffix="USD" decimals={2} />
      </h1>
    </div>
  );
}

export default CountupExample;
