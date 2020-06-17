import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const GlobalContext = createContext();

function GlobalContextProvider(props) {
  const [globalData, setGlobalData] = useState([]);

  useEffect(() => {
    axios
      .get("https://disease.sh/v2/all")

      .then((responsearr) => {
        setGlobalData(responsearr.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <GlobalContext.Provider value={{ globalData }}>
      {props.children}
    </GlobalContext.Provider>
  );
}

export default GlobalContextProvider;
