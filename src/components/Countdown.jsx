import React, { useCallback, useEffect, useState } from "react";

export function Countdown() {
  const [countdown, setCountdown] = useState(10);
  const timeoutFunc = useCallback(() => {
    if (countdown > 0) {
      setCountdown(countdown - 1);
    }
  }, [countdown]);
  useEffect(() => {
    // const ref = setTimeout(() => {
    //   if (countdown > 0) {
    //     setCountdown(countdown - 1);
    //   }
    // }, 1000);

    const ref = setTimeout(timeoutFunc, 1000);

    return () => clearTimeout(ref);

    // //Method emit intervall
    // const ref = setInterval(() => {
    //   setCountdown((oldCountdownValue) => {
    //     if (oldCountdownValue > 0) {
    //       return oldCountdownValue - 1;
    //     }
    //     return 0;
    //   });
    // }, 1000);

    // return () => {
    //   window.clearInterval(ref);
    // };
  }, [countdown]);
  return (
    <div>
      <h1>Countdown</h1>
      <p>{countdown}</p>
      <progress value={countdown} min="0" max="10"></progress>
    </div>
  );
}
