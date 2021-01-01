import React from "react";

const UserOutput = (props) => {
  return (
    <React.Fragment>
      <p>hello </p>
      <p>I'm {props.userName}</p>
    </React.Fragment>
  );
};

export default UserOutput;
