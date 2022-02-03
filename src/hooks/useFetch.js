import React, { useEffect, useState } from "react";
import axios from "axios";
export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [covidData, setCovidData] = useState([]);
  const fetchData = async () => {
    const options = {
      method: "GET",
      url: url,
      headers: {
        "x-rapidapi-host": "covid-193.p.rapidapi.com",
        "x-rapidapi-key": "ee62a53b28msh1fe5fe4522638c5p1d4840jsnc38148e966d1",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        const responseData = response.data.response;

        if (response.status === 200) {
          setCovidData(responseData);
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return { loading, covidData };
};

export default useFetch;
