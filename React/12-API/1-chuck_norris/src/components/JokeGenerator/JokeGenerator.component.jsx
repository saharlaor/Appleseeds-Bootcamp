import React from "react";
import chuckNorris from "../../api/chuckNorris";
import Categories from "../Categories/Categories.component";

class JokeGenerator extends React.Component {
  state = {
    joke: "",
    categories: [],
    category: false,
  };

  async componentDidMount() {
    const categories = await this.getCategories();
    this.setState({ categories: categories });
  }

  getCategories = async () => {
    const req = await chuckNorris.get("/jokes/categories");
    return ["Pick a category", ...req.data];
  };

  handleGetJoke = async () => {
    let uri = "/jokes/random";
    if (this.state.category) uri += `?category=${this.state.category}`;
    const jokeReq = await chuckNorris.get(uri);
    console.log(jokeReq.data.value);
    this.setState({ joke: jokeReq.data.value });
  };

  handleCategoryChange = (e) => {
    this.setState({ category: e.target.value });
  };

  render() {
    return (
      <>
        <button onClick={this.handleGetJoke}>Get Joke</button>
        {this.state.categories.length && (
          <Categories
            categories={this.state.categories}
            handleSelectChange={this.handleCategoryChange}
          />
        )}
        <div className="joke-text">{this.state.joke}</div>
      </>
    );
  }
}

export default JokeGenerator;
