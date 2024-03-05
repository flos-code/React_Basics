import React, { useState } from "react";

export function Apple() {
  const [counterStat, setCounterState] = useState(0);
  const [counterStat2, setCounterState2] = useState(0);
  //   const counterValue = 123;
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          setCounterState(counterStat + 1);
          setCounterState2(counterStat2 + 2);
        }}
      >
        Klick
      </button>
      CounterValue = {counterStat}, CounterValue2 = {counterStat2}
    </div>
  );
}
