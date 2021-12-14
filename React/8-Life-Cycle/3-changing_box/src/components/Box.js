import React from "react";

class Box extends React.Component {
  constructor() {
    super();
    this.state = {
      color: this.getColor(),
      changeCount: 0,
    };
  }

  render() {
    const radius = this.state.changeCount >= 5 ? "50%" : "0px";
    return (
      <div
        className="box"
        style={{
          backgroundColor: this.state.color,
          borderRadius: radius,
        }}></div>
    );
  }

  getColor = () => {
    const count = this.state ? this.state.changeCount : 0;
    return ["red", "green", "blue", "yellow", "orange"][count % 5];
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        color: this.getColor(),
        changeCount: this.state.changeCount + 1,
      });
    }, 1000);
  }
}

export default Box;
