const initialState = {
  counter: 0,
  results: [],
};

const reducer = (state = initialState, { type, value }) => {
  switch (type) {
    case "inc":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "dec":
      return {
        ...state,
        counter: state.counter - 1,
      };
    case "add":
      return {
        ...state,
        counter: state.counter + 5,
      };
    case "sub":
      return {
        ...state,
        counter: state.counter - 5,
      };
    case "add_result":
      return {
        ...state,
        results: state.results.concat({
          id: new Date(),
          value: state.counter,
        }),
      };
    case "remove_result":
      const newResult = state.results.filter((result) => value !== result.id);
      return {
        ...state,
        results: newResult,
      };
    default:
      return state;
  }
};

export default reducer;
