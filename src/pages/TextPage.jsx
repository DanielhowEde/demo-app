import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import BackButton from "../components/BackButton";

const TextPage = () => {
  const [text, setText] = useState("");
  const [displayValue, setDisplayValue] = useState("");

  return (
    <div className="p-4">
      <h1 className="text-xl">Text Input Test</h1>
      <Input placeholder="Enter text here" value={text} onChange={(e) => setText(e.target.value)} />
      <Button onClick={() => setDisplayValue(text)}>Go</Button>
      <div id="value-test" className="mt-2 border p-2 rounded text-center">{displayValue}</div>
      <BackButton />
    </div>
  );
};

export default TextPage;
