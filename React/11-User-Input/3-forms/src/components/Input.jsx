import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: this.props.type,
      title: this.props.title,
      name: this.props.name,
      value: this.props.value,
      onChange: this.props.onChange,
    };
  }

  render() {
    let inputEl;
    switch (this.state.type) {
      case "textarea":
        inputEl = (
          <textarea
            name={this.state.name}
            id={this.state.name}
            value={this.props.value}
            onChange={this.state.onChange}></textarea>
        );
        break;
      case "select":
        const options = [
          "0-15",
          "16-30",
          "31-45",
          "46-60",
          "61-75",
          "76-90",
          "Over 90",
        ].map((value) => <option value={value}>{value}</option>);
        inputEl = (
          <select
            name={this.state.name}
            id={this.state.name}
            value={this.props.value}
            onChange={this.state.onChange}>
            {options}
          </select>
        );
        break;
      case "text":
        inputEl = (
          <input
            type={this.state.type}
            name={this.state.name}
            id={this.state.name}
            value={this.props.value}
            onChange={this.state.onChange}
          />
        );
        break;
      default:
        break;
    }
    return (
      <div className="input">
        <label htmlFor={this.state.name}>{this.state.title}</label>
        {inputEl}
      </div>
    );
  }
}

export default Input;
