import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 375,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: "#3E0E40",
      secondary: "#3D0540",
      bold: "#9F0C64",
      primaryWhite: "#ffffff",
      secondaryWhite: "#EEEEEE",
      primaryGold: "#dba10d",
      secondaryGold: "#DFAD2C",
      contrastText: "#343434",
    },
  },
});
ReactDOM.render(
  <React.StrictMode>
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </CssBaseline>
  </React.StrictMode>,
  document.getElementById("root")
);
