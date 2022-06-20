const modal = { showmodal: false };

export default (state = modal, action) => {
  switch (action.type) {
    case "SHOWMODAL":
      return {
        ...state,
        showmodal: !action.modal,
      };
    case "HIDEMODAL":
      return {
        ...state,
        showmodal: false,
      };
    default:
      return state;
  }
};
