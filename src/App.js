import "./App.css";
import React from "react";
import { useEffect, useState } from "react";
import useFetch from "./hooks/useFetch";
import Dropdown from "./components/dropdown";
import Form from "./components/form";
import Update from "./components/update";

const url = "https://covid-193.p.rapidapi.com/statistics";
export const DataContext = React.createContext();
function App() {
  const { loading, covidData } = useFetch(url);
  useEffect(() => {
    console.log(covidData);
  }, []);

  return (
    <DataContext.Provider value={covidData}>
      <div className="App"></div>
      <Form />
      {/* <Update /> */}
    </DataContext.Provider>
  );
}

export default App;
