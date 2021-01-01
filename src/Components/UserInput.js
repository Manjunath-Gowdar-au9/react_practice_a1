import React, { Fragment } from "react";


const UserInput = (props) => {
  // inline style
  const inlineStyle = {
    border: '2px solid red'
  }
  return (
    <Fragment>
      <input type="text" style={inlineStyle} onChange={props.changed} value={props.value}/>
    </Fragment>
  );
};

export default UserInput;
