import React, { useState } from "react";
import "./signin.css";
import axios from "axios";

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    const data = {
      email: username,
      password: password,
    };
    const Login = async () => {
      try {
        const res = await axios.post("http://localhost:8080/login", data);
        if (res.status === 200) {
          alert("Login Success");
          window.location.href = "/home";
        }
      } catch (err) {
        alert(err.response.data.errorMessage);
      }
    };
    Login();
    // if (isLogged) {
    //   window.location.href = "/home";
    // }
  };
  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <br></br>
      <form className="signin-form">
        <label>Email:</label>
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
        <br />
        <div className="signup">
          <p> If you don't have an Account</p>
          <a href="/signup">Sign up</a>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
