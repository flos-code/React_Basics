import React, { useState } from "react";
import { StatusChanger } from "./StatusChanger";

export function Status() {
  const [status, setStatus] = useState("Verfügbar ✅");
  const onStatusChange = (newStatus) => setStatus(newStatus);

  return (
    <div>
      <h1>Status: {status}</h1>

      <p>
        <StatusChanger
          onStatusChange={onStatusChange}
          statusText="Verfügbar ✅"
        />
        <StatusChanger
          onStatusChange={onStatusChange}
          statusText="Beschäftigt 🗓️"
        />
        <StatusChanger
          onStatusChange={onStatusChange}
          statusText="Abwesend 🚫"
        />
      </p>
    </div>
  );
}
