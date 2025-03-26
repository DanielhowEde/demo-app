import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

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
      <Input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      {error && <p className="text-red-500">{error}</p>}
      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
};

export default LoginPage;
