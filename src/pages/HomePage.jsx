import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="p-4">
    <h1 className="text-2xl mb-4">Test Elements</h1>
    <ul className="space-y-2">
      <li><Link to="/dropdown" className="text-blue-500">Dropdown</Link></li>
      <li><Link to="/text" className="text-blue-500">Text</Link></li>
      <li><Link to="/radio" className="text-blue-500">Radio Buttons</Link></li>
      <li><Link to="/buttons" className="text-blue-500">Buttons</Link></li>
      <li><Link to="/calendar" className="text-blue-500">Calendar</Link></li>
      <li><Link to="/checkbox" className="text-blue-500">Checkbox</Link></li>
      <li><Link to="/image" className="text-blue-500">Random Image</Link></li>
      <li><Link to="/modal-test" className="text-blue-500">Modal</Link></li>
      <li><Link to="/toast-test" className="text-blue-500">Toast</Link></li>
      <li><Link to="/table" className="text-blue-500">Table</Link></li>
    </ul>
  </div>
);

export default HomePage;
