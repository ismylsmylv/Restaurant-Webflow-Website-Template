import { useEffect } from "react";
import PlaceholderImg from "./../../assets/img/placeholder.png";
import "./style.scss";

function Placeholder(imageLink: { imageLink: any }) {
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
