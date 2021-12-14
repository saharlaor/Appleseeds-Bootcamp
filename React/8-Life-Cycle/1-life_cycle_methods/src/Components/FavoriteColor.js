import React from "react";

class FavoriteColor extends React.Component {
  constructor() {
    super();
    this.state = {
      favoriteColor: "red",
    };
  }

  render() {
    return <h1>My favorite color is {this.state.favoriteColor}</h1>;
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: "gold" });
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    const prevColorEl = document.querySelector("#prev-color");
    prevColorEl.textContent = `The updated favorite color is ${this.state.favoriteColor}`;
  }
}

export default FavoriteColor;
