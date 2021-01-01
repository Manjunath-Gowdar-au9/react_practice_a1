import "./App.css";
import React, { Component, Fragment } from "react";
import UserInput from "./Components/UserInput";
import UserOutput from "./Components/UserOutput";

class App extends Component {
  state = {
    userName: "max  ",
  };

  inputChangeHandler = (event) => {
    console.log(event)
    this.setState({
      userName: event.target.value,
    });
  };
  render() {
    return (
      <Fragment>
        <center>
          <UserInput changed={this.inputChangeHandler} value={this.state.userName} />
          <UserOutput userName={this.state.userName} />
        </center>
      </Fragment>
    );
  }
}

export default App;
