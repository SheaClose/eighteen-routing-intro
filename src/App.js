import React, { Component } from "react";
import logo from "./logo.svg";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import About from "./About";
import Nums from "./Nums";
import "./App.css";
let nums = [1, 2, 3, 4, 5];
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            {nums.map(c => (
              <Link to={`/nums/${c}`}>Nums {c}</Link>
            ))}
          </header>
          <Switch>
            <Route
              path="/"
              exact
              render={() => {
                return <div>Hello from route 1!</div>;
              }}
            />
            <Route path="/about" component={About} />
            <Route component={Nums} path="/nums/:id" />
            <Route path="*" render={() => <div>404 Not Found!</div>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
