import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Projects from "./pages/Projects";
import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";
import Header from "./components/Header";
import NextList from "./components/NextList";

const App = () => (
  <Router>
    <div>
      <Header />
      <NextList />
      <Switch>
        <Route exact path="/" component={Projects} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
