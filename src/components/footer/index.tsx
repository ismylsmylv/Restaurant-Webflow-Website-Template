import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import Logo from "../../assets/img/Logo.png";
import "./style.scss";

function Footer() {
  return (
    <div className="Footer">
      <div className="container">
        <a href="#" className="feed">
          Instagram feed
        </a>
        <img className="logo" src={Logo} alt="" />
        <div className="right">
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
      <div className="navs">
        <div className="container">
          <div className="contact">
            <div className="subText">contact</div>
            <div className="text">
              5 Rue Dalou, 75015 Paris
              <div className="space" />
              <span className="gold">Call</span> - +33 156 78 89 56
              <div className="space" />
              <span className="gold">benoit@mail.com</span>
            </div>
          </div>
          <div className="mail">
            <div className="head">
              Join our mailing list for updates, Get news & offers events.
            </div>
            <form action="">
              <input type="email" placeholder="Email" />
              <button>Subscribe</button>
            </form>
          </div>
          <div className="working">
            <div className="subText">Working Hours</div>
            <div className="text">
              <span className="gold">Mon – Fri:</span> 7.00am – 6.00pm
              <div className="space" />
              <span className="gold"> Sat:</span> 7.00am – 6.00pm
              <div className="space" />
              <span className="gold"> Sun:</span> 8.00am – 6.00pm
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
