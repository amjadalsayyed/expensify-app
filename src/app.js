import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configstore from "./store/configstore";
import "normalize.css/normalize.css";
import "./styles/styles.css";
import {
  startSetExpenses,
  removeExpense,
  editExpense,
} from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getvisible from "./selectorrs/expenses";
import "./firebase/firebase";

const store = configstore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(<p>loading ...</p>, document.getElementById("app"));

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById("app"));
});
