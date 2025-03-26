import React, { useState } from "react";
import Button from "../components/Button";
import BackButton from "../components/BackButton";

const RadioPage = () => {
  const [selectedRadio, setSelectedRadio] = useState("");
  const [displayValue, setDisplayValue] = useState("");

  return (
    <div className="p-4">
      <h1 className="text-xl">Radio Button Test</h1>
      <label className="mr-4">
        <input type="radio" name="test" value="option1" onChange={(e) => setSelectedRadio(e.target.value)} /> Option 1
      </label>
      <label className="mr-4">
        <input type="radio" name="test" value="option2" onChange={(e) => setSelectedRadio(e.target.value)} /> Option 2
      </label>
      <Button onClick={() => setDisplayValue(selectedRadio)}>Go</Button>
      <div id="value-test" className="mt-2 border p-2 rounded text-center">{displayValue}</div>
      <BackButton />
    </div>
  );
};

export default RadioPage;
