import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import selectExpenses from "../selectorrs/expenses";
import selectExpenseTotal from "../selectorrs/expensestotal";

const ExpensesSummary = ({ expenseCount, expenseTotal }) => {
  const expenseWord = expenseCount === 1 ? "expense" : "expenses";
  const formatedexpensestotal = numeral(expenseTotal / 100).format("$0,0.00");
  return (
    <div>
      <h1>
        Viewing {expenseCount} {expenseWord} totalling {formatedexpensestotal}
      </h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);

  return {
    expenseCount: visibleExpenses.length,
    expenseTotal: selectExpenseTotal(visibleExpenses),
  };
};
export default connect(mapStateToProps)(ExpensesSummary);
