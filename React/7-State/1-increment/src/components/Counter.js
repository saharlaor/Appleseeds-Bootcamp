import React from 'react';

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0
    };
  }

  increment() {
    this.setState({value: this.state.value + 1});
  }

  render() {
    return (
    <div>
        <button onClick={this.increment.bind(this)}>increment</button>
        <span>{this.state.value}</span>
      </div>
    );
  }

  componentDidMount() {
    this.setState({
      someKey: 'otherValue'
    });
  }
}

export default Counter;
