import React from "react";
import "./index.css";
import img11 from "../../images/11.png";
import img12 from "../../images/12.png";
import img13 from "../../images/13.png";
import img14 from "../../images/14.png";
import img15 from "../../images/15.png";

export const Five = () => {
  return (
    <div className="five_container">
      <div className="five_title">
        <span>Customer help</span>
        <h1>Frequently asked questions</h1>
        <div className="five_photo">
          <img src={img11} />
          <img src={img12} />
          <img src={img13} />
          <img src={img14} />
          <img src={img15} />
        </div>
      </div>

      <div></div>

      {/* <div className="five_content">
        <div className="one_text">
          <img style={{ width: "20px", height: "20px" }} src={vector} />
          <p>Reque insolens in vel?</p>
          <img src={line} />
        </div>
        <div className="two_text">
          <img style={{ width: "20px", height: "20px" }} src={vector} />
          <p>Vis rebum error graecis ea, id sit postea accusamus?</p>
        </div>
        <div className="three_text">
          <img style={{ width: "20px", height: "20px" }} src={vector2} />
          <p>Lorem repudiandae ne nec?</p>
          <span>
            Quidam vocibus eum ne, erat consectetuer voluptatibus ut <br /> nam.
            Eu usu vidit tractatos, vero tractatos ius an, in mel <br /> diceret
            persecuti.
            <img src={button} />
          </span>
        </div>
        <div className="four_text">
          <img style={{ width: "20px", height: "20px" }} src={vector} />
          <p>Ad dicit numquam vel. Et eos iudico feugait percipitur?</p>
        </div>
        <div className="five_text">
          <img style={{ width: "20px", height: "20px" }} src={vector} />

          <p>Sea no dico percipitur. Fierent constituam definitiones id eum?</p>
        </div>
      </div> */}
    </div>
  );
};
