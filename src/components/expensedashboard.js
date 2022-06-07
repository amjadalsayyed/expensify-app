import React from "react";
import ExpensList from "./expenes_list";
import ExpenseListFilter from "./expenseListFilter";

const Expense = () => (
  <div>
    <ExpenseListFilter />
    <ExpensList />
  </div>
);

export default Expense;
