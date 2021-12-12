import React from "react";

class Q2Input extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <input type="text" name="q2" id="q2" />;
  }

  componentDidMount() {
    this.setState({
      someKey: "otherValue",
    });
  }
}

export default Q2Input;
