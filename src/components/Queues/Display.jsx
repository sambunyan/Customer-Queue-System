import React from "react";
import {
  CurrentQueue,
  RecoveryQueue,
  ReferenceQueue,
} from "../../helpers/ComponentExports";

export default function DisplayQueues() {
  return (
    <>
      <div className="main-queues-container">
        <div className="app-queues-container">
          <CurrentQueue />
          <RecoveryQueue />
        </div>
      </div>

      <div className="main-app-queues-container">
        <div>
          <ReferenceQueue />
        </div>
      </div>
    </>
  );
}
