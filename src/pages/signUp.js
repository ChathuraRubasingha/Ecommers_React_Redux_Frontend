import React, { useState } from "react";
import "./signup.css";
import axios from "axios";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    const body = {
      username: username,
      email: email,
      password: password,
    };
    const sendFormData = async () => {
      try {
        const res = await axios.post("http://localhost:8080/create-user", body);
        console.log(res);
        if (res.status === 200) {
          alert("User Created successful!");
        }
      } catch (err) {
        console.log(err);
        alert(err.response.data)
      }
    };
    sendFormData();
  };
  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <br />
      <form className="signup-form">
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
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
