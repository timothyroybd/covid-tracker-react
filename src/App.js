import styles from "./app.module.css";
import React from "react";
import { useEffect, useState } from "react";
import useFetch from "./hooks/useFetch";
import Dropdown from "./components/dropdown";
import Form from "./components/form";
import Update from "./components/update";
import Footer from "./components/footer";

const url = "https://covid-193.p.rapidapi.com/statistics";
export const DataContext = React.createContext();
function App() {
  const [countryName, setCountryName] = useState("");
  const settingCountryName = (countryName) => {
    setCountryName(countryName);
  };
  const { loading, covidData } = useFetch(url);
  useEffect(() => {
    console.log(covidData);
  }, [covidData]);
  useEffect(() => {
    console.log(countryName);
  }, [countryName]);

  return (
    <DataContext.Provider value={{ loading, covidData, countryName }}>
      <div className={styles.container}>
        <h1 className={styles.heading}>COVID-19 Worldwide Update</h1>
        <Form grabCountryName={settingCountryName} />
        <Update />
      </div>
      <Footer />
    </DataContext.Provider>
  );
}

export default App;
