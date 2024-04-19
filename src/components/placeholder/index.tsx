import React from "react";
import "./style.scss";
import PlaceholderImg from "./../../assets/img/placeholder.png";
type Props = {};

function Placeholder({}: Props) {
  return (
    <div className="Placeholder">
      <img src={PlaceholderImg} alt="" />
    </div>
  );
}

export default Placeholder;
