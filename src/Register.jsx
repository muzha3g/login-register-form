import React, { useState } from "react";

const Register = ({ onFormSwitch }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="auth-form-container">
        <form onSubmit={handleSubmit} className="register-form">
          <label htmlFor="email">Full name：</label>
          <input
            type="text"
            id="name"
            placeholder="your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
        <button onClick={() => onFormSwitch("login")} className="link-btn">
          Already have an account? Login here.
        </button>
      </div>
    </>
  );
};

export default Register;
