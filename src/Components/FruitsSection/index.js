import React from "react";
import Images from "../images/index.js";
import "./index.css";

function fruitSection() {
  return (
    <div>
      <span className="fruits">Fruits</span>
      <div className="container">
        <div>
          <img src={Images.fruit_1} alt="fruits" className="fruits-images" />
          <p>Mangoes</p>
        </div>
        <div>
          <img src={Images.fruit_2} alt="fruits" className="fruits-images" />
          <p>Grapes</p>
        </div>
        <div>
          <img src={Images.fruit_3} alt="fruits" className="fruits-images" />
          <p>Pineapples</p>
        </div>
        <div>
          <img src={Images.fruit_4} alt="fruits" className="fruits-images" />
          <p>Bananas</p>
        </div>
        <div>
          <img src={Images.fruit_5} alt="fruits" className="fruits-images" />
          <p>Apples</p>
        </div>
        <div>
          <img src={Images.fruit_6} alt="fruits" className="fruits-images" />
          <p>Guavas</p>
        </div>
        <div>
          <img src={Images.fruit_7} alt="fruits" className="fruits-images" />
          <p>Oranges</p>
        </div>
        <div>
          <img src={Images.fruit_8} alt="fruits" className="fruits-images" />
          <p>Pomegranates</p>
        </div>
      </div>
    </div>
  );
}

export default fruitSection;
