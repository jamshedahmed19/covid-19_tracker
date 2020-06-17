import React, { Component } from "react";
import Header from "./components/Header";
import Structure from "./components/Structure";
import GlobalContextProvider from "./Context/GlobalContext";
import CountriesListContext from "./Context/CountriesListContext";

export class App extends Component {
  render() {
    return (
      <div>
        <GlobalContextProvider>
          <CountriesListContext>
            <Header></Header>
            <Structure />
          </CountriesListContext>
        </GlobalContextProvider>
      </div>
    );
  }
}

export default App;
