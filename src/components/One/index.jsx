import React from "react";
import "./index.css";
import logo from "../../images/headerLogo.png";
import bg from "../../images/illustration.png";
import site from "../../images/site.png";
import custom from "../../images/customers.png";
import btn from "../../images/Group28.png";

export const One = () => {
  return (
    <div className="container">
      <div style={{ width: "100%", backgroundColor: "#f1f5ff" }}>
        <img src={logo} style={{ width: "100%" }} />
        <img src={bg} style={{ width: "100%" }} />
        <img src={custom} style={{ width: "100%" }} />
      </div>

      <div className="one-bl2">
        <div className="in-one-bl2">
          <b>DESKTOP AND MOBILE APP</b>
          <h1>Plan and manage</h1>
          <p>
            Brute laoreet efficiendi id his, ea illum nonumes luptatum <br />{" "}
            pro. Usu atqui laudem an, insolens gubergren similique est cu.{" "}
            <br />
            Et vel modus congue vituperata. Solum patrioque no sea.
            <br /> Mea ex malis mollis oporteat. <br /> Eum an expetenda
            consequat.
          </p>
          <div>
            <img src={btn} />
          </div>
        </div>

        <div className="two-bl">
          <img src={site} />
        </div>
      </div>
    </div>
  );
};
