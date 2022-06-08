import React from "react";
import ExpensList from "./expenes_list";
import ExpenseListFilter from "./expenseListFilter";
import ExpensesSummary from "./expensesSummary";

const Expense = () => (
  <div>
    <ExpensesSummary />
    <ExpenseListFilter />
    <ExpensList />
  </div>
);

export default Expense;
