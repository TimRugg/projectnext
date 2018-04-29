import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="jumbotron">
      <h1 className="display-3">Project Next!</h1>
      <hr className="my-4" />
      <p>Only see the most important things to be done every day!</p>
      <p className="lead">
        <a className="btn btn-primary" href="#" role="button">
          Learn more
        </a>
      </p>
    </div>
  );
};

export default Header;
