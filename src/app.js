import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configstore from "./store/configstore";
import "normalize.css/normalize.css";
import "./styles/styles.css";
import { addExpense, removeExpense, editExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getvisible from "./selectorrs/expenses";

const store = configstore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById("app"));
