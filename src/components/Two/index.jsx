import React from "react";
import "./index.css";
import { data } from "./data";
import btn1 from "../../images/btn1.png";
import btn2 from "../../images/btn2.png";
import gr1 from "../../images/Group1.png";
import gr2 from "../../images/Group2.png";

export const Two = () => {
  return (
    <div>
      <div className="block2">
        <h6 className="about">ABOUT US</h6>
        <h1>Read about our app</h1>
        <div className="render_block">
          {data.map((el, id) => (
            <div key={id}>
              <img className="render_img" src={el.img} />
              <br />
              <b className="render_title">{el.title}</b>
              <br />
              <p className="render_text1">{el.text}</p>
            </div>
          ))}
        </div>

        <div className="render_btn">
          <img className="img_btn" src={btn1} />
          <p className="or"> - OR - </p>
          <img src={btn2} />
        </div>
      </div>

      <div className="blockOne">
        <div className="blockTwo">
          <div className="text_photo">
            <img src={gr1} />
            <p>89%</p>
            <p>
              Customers who have <br /> increased their productivity
            </p>
          </div>
        </div>
        <div className="blockTwo-two">
          <div className="photo2">
            <img src={gr2} />
            <p>3123</p>
            <p>Users who have used our application</p>
          </div>
        </div>
      </div>
    </div>
  );
};
