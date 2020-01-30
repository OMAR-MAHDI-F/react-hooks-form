import React from "react";
import UseForm from "./useForm";
import loginImg from "../../login.svg";
const Login = () => {
  const { handleChange, handleSupmit, values } = UseForm(submit);

  function submit() {
    console.log("Submitted Succesfully");

    console.log(values.email);
    console.log(values.password);
  }

  return (
    <form className="base-container" onSubmit={handleSupmit} noValidate>
      <div className="header">Login</div>
      <div className="content">
        <div className="image">
          <img src={loginImg} />
        </div>
        <div className="form">
          <div className="form-group">
            <label htmlFor="email">Email</label>

            <input
              type="email"
              name="email"
              placeholder="Your Email !"
              value={values.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Your Password !"
              value={values.password}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="footer">
        <button type="submit" className="btn">
          LOGIN
        </button>
      </div>
    </form>
  );
};

export default Login;
