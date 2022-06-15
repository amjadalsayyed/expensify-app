import React from "react";
import { Router, Route, Switch, Link, NavLink } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
// require("history").createBrowserHistory;
import Expense from "../components/expensedashboard";
import Expenseadd from "../components/addexpense";
import edit from "../components/edit";
import help from "../components/help";
import notfound from "../components/notfound";

import Login from "../components/login";
import PrivateRoute from "./privateRoute";
export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={Login} exact={true} />;
        <PrivateRoute path="/dashboard" component={Expense} />
        <PrivateRoute path="/create" component={Expenseadd} />
        <PrivateRoute path="/edit/:id" component={edit} />
        <Route path="/help" component={help} />
        <Route component={notfound} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
