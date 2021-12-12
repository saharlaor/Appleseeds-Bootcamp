import React from "react";
import Q2Input from "./q2-input";
import Q2Title from "./q2-title";

class Q2 extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="q2">
        <Q2Title />
        <Q2Input />
      </div>
    );
  }

  componentDidMount() {
    this.setState({
      someKey: "otherValue",
    });
  }
}

export default Q2;
