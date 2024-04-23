import HeroImg from "../../assets/img/hero.png";
import "./style.scss";

function Hero() {
  return (
    <div className="Hero">
      <div className="container">
        <div className="left">
          <div className="bigTxt">Welcome to Restaurantate</div>
          <div className="smallTxt">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy .
          </div>
          <button className="viewBtn">View Menu</button>
        </div>
        <img src={HeroImg} className="right"></img>
      </div>
      <div className="white"></div>
    </div>
  );
}

export default Hero;
