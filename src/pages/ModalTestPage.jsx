import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Modal from "../components/Modal";
import BackButton from "../components/BackButton";

const ModalTestPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState("");
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [textValue, setTextValue] = useState("");
  const [displayValue, setDisplayValue] = useState("");

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    setSelectedCheckboxes((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleSubmit = () => {
    setDisplayValue(`Radio: ${selectedRadio}, Checkboxes: ${selectedCheckboxes.join(", ")}, Text: ${textValue}`);
    setModalOpen(false);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl">Modal Test Page</h1>
      <Button onClick={() => setModalOpen(true)}>Open Modal</Button>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <h2 className="text-lg font-bold mb-2">Fill Out This Form</h2>

        <div className="mb-2">
          <label className="block"><input type="radio" name="radio" value="Option 1" onChange={(e) => setSelectedRadio(e.target.value)} /> Option 1</label>
          <label className="block"><input type="radio" name="radio" value="Option 2" onChange={(e) => setSelectedRadio(e.target.value)} /> Option 2</label>
        </div>

        <div className="mb-2">
          <label className="block"><input type="checkbox" value="Checkbox 1" onChange={handleCheckboxChange} /> Checkbox 1</label>
          <label className="block"><input type="checkbox" value="Checkbox 2" onChange={handleCheckboxChange} /> Checkbox 2</label>
        </div>

        <Input placeholder="Enter text..." value={textValue} onChange={(e) => setTextValue(e.target.value)} />

        <Button onClick={handleSubmit}>Submit</Button>
      </Modal>

      <div id="value-test" className="mt-2 border p-2 rounded text-center">{displayValue}</div>
      <BackButton />
    </div>
  );
};

export default ModalTestPage;
