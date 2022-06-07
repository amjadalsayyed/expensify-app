// set\edit Text
export const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text,
});
// srotby amount
export const sortByAmount = () => ({
  type: "SORTBYAMOUNT",
});
export const sortByDate = () => ({
  type: "SORTBYDATE",
});
// set start date
export const setStartDate = (startDate) => ({
  type: "SETSTARTDATE",
  startDate,
});
export const setEndDate = (endDate) => ({
  type: "SETENDDATE",
  endDate,
});
