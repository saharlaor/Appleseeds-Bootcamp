import React from "react";
import Form from "./components/Form";
import Confirm from "./components/Confirm";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      submitted: false,
    };
  }

  handleFormSubmit(e) {
    e.preventDefault();
    console.log(
      [...e.target].slice(0, -1).forEach((value) => console.dir(value.value))
    );
  }

  render() {
    return (
      <div className="App">
        {this.state.submitted ? (
          <Confirm />
        ) : (
          <Form onSubmit={this.handleFormSubmit} />
        )}
      </div>
    );
  }
}

export default App;
