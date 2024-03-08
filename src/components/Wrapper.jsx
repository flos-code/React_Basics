import React from "react";

export function Wrapper() {
  const terms = [
    {
      term: "Firefox",
      description: "Firefox is a Web Browser",
    },
    {
      term: "Spaghetti",
      description: "Spaghetti is Pasta",
    },
  ];
  return (
    <>
      <h1>Frgment</h1>

      <dl>
        {terms.map((termObj) => {
          return (
            <React.Fragment key={termObj.term}>
              <dt>{termObj.term}</dt>
              <dd>{termObj.description}</dd>
            </React.Fragment>
          );
        })}
      </dl>

      <p>Hallo Hans</p>
    </>
  );
}

//  <> - kurzschriebweise für react.fragment
// key kann nicht in kurzschriebweise übergeben werden
