import React from "react";
import "./CurrentTrend.css";

const CurrentTrend = props => {
  return (
    <div>
      <div className="currentTrendTitle">
        {/* <span>{props.project.title}</span> */}
      </div>
      <div className="progress">
        <div
          className="progress-bar bg-success"
          role="progressbar"
          style={{ width: props.project.current_pct + "%" }}
        >
          {props.project.current}
        </div>
        <div
          className="progress-bar bg-info"
          role="progressbar"
          style={{ width: props.project.longest_pct + "%" }}
        >
          {props.project.longest}
        </div>
      </div>
    </div>
  );
};

export default CurrentTrend;
