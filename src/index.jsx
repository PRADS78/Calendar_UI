import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalContextWrapper from "./Context/GlobalContextWrapper";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GlobalContextWrapper>
    <App />
  </GlobalContextWrapper>
);

