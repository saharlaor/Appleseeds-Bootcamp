import React from "react";
import Q1Input from "./q1-input";
import Q1Title from "./q1-title";

class Q1 extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: "someValue",
    };
  }

  render() {
    return (
      <div className="q1">
        <Q1Title />
        <Q1Input />
      </div>
    );
  }

  componentDidMount() {
    this.setState({
      someKey: "otherValue",
    });
  }
}

export default Q1;
