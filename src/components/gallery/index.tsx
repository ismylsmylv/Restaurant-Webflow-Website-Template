import React from "react";
import "./style.scss";
import GalleryBL from "../../assets/img/galleryBL.png";
import GalleryBR from "../../assets/img/galleryBR.png";
import GalleryTL from "../../assets/img/galleryTL.png";
import GalleryTR from "../../assets/img/galleryTR.png";
import GalleryBig from "../../assets/img/galleryBig.png";

function Gallery() {
  return (
    <div className="Gallery">
      <div className="headings">
        <div className="subText">Galary</div>
        <div className="heading">What We Make</div>
      </div>
      <div className="container">
        <div className="col  col1">
          <img src={GalleryTL} alt="" />
          <img src={GalleryBL} alt="" />
        </div>
        <div className="col  col2">
          <img src={GalleryBig} alt="" />
        </div>
        <div className="col  col3">
          <img src={GalleryTR} alt="" />
          <img src={GalleryBR} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
