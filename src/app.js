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

store.dispatch(addExpense({ description: "water bill", amount: 4500 }));
store.dispatch(addExpense({ description: "gas bill", craetedAt: 1000 }));
store.dispatch(addExpense({ description: "rent", amount: 109500 }));
// store.dispatch(setTextFilter("bill"));
const state = store.getState();

console.log(getvisible(state.expenses, state.filters));
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById("app"));
