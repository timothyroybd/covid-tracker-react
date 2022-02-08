import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../App";
import styles from "./update.module.css";
import world from "../asset/country.svg";
import test from "../asset/test.png";
import cases from "../asset/cases.png";
import newCases from "../asset/newcase.png";
import death from "../asset/death.png";
import date from "../asset/date.png";
import covid from "../asset/covid.png";

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
      <React.Fragment>
        {updatedData ? (
          <article className={styles.article}>
            <div className={styles.card} id={styles.card1}>
              <div className="card-img">
                <img src={world} alt="" />
              </div>
              <h2>{updatedData.country}</h2>
            </div>
            <div className={styles.card} id={styles.card3}>
              <div className="card-img">
                <img src={cases} alt="" />
              </div>
              <h2>
                <div>Total Cases</div>
                <div>{updatedData.totalCases.toLocaleString()}</div>
              </h2>
            </div>
            <div className={styles.card} id={styles.card2}>
              <div className="card-img">
                <img src={test} alt="" />
              </div>
              <h2>
                <div>Total Tests</div>
                <div>{updatedData.testsTotal.toLocaleString()}</div>
              </h2>
            </div>

            <div className={styles.card} id={styles.card4}>
              {" "}
              <img src={newCases} alt="" />
              <h2>
                <div>New Cases</div>
                <div>{updatedData.newCases.toLocaleString()}</div>
              </h2>
            </div>

            <div className={styles.card} id={styles.card5}>
              {" "}
              <img src={death} alt="" />
              <h2>
                <div>Total Death</div>
                <div>{updatedData.deathTotal.toLocaleString()}</div>
              </h2>
            </div>
            <div className={styles.card} id={styles.card6}>
              {" "}
              <img src={date} alt="" />
              <h2>
                <div>{updatedData.date}</div>
              </h2>
            </div>
          </article>
        ) : (
          <div className={styles.covid}>
            <img src={covid} alt="" />
          </div>
        )}
      </React.Fragment>
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
