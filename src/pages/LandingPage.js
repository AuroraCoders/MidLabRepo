// src/pages/LandingPage.js
import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to Jenkins Project Landing Page</h1>
      <p>This is the landing page Hello!.</p>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
}

export default LandingPage;
