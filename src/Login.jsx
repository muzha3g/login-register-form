import React, { useState } from "react";

const Login = ({ onFormSwitch }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="auth-form-container">
        <form onSubmit={handleSubmit} className="login-form">
          <label htmlFor="email">email：</label>
          <input
            type="email"
            id="email"
            placeholder="youremail@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">password：</label>
          <input
            type="password"
            id="password"
            placeholder="********"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <button>Log In</button>
        </form>
        <button onClick={() => onFormSwitch("register")} className="link-btn">
          Don't have an account? Register here.
        </button>
      </div>
    </>
  );
};

export default Login;
