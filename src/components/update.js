import React, { useContext } from "react";
import { DataContext } from "../App";

const Update = () => {
  const { loading, covidData, countryName } = useContext(DataContext);

  if (loading != true) {
    return (
      <div>
        <h1>Hey I am available</h1>
        <h2>{countryName}</h2>
      </div>
    );
  } else if (loading == true) {
    return (
      <div>
        <h1>Loading ...</h1>
        <h2>{countryName}</h2>
      </div>
    );
  }
};

export default Update;
