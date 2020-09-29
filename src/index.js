import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyles } from "./global-styles";
import App from "./App";
import "normalize.css";
import { BrowserRouter } from "react-router-dom";
import { FirebaseContext } from "./context/firebase";
// import {} from "./lib/firebase.prod";

ReactDOM.render(
  <BrowserRouter>
    <FirebaseContext.Provider value={{}}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
