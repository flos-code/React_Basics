import React, { useEffect, useState } from "react";

/**
 * Nutzen Sie diese Funktion um
 * Stunden, Minuten, Sekunden und Hundertstel
 * als Text zu formatieren
 */
function formatTime(hours, minutes, seconds, hundreds) {
  const [hoursText, minutesText, secondsText, hundredsText] = [
    hours,
    minutes,
    seconds,
    hundreds,
  ].map((i) => `${i}`.padStart(2, 0));

  return `${hoursText}:${minutesText}:${secondsText} '${hundredsText}`;
}

/**
 * Mit dieser Funktion können Sie Millisekunden
 * in seine Bestandteile
 * Stunden, Minuten, Sekunden und Hundertstel
 * aufsplitten
 */
function millisecondsToParts(milliseconds) {
  const secondsFloat = milliseconds / 1000;
  const HOURS_IN_SECONDS = 60 * 60;

  const hours = Math.floor(secondsFloat / HOURS_IN_SECONDS);
  const minutes = Math.floor((secondsFloat % HOURS_IN_SECONDS) / 60);
  const seconds = Math.floor(secondsFloat % 60);
  const hundreds = (secondsFloat % 1).toFixed(2).substring(2);

  return [hours, minutes, seconds, hundreds];
}

export function Stopuhr() {
  // Schritt 1: Statische Werte verarbeiten
  // Schritt 2: Buttons klickbar machen
  // Schritt 3: Startbutton
  // Schritt 4: Pausebutton
  // Schritt 5: Stopbutton

  const [state, setState] = useState({
    isPaused: false,
    timePassed: 0,
  });
  // const [isPaused, setIsPause] = useState(false);
  const [timeRef, setTimeRef] = useState(null);
  // const [timePassed, setTimePassed] = useState(0);
  const [hours, minutes, seconds, hundreds] = millisecondsToParts(
    state.timePassed
  );

  useEffect(() => {
    return () => {
      if (timeRef !== null) {
        clearInterval(timeRef);
      }
    };
  }, [timeRef]);

  const startClicked = () => {
    if (timeRef !== null) {
      clearInterval(timeRef);
    }
    setState({
      timePassed: 0,
      isPause: false,
    });
    setTimeRef(
      setInterval(() => {
        setState((oldValue) => {
          if (oldValue.isPaused) {
            return oldValue;
          }
          return {
            ...oldValue,
            timePassed: oldValue.timePassed + 100,
          };
        });
      }, 100)
    );
  };
  const pauseClicked = () => {
    setState((oldState) => {
      return {
        ...oldState,
        isPaused: !oldState.isPaused,
      };
    });
  };
  const stopClicked = () => {
    if (timeRef !== null) {
      clearInterval(timeRef);
    }
    setState({
      timePassed: 0,
      isPaused: false,
    });
  };

  return (
    <div>
      <h1>Stoppuhr</h1>
      <p>{formatTime(hours, minutes, seconds, hundreds)}</p>
      <div>
        <button type="button" onClick={startClicked}>
          Start
        </button>
        <button type="button" onClick={pauseClicked}>
          Pause
        </button>
        <button type="button" onClick={stopClicked}>
          Stopp
        </button>
      </div>
    </div>
  );
}
