import React from "react";
import { hideModal } from "../actions/modal";
import { connect } from "react-redux";
import Modal from "react-modal";

const ConfirmModal = (props) => {
  return (
    <Modal
      isOpen={props.showmodal}
      onRequestClose={() =>
        props.dispatch(hideModal({ showmodal: props.showmodal }))
      }
      contentLabel="Confirm Romove"
      closeTimeoutMS={200}
      className="modal"
    >
      <h3 className="modal__title">Confirm remove</h3>
      <p className="modal_body">Press remove expense to Confirm.!</p>

      <button className="button button--sec" onClick={props.startRemove}>
        Remove Expense
      </button>
      <button
        className="button"
        onClick={() => props.dispatch(hideModal(props.showmodal))}
      >
        {" "}
        close{" "}
      </button>
    </Modal>
  );
};

const mapStateToProps = (state, props) => {
  return {
    // expense: state.expenses.find((expense) => {
    //   return expense.id === props.match.params.id;
    // }),
    showmodal: state.modal.showmodal,
  };
};

export default connect(mapStateToProps)(ConfirmModal);
