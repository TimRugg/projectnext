import React from "react";
import "./ProjectTrend.css";

const ProjectTrend = props => {
  return (
    <div className="row">
      <div className="col-sm-1"></div>
      <div className="col-sm-3 trendTitle">
        <span>{props.project.title}</span>
      </div>
      <div className="col-sm-7">
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: props.project.progress + "%" }}
          />
        </div>
      </div>
      <div className="col-sm-1"></div>
    </div>
  );
};

export default ProjectTrend;
