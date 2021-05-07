import React from "react";
import "./index.css";
import six from "../../images/sixblock.png";

export const Six = () => {
  return (
    <div className="six_block">
      <div className="six_content">
        <p>PLAN YOUR LIFE</p>
        <h1>Get started now</h1>
        <span>
          Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu
          atqui laudem an, insolens <br /> gubergren similique est cu. Et vel
          modus congue vituperata.
        </span>
        <div className="six_photo">
          <img src={six} />
        </div>
      </div>
    </div>
  );
};
