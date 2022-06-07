import { createStore } from "redux";

const incrementCount = ({ incrementby = 1 } = {}) => ({
  type: "INCREMENT",
  incrementby,
});
const decrementcount = ({ decrementby = 1 } = {}) => ({
  type: "DECREMENT",
  decrementby,
});

const resetcount = () => ({
  type: "RESET",
});
const setcount = ({ count }) => ({
  type: "SET",
  count,
});

const countReducers = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementby,
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementby,
      };
    case "RESET":
      return {
        count: (state.count = 0),
      };
    case "SET":
      return {
        count: action.count,
      };
    default:
      return state;
  }
};

const store = createStore(countReducers);
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch({
//   type: "INCREMENT",
//   incrementby: 5,
// });
store.dispatch(incrementCount({ incrementby: 5 }));
store.dispatch(incrementCount());

store.dispatch(resetcount());
store.dispatch(decrementcount());
store.dispatch(decrementcount({ decrementby: 10 }));
store.dispatch(setcount({ count: 101 }));
