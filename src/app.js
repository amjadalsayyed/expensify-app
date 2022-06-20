import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter, { history } from "./routers/AppRouter";
import configstore from "./store/configstore";
import "normalize.css/normalize.css";
import "./styles/styles.css";
import LoadingPage from "./components/LoadingPage";
import {
  startSetExpenses,
  removeExpense,
  editExpense,
} from "./actions/expenses";
import { login, logout } from "./actions/auth";
import getvisible from "./selectorrs/expenses";
import { firebase } from "./firebase/firebase";

const store = configstore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
let hasREndered = false;
const renderapp = () => {
  if (!hasREndered) {
    ReactDOM.render(jsx, document.getElementById("app"));
    hasREndered = true;
  }
};
ReactDOM.render(<LoadingPage />, document.getElementById("app"));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderapp();
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
  } else {
    store.dispatch(logout());
    renderapp();
    history.push("/");
  }
});
console.log(store.getState());
