import React from "react";
import "./ColorButton.css";

class ColorButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.color,
      onClick: this.props.onClick,
    };
  }

  render() {
    return (
      <button className={this.state.color} onClick={this.state.onClick}>
        {this.state.color}
      </button>
    );
  }

  componentDidMount() {
    this.setState({
      someKey: "otherValue",
    });
  }
}

export default ColorButton;
