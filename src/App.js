import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Button = ({ children, ...props }) => (
  <button className="px-4 py-2 bg-blue-500 text-white rounded mt-2" {...props}>
    {children}
  </button>
);

const Input = ({ ...props }) => (
  <input className="border p-2 rounded w-full" {...props} />
);

const Calendar = ({ ...props }) => (
  <input type="date" className="border p-2 rounded" {...props} />
);

const Select = ({ children, ...props }) => (
  <select className="border p-2 rounded w-full mt-2" {...props}>
    {children}
  </select>
);

const SelectItem = ({ value, children }) => <option value={value}>{children}</option>;

const BackButton = () => (
  <div className="mt-4">
    <Link to="/">
      <Button>Back to Home</Button>
    </Link>
  </div>
);

// Checkbox Page
const CheckboxPage = () => {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [displayValue, setDisplayValue] = useState("");

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    setSelectedCheckboxes((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  return (
    <div className="p-4">
      <h1 className="text-xl">Checkbox Test</h1>
      <label className="block">
        <input type="checkbox" value="option1" onChange={handleCheckboxChange} /> Option 1
      </label>
      <label className="block">
        <input type="checkbox" value="option2" onChange={handleCheckboxChange} /> Option 2
      </label>
      <label className="block">
        <input type="checkbox" value="option3" onChange={handleCheckboxChange} /> Option 3
      </label>
      <Button onClick={() => setDisplayValue(selectedCheckboxes.join(", "))}>Go</Button>
      <div id="value-test" className="mt-2 border p-2 rounded text-center">{displayValue}</div>
      <BackButton />
    </div>
  );
};

// Random Image Page
const ImagePage = () => {
  const images = [
    "https://picsum.photos/300/200?random=1",
    "https://picsum.photos/300/200?random=2",
    "https://picsum.photos/300/200?random=3",
    "https://picsum.photos/300/200?random=4",
  ];
  const [imageSrc, setImageSrc] = useState(images[Math.floor(Math.random() * images.length)]);

  return (
    <div className="p-4 flex flex-col items-center">
      <h1 className="text-xl">Random Image</h1>
      <img src={imageSrc} alt="Random" className="border p-2 rounded" />
      <Button onClick={() => setImageSrc(images[Math.floor(Math.random() * images.length)])}>New Image</Button>
      <BackButton />
    </div>
  );
};

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
        <li><Link to="/checkbox" className="text-blue-500">Checkboxes</Link></li>
        <li><Link to="/image" className="text-blue-500">Random Image</Link></li>
      </ul>
    </nav>
  </div>
);

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
      <Input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="mb-2" />
      <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="mb-2" />
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
};

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
            <Route path="/checkbox" element={<CheckboxPage />} />
            <Route path="/image" element={<ImagePage />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;