import React from "react";
const result = (props) => {
  return <li onClick={props.remove}>{props.children}</li>;
};
export default result;
