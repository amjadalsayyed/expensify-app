import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./expenseform";
import ConfirmModel from "./confirmModel";
import { startEditExpense, startRemoveExpense } from "../actions/expenses";
import { showModal, hideModal } from "../actions/modal";

const edit = (props) => {
  const startRemove = () => {
    props.dispatch(startRemoveExpense({ id: props.expense.id }));
    props.dispatch(hideModal(props.showmodal));
    props.history.push("/");
  };

  return (
    <div>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Edit Expense</h1>
        </div>
      </div>
      <div className="content-container">
        <ExpenseForm
          expense={props.expense}
          onSubmit={(expense) => {
            props.dispatch(startEditExpense(props.expense.id, expense));
            props.history.push("/");
          }}
        />
        <ConfirmModel startRemove={startRemove} />
        <button
          className="button button--sec"
          onClick={() => {
            props.dispatch(showModal(props.showmodal));
          }}
        >
          Remove Expense
        </button>
      </div>
    </div>
  );
};
const mapStateToProps = (state, props) => {
  return {
    showmodal: state.modal.showmodal,
    expense: state.expenses.find((expense) => {
      return expense.id === props.match.params.id;
    }),
  };
};
export default connect(mapStateToProps)(edit);
