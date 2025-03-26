import React from "react";

const SettingsPage = ({ darkMode, setDarkMode }) => (
  <div className={`p-4 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
    <h1 className="text-2xl">Settings</h1>
    <label className="flex items-center mt-2">
      <input
        type="checkbox"
        checked={darkMode}
        onChange={() => setDarkMode(!darkMode)}
        className="mr-2"
      />
      Enable Dark Mode
    </label>
  </div>
);

export default SettingsPage;
