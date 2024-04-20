import React, { useEffect } from "react";
import "./style.scss";
import PlaceholderImg from "./../../assets/img/placeholder.png";
type Props = {};

function Placeholder(imageLink) {
  useEffect(() => {
    console.log(imageLink);
  }, []);
  return (
    <div className="Placeholder">
      <img src={imageLink.imageLink || PlaceholderImg} alt="" />
    </div>
  );
}

export default Placeholder;
