import React from "react";

const Signup = () => {
  return (<>
    <h2>Signup</h2>
    <div>
      <label>
      ID:
      <input type="text" name="id" />
      </label>
      <br />
      <label>
      Pass1:
      <input type="password" name="password1" />
      </label>
      <br />
      <label>
      Pass2:
      <input type="password" name="password2" />
      </label>
      <br />
      <input type="submit" value="Submit" />
    </div>
  </>);
};

export default Signup;