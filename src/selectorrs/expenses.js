import moment from "moment";
export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter((expense) => {
      const craetedAtMoment = moment(expense.craetedAt);
      const startDateMAtch = startDate
        ? startDate.isSameOrBefore(craetedAtMoment, "day")
        : true;

      const endDateMAtch = endDate
        ? endDate.isSameOrAfter(craetedAtMoment, "day")
        : true;

      const textMAtch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());
      return startDateMAtch && endDateMAtch && textMAtch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.craetedAt < b.craetedAt ? 1 : -1;
      } else if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};
