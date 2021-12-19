import React from "react";
import axios from "axios";

class JokeGenerator extends React.Component {
  state = {
    joke: "",
  };

  handleGetJoke = async () => {
    const jokeReq = await axios.get("https://api.chucknorris.io/jokes/random");
    this.setState({ joke: jokeReq.data.value });
  };

  render() {
    return (
      <>
        <button onClick={this.handleGetJoke}>Get Joke</button>
        {/* <select>
          Auto generated from api request to categories
        </select> */}
        <span className="joke-text">{this.state.joke}</span>
      </>
    );
  }
}

export default JokeGenerator;
