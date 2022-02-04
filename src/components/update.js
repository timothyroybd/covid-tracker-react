import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../App";

const Update = () => {
  const { loading, covidData, countryName } = useContext(DataContext);

  const [updatedData, setUpdatedData] = useState("");

  const filterData = () => {
    const countryObject = covidData.filter((data) => {
      return String(data.country) === String(countryName);
    });
    countryObject.map((data) => {
      const country = data.country;
      const date = data.day;
      const totalCases = data.cases.total;
      const newCases = data.cases.new;
      const deathTotal = data.deaths.total;
      const testsTotal = data.tests.total;
      setUpdatedData((prev) => {
        return {
          ...prev,
          country,
          testsTotal,
          newCases,
          totalCases,
          date,
          deathTotal,
        };
      });
    });
  };
  useEffect(() => {
    filterData();
  }, [countryName]);

  if (loading !== true) {
    return (
      <div>
        {updatedData ? (
          <div>
            {" "}
            <h1>Hey I am available</h1>
            <h2>Country:{updatedData.country} </h2>
            <h2>Total Tests:{updatedData.testsTotal} </h2>
            <h2>New Cases:{updatedData.newCases} </h2>
            <h2>Total Cases:{updatedData.totalCases} </h2>
            <h2>Total Death:{updatedData.deathTotal} </h2>
            <h2>Date:{updatedData.date} </h2>{" "}
          </div>
        ) : (
          ""
        )}
      </div>
    );
  } else if (loading === true) {
    return (
      <div>
        <h1>Loading ...</h1>
      </div>
    );
  }
};

export default Update;
