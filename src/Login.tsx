import React, { useState } from "react";
import "./AuthForm.css";

interface LoginProps {
  onLogin: (email: string, password: string) => void;
  toggleAuthMode: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin, toggleAuthMode }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const handleLogin = () => {
    // Reset previous error messages
    setUsernameError(null);
    setPasswordError(null);

    // Validate inputs
    if (!username) {
      setUsernameError("Username cannot be empty.");
      return;
    }

    if (!password) {
      setPasswordError("Password cannot be empty.");
      return;
    }

    // Perform login logic
    onLogin(username, password);
  };

  return (
    <div className="auth-form">
      <h2>Login</h2>
      <form>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {usernameError && <p style={{ color: "red" }}>{usernameError}</p>}
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
        <button type="button" onClick={handleLogin}>
          Login
        </button>
        <p>
          Don't have an account?{" "}
          <span className="auth-link" onClick={toggleAuthMode}>
            Signup
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
