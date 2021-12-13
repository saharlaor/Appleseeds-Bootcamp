import React from "react";

class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: "someValue",
    };
  }

  render() {
    return (
      <div className="card">
        <img src={this.props.img} alt="The image" />
        <h2 className="title">{this.props.title}</h2>
        <p className="description">{this.props.description}</p>
        <a href={this.props.link1} className="link">
          Share
        </a>
        <a href={this.props.link2} className="link">
          Explore
        </a>
      </div>
    );
  }

  componentDidMount() {
    this.setState({
      someKey: "otherValue",
    });
  }
}

export default Card;
