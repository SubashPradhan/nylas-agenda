import React from "react";
import "@nylas/components-agenda";

export default function App() {
  return (
    <div className="App">
      <h1>Nylas Agenda</h1>
      <nylas-agenda
        allow_date_change="true"
        hide_ticks="false"
        id="a2aac1d6-9794-4aff-b4d0-0cc5a4279e47"
      >
        {" "}
      </nylas-agenda>
    </div>
  );
}

