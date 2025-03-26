import React, { useState } from "react";
import Button from "../components/Button";
import BackButton from "../components/BackButton";

const ButtonsPage = () => {
  const [clickedButton, setClickedButton] = useState("");
  const [displayValue, setDisplayValue] = useState("");

  return (
    <div className="p-4">
      <h1 className="text-xl">Button Test</h1>
      <Button onClick={() => setClickedButton("Click Me")}>Click Me</Button>
      <Button onClick={() => setDisplayValue(clickedButton)}>Go</Button>
      <div id="value-test" className="mt-2 border p-2 rounded text-center">{displayValue}</div>
      <BackButton />
    </div>
  );
};

export default ButtonsPage;
