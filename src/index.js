import React from "react";
import ReactDOM from "react-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import App from "./App";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#f2f2f2",
    },
    secondary: {
      main: "#f06292",
    },
  },
  typography: {
    fontFamily: "Raleway",
    h4: {
      lineHeight: "80px",
      fontWeight: "300",
      fontSize: "50px",
    },
    h3: {
      lineHeight: "80px",
      fontWeight: "500",
    },
    h6: {
      lineHeight: "80px",
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
