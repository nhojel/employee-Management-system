import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

enum AuthMode {
  LOGIN,
  SIGNUP,
}

interface User {
  email: string;
  password: string;
}

const App: React.FC = () => {
  const [authMode, setAuthMode] = useState(AuthMode.LOGIN);
  const [authenticatedUser, setAuthenticatedUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]);

  const toggleAuthMode = () => {
    setAuthMode(authMode === AuthMode.LOGIN ? AuthMode.SIGNUP : AuthMode.LOGIN);
  };

  const handleLogin = (email: string, password: string) => {
    // Simulate authentication logic
    const user: User | undefined = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      setAuthenticatedUser(user);
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  const handleSignup = (
    email: string,
    password: string,
    confirmPassword: string
  ) => {
    // Simulate signup logic
    if (password === confirmPassword) {
      const newUser: User = { email, password };
      setAuthenticatedUser(newUser);
      setUsers([...users, newUser]);
    } else {
      alert("Passwords do not match. Please try again.");
    }
  };

  const handleLogout = () => {
    setAuthenticatedUser(null);
  };

  return (
    <div>
      {authenticatedUser ? (
        <div>
          <p>Welcome, {authenticatedUser.email}! Return to Login.</p>
          <button onClick={handleLogout}>OK</button>
        </div>
      ) : (
        <div>
          {authMode === AuthMode.LOGIN ? (
            <Login onLogin={handleLogin} toggleAuthMode={toggleAuthMode} />
          ) : (
            <Signup onSignup={handleSignup} toggleAuthMode={toggleAuthMode} />
          )}
        </div>
      )}
    </div>
  );
};

export default App;
