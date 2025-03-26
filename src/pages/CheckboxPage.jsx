import React, { useState } from "react";
import Button from "../components/Button";
import BackButton from "../components/BackButton";

const CheckboxPage = () => {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [displayValue, setDisplayValue] = useState("");

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    setSelectedCheckboxes((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  return (
    <div className="p-4">
      <h1 className="text-xl">Checkbox Test</h1>
      <label className="block">
        <input type="checkbox" value="option1" onChange={handleCheckboxChange} /> Option 1
      </label>
      <label className="block">
        <input type="checkbox" value="option2" onChange={handleCheckboxChange} /> Option 2
      </label>
      <label className="block">
        <input type="checkbox" value="option3" onChange={handleCheckboxChange} /> Option 3
      </label>
      <Button onClick={() => setDisplayValue(selectedCheckboxes.join(", "))}>Go</Button>
      <div id="value-test" className="mt-2 border p-2 rounded text-center">{displayValue}</div>
      <BackButton />
    </div>
  );
};

export default CheckboxPage;
