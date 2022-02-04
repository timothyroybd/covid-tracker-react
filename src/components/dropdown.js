import React, { useContext, useRef } from "react";
import { DataContext } from "../App";
import { countryList } from "../data/countryList";
import styles from "./dropdown.module.css";

const DropdownForm = ({ formhandler }) => {
  const selectedCountry = useRef(null);
  const { covidData } = useContext(DataContext);
  return (
    <article>
      <div className={`${styles.select} `}>
        <select
          name="countries"
          id="countries"
          onChange={(e) => {
            formhandler(e.target.value);
          }}
        >
          {countryList.map((country) => {
            return (
              <option value={country} key={country}>
                {country}
              </option>
            );
          })}
        </select>
      </div>
    </article>
  );
};

export default DropdownForm;
