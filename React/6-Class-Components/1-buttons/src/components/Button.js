import React from "react";

class Button extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: "someValue",
    };
  }

  render() {
    if (this.props.bold) {
      return (
        <button>
          <b>{this.props.content}</b>
        </button>
      );
    }
    return <button>{this.props.content}</button>;
  }

  componentDidMount() {
    this.setState({
      someKey: "otherValue",
    });
  }
}

export default Button;
