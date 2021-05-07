import React from "react";
import "./index.css";
import seven from "../../images/seven.png";

export const Seven = () => {
  return (
    <div className="seven_container">
      <div className="seven_clock">
        <h2 className="title">Sign up for newsletter</h2>
        <span className="seven_text">
          Cu qui soleat partiendo urbanitas. Eum aperiri <br /> indoctum eu,
          homero alterum.
        </span>
      </div>
      <div className="seven_photo">
        <img src={seven} alt="" />
      </div>
    </div>
  );
};
