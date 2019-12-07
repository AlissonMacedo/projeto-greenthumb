import React from "react";
import ReactDOM from "react-dom";
import { PDFViewer } from "@react-pdf/renderer";

import Router from "./router";

import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <Router />
      <GlobalStyle />
    </>
  );
}

export default App;
