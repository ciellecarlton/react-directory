import React from "react";

function Col(props) {
  const size = props.size.split(" ").map(size => "col-" + size).join(" ");

  return <div data-name="Col" className={`_component ${size}`}  {...props} />;
}

export default Col;
