import React from "react";
import Images from "../images/index.js";
import "./index.css";

function veggiesSection() {
  return (
    <div>
      <span className="fruits">Veggies</span>
      <div className="container">
        <div>
          <img src={Images.vegg_1} alt="fruits" className="fruits-images" />
          <p>Cabbage</p>
        </div>
        <div>
          <img src={Images.vegg_2} alt="fruits" className="fruits-images" />
          <p>Cauliflower</p>
        </div>
        <div>
          <img src={Images.vegg_3} alt="fruits" className="fruits-images" />
          <p>Brinjal</p>
        </div>
        <div>
          <img src={Images.vegg_4} alt="fruits" className="fruits-images" />
          <p>Carrot</p>
        </div>
        <div>
          <img src={Images.vegg_5} alt="fruits" className="fruits-images" />
          <p>Ladies Finger</p>
        </div>
        <div>
          <img src={Images.vegg_6} alt="fruits" className="fruits-images" />
          <p>Peas</p>
        </div>
        <div>
          <img src={Images.vegg_7} alt="fruits" className="fruits-images" />
          <p>Pumpkin</p>
        </div>
        <div>
          <img src={Images.vegg_8} alt="fruits" className="fruits-images" />
          <p>Capsicum</p>
        </div>
      </div>
    </div>
  );
}

export default veggiesSection;
