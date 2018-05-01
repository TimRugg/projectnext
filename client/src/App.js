import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import NoMatch from "./pages/NoMatch";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Projects} />
        <Route exact path="/projects/:id" component={Project} />
        <Route component={NoMatch} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
