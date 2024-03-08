import React from "react";

export function Tasks() {
  const tasks = ["React lernen", "Mit hund gassi", "obst essen", "brot kaufen"];
  return (
    <div>
      <h1>Meine heutigen Tasks:</h1>
      <ul>
        {tasks.map((taskText, index) => (
          <li key={index}>{taskText}</li>
        ))}
      </ul>
    </div>
  );
}

//key eindeutig besser object mit id und text, weil mit index unnötiges neuladen hervorgerufe
