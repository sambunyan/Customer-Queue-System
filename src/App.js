import { React } from "react";
import {
  Buttons,
  DisplayQueues,
  CurrentQueue,
  RecoveryQueue,
  ReferenceQueue
} from "./helpers/ComponentExports";
import "./App.Styles.scss";

export default function App() {
  return (
    <div className="main-app-container">
      <div className="heading-container">
        <h1 className="heading headings">Company Name</h1>
      </div>
      
      <div className="all-buttons-container">
      <Buttons />
      </div>

      <div className="all-queues-container">
        <DisplayQueues />
      </div>
    </div>
  );
}
