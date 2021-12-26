import React from "react";
import Todo from "../Todo/Todo";
import "./App.css";

const DATA = [
  { name: "CSS", completed: true },
  { name: "JavaScript", completed: true },
  { name: "Learn React", completed: false },
  { name: "Learn mongoDB", completed: false },
  { name: "Learn Node JS", completed: false },
];

function App() {
  const todoEls = DATA.map((el, i) => (
    <Todo title={el.name} isComplete={el.completed} key={i} />
  ));
  return <div className="App">{todoEls}</div>;
}

export default App;
