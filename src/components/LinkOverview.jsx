import React from "react";
import { LinkChecker } from "./LinkChecker";

export function LinkOverview() {
  return (
    <div>
      <h1>LinkOverview</h1>

      <LinkChecker />
      <hr />
      <ul>
        <li>
          <a href="https://scholz-florian.com/">Protfolio</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/florian-scholz-dev/">Linkedin</a>
        </li>
        <li>
          <a href="https://böse-unsichere-seite.de/">Vertrauenvoller Link</a>
        </li>
      </ul>
    </div>
  );
}
