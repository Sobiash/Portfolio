import React, { Component } from "react";
import "./App.css";
import Home from "./Home";

class App extends Component {
  render() {
    const name = [
      "S",
      "O",
      "B",
      "I",
      "A",
      " ",
      "S",
      "H",
      "A",
      "H",
      "B",
      "A",
      "Z"
    ];
    return (
      <div className="App">
        <div className="name">
          <Home name={name} />
          <h2 />
        </div>
      </div>
    );
  }
}

export default App;
