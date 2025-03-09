import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Button = ({ children, ...props }) => (
  <button className="px-4 py-2 bg-blue-500 text-white rounded" {...props}>
    {children}
  </button>
);

const Input = ({ ...props }) => (
  <input className="border p-2 rounded w-full" {...props} />
);

const Calendar = () => <input type="date" className="border p-2 rounded" />;

const Select = ({ children }) => (
  <select className="border p-2 rounded">{children}</select>
);

const SelectItem = ({ value, children }) => <option value={value}>{children}</option>;

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (username === "test" && password === "test") {
      onLogin(true);
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl mb-4">Login</h1>
      <Input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="mb-2"
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-2"
      />
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
};

const HomePage = () => (
  <div className="p-4">
    <h1 className="text-2xl mb-4">Test Elements</h1>
    <nav>
      <ul className="space-y-2">
        <li><Link to="/dropdown" className="text-blue-500">Dropdown</Link></li>
        <li><Link to="/text" className="text-blue-500">Text</Link></li>
        <li><Link to="/radio" className="text-blue-500">Radio Buttons</Link></li>
        <li><Link to="/buttons" className="text-blue-500">Buttons</Link></li>
        <li><Link to="/calendar" className="text-blue-500">Calendar Date</Link></li>
      </ul>
    </nav>
  </div>
);

const BackButton = () => (
  <div className="mt-4">
    <Link to="/">
      <Button>Back to Home</Button>
    </Link>
  </div>
);

const DropdownPage = () => (
  <div className="p-4">
    <h1 className="text-xl">Dropdown Test</h1>
    <Select>
      <SelectItem value="option1">Option 1</SelectItem>
      <SelectItem value="option2">Option 2</SelectItem>
      <SelectItem value="option3">Option 3</SelectItem>
    </Select>
    <BackButton />
  </div>
);

const TextPage = () => (
  <div className="p-4">
    <h1 className="text-xl">Text Input Test</h1>
    <Input placeholder="Enter text here" />
    <BackButton />
  </div>
);

const RadioPage = () => (
  <div className="p-4">
    <h1 className="text-xl">Radio Button Test</h1>
    <input type="radio" name="test" value="option1" /> Option 1
    <input type="radio" name="test" value="option2" /> Option 2
    <BackButton />
  </div>
);

const ButtonsPage = () => (
  <div className="p-4">
    <h1 className="text-xl">Button Test</h1>
    <Button>Click Me</Button>
    <BackButton />
  </div>
);

const CalendarPage = () => (
  <div className="p-4">
    <h1 className="text-xl">Calendar Test</h1>
    <Calendar />
    <BackButton />
  </div>
);

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;
