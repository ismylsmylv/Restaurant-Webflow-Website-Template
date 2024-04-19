import React from "react";
import "./style.scss";
import Offer1 from "../../assets/img/offer1.png";
import Offer2 from "../../assets/img/offer2.png";
type Props = {};

function Offers({}: Props) {
  return (
    <div className="Offers">
      <div className="container">
        <div className="subText">Offer</div>
        <div className="head">Our special Offer dishes</div>
        <div className="text">
          Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content making.
        </div>
        <div className="offerList">
          <img className="offer" src={Offer1} alt="" />
          <img className="offer" src={Offer2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Offers;
