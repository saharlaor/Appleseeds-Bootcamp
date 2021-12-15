import React from "react";

class CheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: this.props.content,
      checked: this.props.checked,
    };
  }

  render() {
    const isChecked = this.state.checked && "checked";
    return (
      <div className="checkbox">
        <input type="checkbox" defaultChecked={this.state.checked} />
        <label>{this.state.content}</label>
      </div>
    );
  }
}

export default CheckBox;
