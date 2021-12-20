import React from "react";
import Avatar from "./components/Avatar";
import Filter from "./components/Filter";
import randomUser from "./api/randomUser";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatars: [],
      filter: "",
    };
  }

  componentDidMount() {
    Object.keys([...Array(10)]).forEach((i) => {
      this.getPerson();
    });
  }

  componentDidUpdate = () => {};

  getPerson = async () => {
    try {
      const { data } = await randomUser.get("/api");
      const person = data.results[0];
      const { title, first, last } = person.name;
      this.setState((prevState) => {
        return {
          avatars: [
            ...prevState.avatars,
            {
              id: person.login.uuid,
              name: `${title} ${first} ${last}`,
              imgUrl: person.picture.large,
            },
          ],
        };
      });
    } catch (err) {
      console.dir(err.message);
    }
  };

  handleFilterClick = (text) => {
    this.setState({ filter: text });
  };

  render() {
    return (
      <div className="App">
        <Filter handler={this.handleFilterClick} />
        {this.state.avatars.map((avatar) => {
          return (
            <Avatar
              name={avatar.name}
              imgUrl={avatar.imgUrl}
              filter={this.state.filter}
              key={avatar.id}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
