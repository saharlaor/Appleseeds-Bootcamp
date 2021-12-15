import React from "react";
import Spinner from "./components/Spinner";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      timer: 10,
      show: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState((prevState) => {
        return { timer: prevState.timer - 1 };
      });
    }, 1000);
  }

  render() {
    return <div className="App">{this.state.show && <Spinner />}</div>;
  }

  componentDidUpdate(prevProps, prevState) {
    setTimeout(() => {
      const newState = {
        timer: prevState.timer - 1,
        show: prevState.timer === 0,
      };
      this.setState((prevState) => newState);
    }, 1000);
  }
}

export default App;
