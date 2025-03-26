import React, { useState } from "react";
import { Select, SelectItem } from "../components/Select";
import Button from "../components/Button";
import BackButton from "../components/BackButton";

const DropdownPage = () => {
  const [selectedOption, setSelectedOption] = useState("option1");
  const [displayValue, setDisplayValue] = useState("");

  return (
    <div className="p-4">
      <h1 className="text-xl">Dropdown Test</h1>
      <Select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
        <SelectItem value="option3">Option 3</SelectItem>
      </Select>
      <Button onClick={() => setDisplayValue(selectedOption)}>Go</Button>
      <div id="value-test" className="mt-2 border p-2 rounded text-center">{displayValue}</div>
      <BackButton />
    </div>
  );
};

export default DropdownPage;
