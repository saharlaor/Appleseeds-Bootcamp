import React from "react";

class QuizTitle extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "How Do You Like Front End?",
    };
  }

  render() {
    return <h1>{this.state.title}</h1>;
  }

  componentDidMount() {
    this.setState({
      someKey: "otherValue",
    });
  }
}

export default QuizTitle;
