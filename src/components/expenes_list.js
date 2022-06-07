import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./expenseListItem";
import selectExpenses from "../selectorrs/expenses";
const ExpensList = (props) => (
  <div>
    <h1>ExpensList</h1>
    {props.expenses.map((expense) => {
      return <ExpenseListItem key={expense.id} {...expense} />;
    })}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
  };
};

export default connect(mapStateToProps)(ExpensList);
