import React, { useState } from "react";
import "./AuthForm.css";

interface SignupProps {
  onSignup: (email: string, password: string, confirmPassword: string) => void;
  toggleAuthMode: () => void;
}

const Signup: React.FC<SignupProps> = ({ onSignup, toggleAuthMode }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSignup = () => {
    // Validate inputs
    if (!username || !password || password !== confirmPassword) {
      setErrorMessage(
        "Please provide a valid username and ensure passwords match."
      );
      return;
    }

    // Clear previous error message
    setErrorMessage(null);

    // Perform signup logic
    onSignup(username, password, confirmPassword);

    // After successful signup, switch to the login view
    toggleAuthMode();
  };

  return (
    <div className="auth-form">
      <h2>Signup</h2>
      <form>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <button type="button" onClick={handleSignup}>
          Signup
        </button>
        <p>
          Already have an account?{" "}
          <span className="auth-link" onClick={toggleAuthMode}>
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default Signup;
