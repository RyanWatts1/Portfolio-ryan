import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";

const theme = {
  base: "#0d0f10",
  paper: "#212122",
  primary: "#61dafb",
  secondary: "#64ffda",
  color: "#ccd6f6",
};

// const theme = {
//   base: "#403D52",
//   paper: "#2b2a34",
//   primary: "#78D0D3",
//   secondary: "#64ffda",
//   color: "#ccd6f6",
// };

// const theme = {
//   base: "#0a192f",
//   paper: "#172a45",
//   primary: "rgb(100,255,218)",
//   secondary: "#64ffda",
//   color: "#ccd6f6",
// };

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
