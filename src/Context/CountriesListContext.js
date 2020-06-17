import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const CountriesListContext = createContext();

function CountriesListProvider(props) {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    axios
      .get("https://disease.sh/v2/countries?yesterday=0&sort=cases&allowNull=0")
      .then((res) => {
        setCountriesData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <CountriesListContext.Provider value={{ countriesData }}>
      {props.children}
    </CountriesListContext.Provider>
  );
}

export default CountriesListProvider;
