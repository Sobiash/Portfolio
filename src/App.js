import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Route from "react-router-dom/Route";
import RandomShapes from "./components/RandomShapes";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <RandomShapes />
          <NavBar />
          <Switch>
            <Route path="/Portfolio" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
