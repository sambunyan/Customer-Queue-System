import { React, useState } from "react";
import { displayData } from "../../helpers/Data";
import "./Queues.Styles.scss";

export default function CurrentQueue() {
  const [newCustomers, setNewCustomers] = useState([]);
  const [inputValue, setInputValue] = useState(``);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const addCustomer = (inputValue) => {
    setNewCustomers([...newCustomers, inputValue]);

    console.log(newCustomers);
  };

  const inputs = [
    <input
      type="text"
      className="customer-input"
      value={inputValue}
      onChange={handleInputChange}
      placeholder={displayData.placeholder}
      maxLength={displayData.maxCharLength}
    />,

    <button
      type="button"
      className="add-customers-button buttons"
      onClick={() => addCustomer(inputValue)}
    >
      {displayData.add}
    </button>,
    <button type="button" className="next-customers-button buttons">
      {displayData.callNext}
    </button>,
    <button type="button" className="clear-current-customers-button buttons">
      {displayData.clearCurrent}
    </button>,
  ];

  return (
    <div className="current-queue-container">
      <div className="buttons-container">
        {inputs.map((inputs, index) => {
          return <div key={index}>{inputs}</div>;
        })}
      </div>
      <div className="queue-heading-containers">
        <h1 className="current-queue-heading headings">Current Queue</h1>
      </div>
      <div className="current-queue-display queue-displays">
        {newCustomers.map((newcustomers, key) => {
          return <div key={key} className="customer-styles">{newcustomers}</div>;
        })}
      </div>
    </div>
  );
}

/**
 * 
 *         {newCustomers.map((newcustomers, key) => {
          return <div key={key}>{newcustomers}</div>;
        })}
 * 

                {array.map((array, key) => {
          return <div key={key}>{array}</div>;
        })}
 * 
 */
