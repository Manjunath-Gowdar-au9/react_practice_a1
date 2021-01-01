import React, { Fragment } from "react";

const UserInput = (props) => {
  return (
    <Fragment>
      <input type="text" onChange={props.changed} value={props.value}/>
    </Fragment>
  );
};

export default UserInput;
