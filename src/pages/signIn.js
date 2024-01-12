import React, { useState } from "react";
import "./signin.css";

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isLogged = true;
  const handleSignIn = () => {
    if (isLogged) {
      window.location.href = "/home";
    }
  };
  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <br></br>
      <form className="signin-form">
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="button" onClick={handleSignIn} className="signin-button">
          Sign In
        </button>
        <br/>
        <div className="signup">
          <p> If you don't have an Account</p>
          <a href="/signup">Sign up</a>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
