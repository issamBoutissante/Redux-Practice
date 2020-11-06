import React, { Component } from "react";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import { connect } from "react-redux";

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.IncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.DecrementCounter}
        />
        <CounterControl label="Add 5" clicked={this.props.AddFiveToCounter} />
        <CounterControl
          label="Subtract 5"
          clicked={this.props.SubFiveFromCounter}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.counter,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    IncrementCounter: () => dispatch({ type: "inc" }),
    DecrementCounter: () => dispatch({ type: "dec" }),
    AddFiveToCounter: () => dispatch({ type: "add", value: 5 }),
    SubFiveFromCounter: () => dispatch({ type: "sub", value: 5 }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
