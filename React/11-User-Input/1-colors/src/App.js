import "./App.css";
import React from "react";
import ColorButton from "./components/ColorButton";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      color: "",
    };
  }

  handleButtonClick = (e) => {
    this.setState({ color: e.target.classList[0] });
  };

  render() {
    const buttons = ["red", "green", "blue"].map((c) => (
      <ColorButton color={c} onClick={this.handleButtonClick} />
    ));
    return (
      <div className="App">
        {buttons}
        <div>The color selected is: {this.state.color}</div>
      </div>
    );
  }

  componentDidMount() {
    this.setState({
      someKey: "otherValue",
    });
  }
}

export default App;
