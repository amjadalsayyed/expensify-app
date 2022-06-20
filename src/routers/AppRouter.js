import React from "react";
import { Router, Route, Switch, Link, NavLink } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
// require("history").createBrowserHistory;
import Expense from "../components/expensedashboard";
import Expenseadd from "../components/addexpense";
import edit from "../components/edit";
import notfound from "../components/notfound";
import PublicRoute from "./publicRoute";
import Login from "../components/login";
import PrivateRoute from "./privateRoute";
import ConfirmModel from "../components/confirmModel";
export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={Login} exact={true} />
        <PrivateRoute path="/dashboard" component={Expense} />
        <PrivateRoute path="/create" component={Expenseadd} />
        <PrivateRoute path="/edit/:id" component={edit} />
        <PrivateRoute path="/confirm/:id" component={ConfirmModel} />
        <Route component={notfound} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
