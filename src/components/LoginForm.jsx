import React from "react";

function LoginForm() {
  return (
    <div className="Login-Form">
      <h1>Login Form</h1>
      <label>
        Username: <br />
        <input name="Username" />
      </label>
      <label>
        Password: <br />
        <br />
        <input name="Password" />
      </label>
    </div>
  );
}

export default LoginForm;
