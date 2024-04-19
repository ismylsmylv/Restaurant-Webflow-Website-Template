import React from "react";
import "./style.scss";
import ReserveBg from "../../assets/img/reserve.png";
type Props = {};

function Reserve({}: Props) {
  return (
    <div className="Reserve">
      <div className="container">
        <div className="subText">Reservation</div>
        <div className="head">Book your table now</div>
        <form action="">
          <input type="text" placeholder="Name" />
          <input type="email" name="" id="" placeholder="Email" />
          <input type="number" placeholder="Person" />
          <input type="text" name="" id="" placeholder="Timing" />
          <input type="text" name="" id="" placeholder="Date" />
          <button>Book a Table</button>
        </form>
      </div>
    </div>
  );
}

export default Reserve;
