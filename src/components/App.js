import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Route from "react-router-dom/Route";
import RandomShapes from "./RandomShapes";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import NavBar from "./NavBar";
import Projects from "./Projects";
import NotFound from "./NotFound";

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
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
