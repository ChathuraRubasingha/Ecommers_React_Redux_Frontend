import React, { useState } from "react";
import "./signup.css";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    // Perform signup logic here
    console.log(
      `Signing up with username: ${username}, email: ${email}, and password: ${password}`
    );
  };
  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form className="signup-form">
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleSignUp} className="signup-button">
          Sign Up
        </button>
        <div className="signup">
          <p>If you successfully sign up go to </p>
          <a href="/">Sign in</a>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
