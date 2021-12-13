import React from 'react';

class Crement extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      color: "black"
    };
  }

  increment() {
    this.state.value < 10 && this.setNewState(this.state.value + 1);
  }

  decrement() {
    this.state.value > -10 && this.setNewState(this.state.value - 1);
  }

  setNewState(newVal) {
    let newCol;
    if (newVal > 0) {
      newCol = "green";
    } else if (newVal < 0) {
      newCol = "red";
    } else {
      newCol = "black";
    }

    this.setState(
      {
        value: newVal,
        color: newCol
      }
    );
  }

  render() {
    return (
      <div className="counter">
        <button onClick={this.increment.bind(this)}>+</button>
        <span className={this.state.color}>{this.state.value}</span>
        <button onClick={this.decrement.bind(this)}>-</button>
      </div>
    );
  }
}

export default Crement;
