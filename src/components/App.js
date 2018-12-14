import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RandomShapes from "./RandomShapes";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import NavBar from "./NavBar";
import Projects from "./Projects";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <RandomShapes />
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
            <Route component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
