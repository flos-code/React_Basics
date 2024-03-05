import React, { useCallback, useEffect, useMemo, useState } from "react";

export function CountdownMemo() {
  const [countdown, setCountdown] = useState(10);
  const timeoutFunc = useCallback(() => {
    if (countdown > 0) {
      setCountdown(countdown - 1);
    }
  }, [countdown]);
  useEffect(() => {
    const ref = setTimeout(timeoutFunc, 1000);
    return () => clearTimeout(ref);
  }, [countdown]);

  const markup = useMemo(() => {
    return (
      <div>
        <h1>Countdown</h1>
        <p>{countdown}</p>
        <progress value={countdown} min="0" max="10"></progress>
      </div>
    );
  }, [countdown]); //ComponentnShouldUpdate

  return markup;
}
