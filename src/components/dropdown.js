import React, { useContext } from "react";
import { DataContext } from "../App";

const Dropdown = () => {
  const covidData = useContext(DataContext);
  console.log(covidData);
  return (
    <article>
      <select name="countries" id="countries">
        {covidData.map((data) => {
          return (
            <option value={data.country} key={data.country}>
              {data.country}
            </option>
          );
        })}
      </select>
    </article>
  );
};

export default Dropdown;
