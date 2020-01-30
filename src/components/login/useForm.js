import { useState } from "react";

const UseForm = callback => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    username: ""
  });

  const handleChange = event => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSupmit = event => {
    event.preventDefault();
    callback();
  };

  return {
    handleChange,
    handleSupmit,
    values
  };
};

export default UseForm;
