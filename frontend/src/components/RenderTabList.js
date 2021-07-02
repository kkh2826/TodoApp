import React from 'react';


const RenderTabList = ({ viewCompleted, DisplayCompledted }) => {
    return (
        <div className="nav nav-tabs">
          <span
            className={viewCompleted ? "nav-link active" : "nav-link"}
            onClick={() => DisplayCompledted(true)}
          >
            Complete
          </span>
          <span
            className={viewCompleted ? "nav-link" : "nav-link active"}
            onClick={() => DisplayCompledted(false)}
          >
            Incomplete
          </span>
        </div>
      );
}

export default RenderTabList;