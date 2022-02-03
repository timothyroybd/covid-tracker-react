import React, { useContext, useState, useRef } from "react";
import { DataContext } from "../App";
import { countryList } from "../data/countryList";

const Dropdown = (props) => {
  const selectedCountry = useRef(null);
  const { covidData } = useContext(DataContext);
  const [countryName, setCountryName] = useState("");

  console.log(covidData);
  return (
    <article>
      <select
        name="countries"
        id="countries"
        ref={selectedCountry}
        onChange={(e) => {
          setCountryName(e.target.value);
          console.log(countryName);
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
