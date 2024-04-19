import React from "react";
import "./style.scss";
import MenuType1 from "../../assets/img/menuType1.svg";
import MenuType2 from "../../assets/img/menuType2.svg";
import MenuType3 from "../../assets/img/menuType3.svg";
import MenuType4 from "../../assets/img/menuType4.svg";
type Props = {};

function MenuTypes({}: Props) {
  return (
    <div className="MenuTypes">
      <div className="container">
        <div className="card">
          <img className="icon" src={MenuType1}></img>
          <div className="head">Fresh Product</div>
          <div className="text">
            Professional consider everyone probls small niche friendly.
          </div>
          <button className="moreBtn">See more</button>
        </div>
        <div className="line"></div>
        <div className="card">
          <img className="icon" src={MenuType2}></img>
          <div className="head">Skilled Chefs</div>
          <div className="text">
            Professional consider everyone probls small niche friendly.
          </div>
          <button className="moreBtn">See more</button>
        </div>
        <div className="line"></div>

        <div className="card">
          <img className="icon" src={MenuType3}></img>
          <div className="head">Drinks & Juices</div>
          <div className="text">
            Professional consider everyone probls small niche friendly.
          </div>
          <button className="moreBtn">See more</button>
        </div>
        <div className="line"></div>

        <div className="card">
          <img className="icon" src={MenuType4}></img>
          <div className="head">Vegan Cuisine</div>
          <div className="text">
            Professional consider everyone probls small niche friendly.
          </div>
          <button className="moreBtn">See more</button>
        </div>
      </div>
    </div>
  );
}

export default MenuTypes;
