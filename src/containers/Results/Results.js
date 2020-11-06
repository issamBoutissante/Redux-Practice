import React from "react";
import Result from "./Result/Result";
import { connect } from "react-redux";

const results = (props) => {
  const onAddResult = () => {
    props.addResult();
  };
  return (
    <React.Fragment>
      <button onClick={onAddResult}>Add Result</button>
      <ul>
        {props.results.map((result) => (
          <Result key={result} remove={() => props.removeResult(result.id)}>
            {result.value}
          </Result>
        ))}
      </ul>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    results: state.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addResult: () => dispatch({ type: "add_result" }),
    removeResult: (val) => dispatch({ type: "remove_result", value: val }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(results);
