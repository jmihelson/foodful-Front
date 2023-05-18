import React from "react";

function LoginForm() {
  return (
    <div className="login-form">
      <h1>Login Form</h1>
      <label>
        Username: <br />
        <input className="username" name="Username" />
      </label>
      <label>
        Password: <br />
        <br />
        <input className="password" name="Password" />
      </label>
    </div>
  );
}

export default LoginForm;
