import React, { useState } from "react";
import Dropdown from "./dropdown";

const Form = ({ grabCountryName }) => {
  const [countryName, setCountryName] = useState("");
  const updateCountryValue = (country) => {
    setCountryName(country);
    console.log(country);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    console.log(`this is name from form ${countryName}`);
    grabCountryName(countryName);
  };

  return (
    <form onSubmit={(e) => submitHandler(e)}>
      <Dropdown formhandler={updateCountryValue} />
      <button type="submit">Get Update</button>
    </form>
  );
};

export default Form;
