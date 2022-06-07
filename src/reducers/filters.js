import moment from "moment";

const filtersreducersdefultstate = {
  text: "",
  sortBy: "date",
  startDate: moment().startOf("month"),
  endDate: moment().endOf("month"),
};
export default (state = filtersreducersdefultstate, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return { ...state, text: action.text };
    case "SORTBYAMOUNT":
      return { ...state, sortBy: "amount" };
    case "SORTBYDATE":
      return { ...state, sortBy: "date" };
    case "SETSTARTDATE":
      return { ...state, startDate: action.startDate };
    case "SETENDDATE":
      return { ...state, endDate: action.endDate };
    default:
      return state;
  }
};
