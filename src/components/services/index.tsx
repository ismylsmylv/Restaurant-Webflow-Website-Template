import "./style.scss";
import ServiceIcon1 from "../../assets/img/serviceIcon1.svg";
import ServiceIcon2 from "../../assets/img/serviceIcon2.svg";
import ServiceIcon3 from "../../assets/img/serviceIcon3.svg";
type Props = {};

function Services({}: Props) {
  return (
    <div className="Services">
      <div className="container">
        <div className="left">
          <div className="subText">What we offer</div>
          <div className="head">Our Great Services</div>
          <div className="text">
            Lorem Ipsum is that it has a more-or-less normal distribution
            content making it look like readable English.
          </div>
        </div>
        <div className="servs">
          <div className="servCard">
            <img src={ServiceIcon1} className="logo"></img>
            <div className="text">Opened 24/7</div>
          </div>
          <div className="servCard">
            <img src={ServiceIcon2} className="logo"></img>
            <div className="text">Special Menus</div>
          </div>
          <div className="servCard">
            <img src={ServiceIcon3} className="logo"></img>
            <div className="text">Home Delivery</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
