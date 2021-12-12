import React from "react";
import Q1 from "./q1";
import Q2 from "./q2";
import QuizTitle from "./quiz-title";

class Quiz extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: "someValue",
    };
  }

  render() {
    return (
      <div className="quiz">
        <QuizTitle />
        <Q1 />
        <Q2 />
      </div>
    );
  }

  componentDidMount() {
    this.setState({
      someKey: "otherValue",
    });
  }
}

export default Quiz;
