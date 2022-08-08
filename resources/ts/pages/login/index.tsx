import React from "react";

const Login = () => {
  return (<>
    <h2>Login</h2>
    <div>
      <label>
      Name:
      <input type="text" name="name" />
      </label>
      <br />
      <label>
      Pass:
      <input type="password" name="password" />
      </label>
      <br />
      <input type="submit" value="Submit" />
    </div>
  </>);
};

export default Login;