import React from "react";
import ExpenseForm from "./expenseform";
import { connect } from "react-redux";
import { startAddExpense } from "../actions/expenses";

const Expenseadd = (props) => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm
      onSubmit={(expense) => {
        props.dispatch(startAddExpense(expense));
        props.history.push("/");
      }}
    />
  </div>
);
export default connect()(Expenseadd);
