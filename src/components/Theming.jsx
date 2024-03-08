import React from "react";
import { BusinessProfile } from "./BusinessProfile";
import { OpenToWorkContext } from "../OpenToWorkContext";

export function Theming() {
  return (
    <div>
      <h1>Context & Theming</h1>

      <BusinessProfile name="Hans Kanz" job="Macher" />

      <OpenToWorkContext.Provider value={true}>
        <div>
          <h2>Open to work:</h2>
          <BusinessProfile name="Meier Klaus" job="Dieb" />
          <BusinessProfile name="Maus" job="Käse klau" />
        </div>
      </OpenToWorkContext.Provider>
    </div>
  );
}
