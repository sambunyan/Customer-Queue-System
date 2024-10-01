import React from "react";
import "./Queues.Styles.scss";

export default function ReferenceQueue() {
  return (
    <div className="reference-queue-container">
      <div className="queue-heading-containers">
        <h1 className="reference-queue-heading headings">Reference Queue</h1>
      </div>
      <div className="reference-queue-display"></div>
    </div>
  );
}
