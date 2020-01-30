import React from "react";
import UseForm from "./useForm";
import loginImg from "../../login.svg";
const Register = () => {
  const { handleChange, handleSupmit, values } = UseForm(submit);

  function submit() {
    console.log("Registered Succesfully");
    console.log(values.username);
    console.log(values.email);
    console.log(values.password);
  }
  return (
    <form className="base-container" onSubmit={handleSupmit}>
      <div className="header">Register</div>
      <div className="content">
        <div className="image">
          <img src={loginImg} />
        </div>
        <div className="form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              onChange={handleChange}
              value={values.username}
              placeholder="Your Name !"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              onChange={handleChange}
              value={values.email}
              placeholder="Your Email !"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={values.password}
              placeholder="Your Password !"
            />
          </div>
        </div>
      </div>
      <div className="footer">
        <button type="submit" className="btn">
          SIGN UP
        </button>
      </div>
    </form>
  );
};

export default Register;
