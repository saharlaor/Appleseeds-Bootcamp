import React from "react";
import "./Homepage.css";

class Homepage extends React.Component {
  render() {
    return (
      <div className="Homepage">
        <button onClick={() => this.props.history.goBack()}>Back</button>
        Homepage
      </div>
    );
  }
}

export default Homepage;
