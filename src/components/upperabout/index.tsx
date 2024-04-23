import { BsFillFileRichtextFill } from "react-icons/bs";
import { IoIosTimer } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import "./style.scss";

function UpperAbout() {
  return (
    <div className="UpperAbout">
      <div className="container">
        <div className="cards">
          <div className="card">
            <div className="icon">
              <IoLocationOutline size={30} color="white" />
            </div>
            <div className="texts">
              <div className="head">Locate Us</div>
              <div className="info">
                Riverside 25, San Francisco, California
              </div>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <IoIosTimer size={30} color="white" />
            </div>
            <div className="texts">
              <div className="head">Open Hours</div>
              <div className="info">Mon To Fri 9:00 AM - 9:00 PM</div>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <BsFillFileRichtextFill size={30} color="white" />
            </div>
            <div className="texts">
              <div className="head">Reservation</div>
              <div className="info">hirestaurantate@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpperAbout;
