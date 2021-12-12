import React from "react";

class Q1Input extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <input type="range" name="q1" id="q1" />;
  }

  componentDidMount() {
    this.setState({
      someKey: "otherValue",
    });
  }
}

export default Q1Input;
