import React from "react";

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  render() {
    return (
      <div className="Filter">
        <input
          type="text"
          onChange={(e) => this.setState({ text: e.target.value })}
        />
        <button onClick={() => this.props.handler(this.state.text)}>
          filter
        </button>
      </div>
    );
  }
}

export default Filter;
