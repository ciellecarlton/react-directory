import React from "react";

function Row(props) {
  return <div data-name="Row" className={`_component row${props.fluid ? "-fluid" : ""}`} {...props} />;
}

export default Row;