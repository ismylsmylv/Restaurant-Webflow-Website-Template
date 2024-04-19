import React from "react";
import "./style.scss";
import AboutImg from "./../../assets/img/about.png";
type Props = {};

function LowerAbout({}: Props) {
  return (
    <div className="LowerAbout">
      <div className="container">
        <img src={AboutImg} alt="" className="left" />
        <div className="line"></div>
        <div className="right">
          <div className="story">
            <div className="head">The Story</div>
            <div className="text">
              Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using 'Content here, content gfshere',
              makinlook like readable English. Many desktop publishing packages.
            </div>
          </div>
          <div className="years">
            <div className="yearCard">
              <div className="year">1996</div>
              <div className="text">
                Lorem Ipsum is that it has a more-or-less normal distribution
              </div>
            </div>
            <div className="yearCard">
              <div className="year">2021</div>
              <div className="text">
                Lorem Ipsum is that it has a more-or-less normal Content content
              </div>
            </div>
          </div>
          <div className="sign">
            <div className="signName">JOSEFINE</div>
            <div className="signature">Josefine</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LowerAbout;
