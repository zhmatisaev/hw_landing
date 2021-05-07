import React from "react";
import "./index.css";
import initial from "../../images/content.png";
import button1 from "../../images/read now button.png";
import button2 from "../../images/button bookmarks.png";

export const Three = () => {
  return (
    <div className="container_three">
      <div className="block_text">
        <p>OUR RESOURCES</p>
        <h2>Start reading our blog</h2>
      </div>
      <div className="block_three">
        <div>
          <img src={initial} />
        </div>
      </div>
    </div>
  );
};
