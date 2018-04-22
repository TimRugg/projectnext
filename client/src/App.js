import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Projects from "./pages/Projects";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Projects} />
        <Route exact path="/projects" component={Projects} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
