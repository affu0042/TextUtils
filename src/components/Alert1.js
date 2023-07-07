import React from "react";

function Alert1(props) {
    const capitalise = (word) =>{
        const lower = word.toLowercase();
        return lower.charAt(0).toUppercase() + lower.slice(1);
    }
  return (
    props.alert && 
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{props.alert.type} </strong>: {props.alert.msg}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
  );
}
export default Alert1;