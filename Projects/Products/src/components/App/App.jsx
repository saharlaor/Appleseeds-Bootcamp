import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "../Header/Header";
import Homepage from "../Homepage/Homepage";
import Products from "../Products/Products";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route path="/" exact component={Homepage} />
        <Route path="/products" exact component={Products} />
      </Router>
    </div>
  );
}

export default App;
