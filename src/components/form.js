import React, { useState } from "react";
import DropdownForm from "./dropdown";
import styles from "./form.module.css";

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
      <DropdownForm formhandler={updateCountryValue} />
      <button className={styles.btn} type="submit">
        Get Update
      </button>
    </form>
  );
};

export default Form;
