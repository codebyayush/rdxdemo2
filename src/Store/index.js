import { createStore } from "redux";

const counterReducer = (state = { counter: 1 }, action) => {
  if (action.type === "INCREMENTBY2") {
    return {
      counter: state.counter + 2,
    };
  }
  if (action.type === "DECREMENTBY2") {
    return {
      counter: state.counter - 2,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;