import React from 'react';

class Box extends React.Component {
  constructor() {
    super();
    this.state = {
      miniBoxClass: ""
    };
  }

  toggleHide() {
    this.state.miniBoxClass === "" ? this.setState({miniBoxClass: "hide"}) : this.setState({miniBoxClass: ""});
  }

  render() {
    return (
    <div className="box">
      <button onClick={this.toggleHide.bind(this)}>show/hide</button>
      <div id="mini-box" className={this.state.miniBoxClass}></div>
    </div>
    );
  }
}

export default Box;
