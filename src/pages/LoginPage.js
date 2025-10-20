// src/pages/LoginPage.js
import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";


function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      if (isRegister) {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("User registered successfully!");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login successful!");
      }
      navigate("/dashboard");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>{isRegister ? "Register" : "Login"}</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>{isRegister ? "Register" : "Login"}</button>
      <p onClick={() => setIsRegister(!isRegister)} style={{ cursor: "pointer" }}>
        {isRegister ? "Already have an account? Login" : "Don't have an account? Register"}
      </p>
    </div>
  );
}

export default LoginPage;
