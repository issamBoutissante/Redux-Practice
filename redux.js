const Redux = require("redux");
const createStore = Redux.createStore;

//inisial state
const initialState = {
  counter: 0,
};
//reducer
const reducer = function (state = initialState, action) {
  if (action.type === "INC") {
    return {
      ...state,
      counter: 1,
    };
  }
  if (action.type === "R") {
    return {
      ...state,
      counter: state.counter + action.value,
      text: action.text,
    };
  }
  return 0;
};
//store
const store = createStore(reducer);

//subscripion
store.subscribe(() => {
  console.log(store.getState());
});

//dispatshing action
store.dispatch({ type: "INC" });
store.dispatch({
  type: "R",
  value: 10,
  text: "you are the best ,always the best",
});
