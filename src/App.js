import React, { Component } from "react";

import Counter from "./containers/Counter/Counter";
import "./App.css";
import Results from "./containers/Results/Results";

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./store/reducer";
const create = createStore;
const store = create(reducer);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Counter />
          <Results />
        </Provider>
      </div>
    );
  }
}

export default App;
