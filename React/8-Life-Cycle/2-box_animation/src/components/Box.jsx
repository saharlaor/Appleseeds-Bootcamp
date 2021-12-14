import React from "react";
import "./Box.css";

class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: this.props.size,
      boxClass: "",
    };
  }

  render() {
    const style = {
      height: this.state.size,
      width: this.state.size,
    };
    return <div id="box" className={this.state.boxClass} style={style}></div>;
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ boxClass: "box-animation" });
      setTimeout(() => {
        this.setState({ boxClass: "" });
      }, 4000);
    }, 1000);
  }
}

export default Box;
