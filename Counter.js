const { createStore } = require("redux");

const initialState = {
  count: 0,
};
const increamentAction = () => {
  return {
    type: "INCREAMENT",
  };
};
const decrementAction = () => {
  return {
    type: "DECREMENT",
  };
};
const resetAction = () => {
  return {
    type: "RESET",
  };
};

const increaseByAmtAction = () => {
  return {
    type: "INCREASE_BY_AMT",
  };
};
const CountReducer = (state = initialState, action) => {
  if (action.type === "INCREAMENT") {
    return {
      count: state.count + 1,
    };
  } else if (action.type === "DECREMENT") {
    return {
      count: state.count - 1,
    };
  } else if (action.type === "RESET") {
    return {
      count: 0,
    };
  }
};
const store = createStore(CountReducer);
store.dispatch(increamentAction());
store.dispatch(increamentAction());
store.dispatch(increamentAction());
store.dispatch(increamentAction());
console.log(store.getState());
store.dispatch(decrementAction());
console.log(store.getState());

store.dispatch(resetAction());
console.log(store.getState());
