import React from "react";

const Login = () => {
  return (<>
    <h2>Login</h2>
    <div>
      <label>
      ID:
      <input type="text" name="id" />
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