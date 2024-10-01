import React from "react";
import "./Queues.Styles.scss";
import { Buttons } from "../Buttons/Buttons";

export default function RecoveryQueue() {
  return (
    <div className="recovery-queue-container">
       
      <div className="queue-heading-containers">
        <h1 className="recovery-queue-heading headings">Recovery Queue</h1>
      </div>
      <div className="recovery-queue-display queue-displays"></div>
    </div>
  );
}

