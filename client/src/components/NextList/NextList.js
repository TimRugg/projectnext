import React from 'react';
import "./NextList.css";
import { Link } from "react-router-dom";

const NextList = (props) => {
  return (

  <div className="list-group">

  <Link className="list-group-item list-group-item-action flex-column align-items-start" to={"/"}>
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">Make appointment to review requirements.</h5>
      <small>0 days ago</small>
      <p>Project: New web site for group.</p>
    </div>
  </Link>
  
  <Link className="list-group-item list-group-item-action flex-column align-items-start" to={"/"}>
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">Buy energy savings lightbulbs.</h5>
      <small>0 days ago</small>
      <p>Project: Reduce energy use.</p>
    </div>
  </Link>

  <Link className="list-group-item list-group-item-action flex-column align-items-start" to={"/"}>
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">Remove dead trees on side of house.</h5>
      <small>0 days ago</small>
      <p>Project: Landscape new property.</p>
    </div>
  </Link>

</div>


  );
};

export default NextList;
