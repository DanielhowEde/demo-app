// App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import DropdownPage from "./pages/DropdownPage";
import TextPage from "./pages/TextPage";
import RadioPage from "./pages/RadioPage";
import ButtonsPage from "./pages/ButtonsPage";
import CalendarPage from "./pages/CalendarPage";
import CheckboxPage from "./pages/CheckboxPage";
import ImagePage from "./pages/ImagePage";
import ModalTestPage from "./pages/ModalTestPage";
import TablePage from "./pages/TablePage";
import SettingsPage from "./pages/SettingsPage";
import StylePage from "./pages/StylePage";
import ToastTestPage from "./pages/ToastTestPage";
import "./styles/global.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <Routes>
        {!isAuthenticated ? (
          <Route path="*" element={<LoginPage onLogin={setIsAuthenticated} />} />
        ) : (
          <>
            <Route path="/" element={<HomePage />} />
            <Route path="/dropdown" element={<DropdownPage />} />
            <Route path="/text" element={<TextPage />} />
            <Route path="/radio" element={<RadioPage />} />
            <Route path="/buttons" element={<ButtonsPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/checkbox" element={<CheckboxPage />} />
            <Route path="/image" element={<ImagePage />} />
            <Route path="/modal-test" element={<ModalTestPage />} />
            <Route path="/table" element={<TablePage />} />
            <Route path="/toast-test" element={<ToastTestPage />} />
            <Route path="/settings" element={<SettingsPage darkMode={darkMode} setDarkMode={setDarkMode} />} />
            <Route path="/style" element={<StylePage />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;
