import React, { useContext, useRef } from "react";
import { DataContext } from "../App";
import { countryList } from "../data/countryList";

const Dropdown = ({ formhandler }) => {
  const selectedCountry = useRef(null);
  const { covidData } = useContext(DataContext);
  return (
    <article>
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
    </article>
  );
};

export default Dropdown;
