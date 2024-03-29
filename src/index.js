import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "react-table/react-table.css";
import store from "./store";
import App from "./App";
import "./style.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
