import React from "react";
import "./Buttons.Styles.scss";

export default function Buttons() {
  const info = {
    maxCharLength: 255,
    placeholder: "Enter customers name.",
    add: "Add Customer",
    callNext: "Call Next Customer",
    clearCurrent: "Clear Current Queue",
    clearRecovery: "Clear Recovery Queue"
  };

   const currentQueueButtons = (
    <div className="current-queue-buttons-container">
      <button type="button" className="add-customer-button buttons">
        {info.add}
      </button>
      <button type="button" className="call-next-customers-button buttons">
        {info.callNext}
      </button>
      <button type="button" className="clear-current-customers-button buttons">
        {info.clearCurrent}
      </button>
    </div>
  ); 

  const recoveryQueueButtons = (
    <div className="recovery-queue-buttons-container">
      <button type="button" className="cycle-recovered-customers-button buttons">
        {info.callNext}
      </button>
      <button type="button" className="clear-recovered-customers-button buttons">
        {info.clearRecovery}
      </button>
    </div>
  );

  return (
    <div className="buttons-container">
      {/* {currentQueueButtons} */}
      {recoveryQueueButtons}
    </div>
  );
}
