import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Home from "../Home/Home";
import About from "../About/About";
import Help from "../Help/Help";
import NotFound from "../NotFound/NotFound";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
