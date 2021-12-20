import React from "react";

class Avatar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      imgUrl: "",
    };
  }

  render() {
    return this.props.imgUrl &&
      this.props.name
        .toLowerCase()
        .includes(this.props.filter.toLowerCase()) ? (
      <div>
        <h5>{this.props.name}</h5>
        <img src={this.props.imgUrl} alt="Random avatar" />
      </div>
    ) : (
      <></>
    );
  }
}

export default Avatar;
