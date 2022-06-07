import { createStore, combineReducers } from "redux";
import uuid from "uuid";

// add expense
const addExpense = ({
  descreiption = "",
  note = "",
  amount = 0,
  createAt = 0,
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    descreiption,
    note,
    amount,
    createAt,
  },
});
// remove expense
const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id,
});
// edit expense
const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});
// set\edit Text
const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text,
});
// srotby amount
const sortByAmount = () => ({
  type: "SORTBYAMOUNT",
});
const sortByDate = () => ({
  type: "SORTBYDATE",
});
// set start date
const setStartDate = (startDate) => ({
  type: "SETSTARTDATE",
  startDate,
});
const setEndDate = (endDate) => ({
  type: "SETENDDATE",
  endDate,
});

// expenses reducers
const expensesreducersdefultstate = [];

const expensesReducers = (state = expensesreducersdefultstate, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id != action.id);
    case "EDIT_EXPENSE":
      return state.map((expense) => {
        if (expense.id === action.id) {
          return { ...expense, ...action.updates };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};
// filters resducers
const filtersreducersdefultstate = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined,
};
const filterReducers = (state = filtersreducersdefultstate, action) => {
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
// get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMAtch =
      typeof startDate !== "number" || expense.createAt >= startDate;
    const endDateMAtch =
      typeof endDate !== "number" || expense.createAt <= endDate;
    const textMAtch = expense.descreiption
      .toLowerCase()
      .includes(text.toLowerCase());
    return startDateMAtch && endDateMAtch && textMAtch;
  });
};

// store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducers,
    filters: filterReducers,
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visible = getVisibleExpenses(state.expenses, state.filters);
  console.log(visible);
});
const expenseOne = store.dispatch(
  addExpense({ descreiption: "rent", amount: 100, createAt: 1000 })
);
const expenseTwo = store.dispatch(
  addExpense({ descreiption: "coffee", amount: 300, createAt: -1000 })
);

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));
store.dispatch(setTextFilter("rent"));
// store.dispatch(setTextFilter(""));
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// // store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));

const demoState = {
  expenses: [
    {
      id: "poijasdfhwer",
      descreiption: "january rent",
      note: "this is was the final payment for that address",
      amount: 54500,
      createAt: 0,
    },
  ],
  filters: {
    text: "rent",
    sortBy: "amount", // date or amount
    startDate: undefined,
    enddate: undefined,
  },
};

// const user = { ak: "30", aio: "we" };
// console.log({ ...user });
