import React, { Component } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Name from "./components/Name/Name";
import { getNames, getBefore1990 } from "./data";

class App extends Component {
  constructor() {
    super();
    this.state = {
      names: getNames(),
      olderPeople: getBefore1990(),
    };
  }

  render() {
    const nameEls = this.state.names.map((personName, i) => (
      <Name key={i} name={personName} />
    ));
    const cardEls = this.state.olderPeople.map((person, i) => (
      <Card key={i} person={person} />
    ));
    console.log(cardEls);
    return (
      <div>
        {nameEls}
        {cardEls}
      </div>
    );
  }
}

export default App;
