import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "../Header/Header";
import Homepage from "../Homepage/Homepage";
import Products from "../Products/Products";
import ProductDetails from "../ProductDetails/ProductDetails";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route path="/" exact component={Homepage} />
        <Route path="/products" exact component={Products} />
        <Route path="/product/:id" exact component={ProductDetails} />
      </Router>
    </div>
  );
}

export default App;
