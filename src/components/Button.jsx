import React, { useState } from "react";

export function Button() {
  const [headline, setHeadline] = useState("");
  const [inputValue, setInputValue] = useState("");
  const buttonClick = () => {
    setHeadline(inputValue);
  };
  const inputChnage = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h1>{headline}</h1>
      <input type="text" onInput={inputChnage} />
      <br />

      <button type="button" onClick={buttonClick}>
        Click me
      </button>
    </div>
  );
}
