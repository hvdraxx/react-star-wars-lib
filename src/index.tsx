import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/store";
import "./styles/fonts.css";
import { GlobalStyles } from "./styles/GlobalStyles";

ReactDOM.render(
  <Provider store={store}>
    <App show loading />
    <GlobalStyles />
  </Provider>,
  document.getElementById("root")
);
