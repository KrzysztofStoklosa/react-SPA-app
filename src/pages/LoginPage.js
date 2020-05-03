import React from "react";
const LoginPage = () => {
  return (
    <div>
      <label htmlFor="username">
        username <input type="text" id="username" />
      </label>
      <br />
      <label htmlFor="password">
        password <input type="password" id="password" />
      </label>
      <br />
      <button>LOGIN</button>
    </div>
  );
};

export default LoginPage;
