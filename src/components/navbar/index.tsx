import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/img/Logo.png";
import "./style.scss";
function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="navbar">
        <div className="container">
          <a href="tel:987 654 321" className="call">
            Call - 987 654 321{" "}
          </a>
          <img className="logo" src={Logo} alt="" />
          <div className="right">
            <button className="shop">
              <FaCartShopping size={25} color="white" />
            </button>
            <button className="reserve">Reservation</button>
          </div>
        </div>
      </div>
      <div className="navs">
        <div className="container">
          <div className="btns">
            <button
              onClick={() => {
                navigate("/");
              }}
            >
              home
            </button>
            <button
              onClick={() => {
                navigate("/about");
              }}
            >
              about
            </button>
            <button
              onClick={() => {
                navigate("/menu");
              }}
            >
              menu
            </button>
            <button
              onClick={() => {
                navigate("/reservation");
              }}
            >
              reservation
            </button>
            <button
              onClick={() => {
                navigate("/gallery");
              }}
            >
              gallery
            </button>
            <button
              onClick={() => {
                navigate("/blog");
              }}
            >
              blog
            </button>
            <button
              onClick={() => {
                navigate("/contact");
              }}
            >
              contact
            </button>
          </div>
          <div className="socials">
            <a className="socialBtn" href="#">
              <FaInstagram size={25} color="white" />
            </a>{" "}
            <a className="socialBtn" href="#">
              <FaFacebook size={25} color="white" />
            </a>{" "}
            <a className="socialBtn" href="#">
              <FaTwitter size={25} color="white" />
            </a>{" "}
            <a className="socialBtn" href="#">
              <FaPinterest size={25} color="white" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
