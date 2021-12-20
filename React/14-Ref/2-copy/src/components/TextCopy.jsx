import React, { Component } from "react";

class TextCopy extends Component {
  textRef = React.createRef();
  buttonRef = React.createRef();

  copyTextArea = () => {
    this.textRef.current.select();
    document.execCommand("copy");
    this.buttonRef.current.focus();
  };

  render() {
    return (
      <>
        <textarea ref={this.textRef} cols="30" rows="10"></textarea>
        <button ref={this.buttonRef} onClick={this.copyTextArea}>
          Copy
        </button>
      </>
    );
  }

  componentDidMount() {
    this.setState({
      someKey: "otherValue",
    });
  }
}

export default TextCopy;
