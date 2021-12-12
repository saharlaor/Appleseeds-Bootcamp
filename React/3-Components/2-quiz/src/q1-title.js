import React from "react";

class Q1Title extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "How much do you love front end?",
    };
  }

  render() {
    return <label htmlFor="q1">{this.state.title}</label>;
  }

  componentDidMount() {
    this.setState({
      someKey: "otherValue",
    });
  }
}

export default Q1Title;
