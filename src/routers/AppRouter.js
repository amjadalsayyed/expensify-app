import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
// require("history").createBrowserHistory;
import Expense from "../components/expensedashboard";
import Expenseadd from "../components/addexpense";
import edit from "../components/edit";
import help from "../components/help";
import notfound from "../components/notfound";
import Header from "../components/header";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Expense} exact={true} />;
        <Route path="/create" component={Expenseadd} />
        <Route path="/edit/:id" component={edit} />
        <Route path="/help" component={help} />
        <Route component={notfound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
