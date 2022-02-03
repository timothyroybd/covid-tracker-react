import "./App.css";

import { useEffect, useState } from "react";
import useFetch from "./hooks/useFetch";

const url = "https://covid-193.p.rapidapi.com/countries";
function App() {
  const { loading, covidData } = useFetch(url);
  console.log(covidData);

  return <div className="App"></div>;
}

export default App;
