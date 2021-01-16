import React from "react";

function Container(props) {
  return <div data-name="container" className={`_component container${props.fluid ? "-fluid" : ""}`} {...props} />;
}

export default Container;