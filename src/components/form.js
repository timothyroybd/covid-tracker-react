import React from "react";
import Dropdown from "./dropdown";

const Form = () => {
  const submitHandler = () => {};
  return (
    <form onSubmit={submitHandler}>
      <Dropdown />
      <button type="submit">Get Update</button>
    </form>
  );
};

export default Form;
