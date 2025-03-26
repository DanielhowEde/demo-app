import React, { useState } from "react";
import Calendar from "../components/Calendar";
import Button from "../components/Button";
import BackButton from "../components/BackButton";

const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [displayValue, setDisplayValue] = useState("");

  return (
    <div className="p-4">
      <h1 className="text-xl">Calendar Test</h1>
      <Calendar value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
      <Button onClick={() => setDisplayValue(selectedDate)}>Go</Button>
      <div id="value-test" className="mt-2 border p-2 rounded text-center">{displayValue}</div>
      <BackButton />
    </div>
  );
};

export default CalendarPage;
