import React from "react";

class Q2Title extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "What is your favorite front end feature/topic?",
    };
  }

  render() {
    return <label htmlFor="q2">{this.state.title}</label>;
  }

  componentDidMount() {
    this.setState({
      someKey: "otherValue",
    });
  }
}

export default Q2Title;
