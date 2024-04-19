import "./style.scss";
import AboutCafe from "../../assets/img/aboutCafe.png";
import Pattern from "../../assets/img/Pattern.png";
import { FaStar } from "react-icons/fa6";
function AboutHero() {
  return (
    <div className="AboutHero">
      <div className="container">
        <div className="left">
          <div className="subText">About us</div>
          <div className="head">Quality and Tradition</div>
          <div className="text">
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content gfshere making
            look like readable English. Many desktop publishing packages.
          </div>
          <div className="sign">
            <div className="signName">JOSEFINE</div>
            <div className="signature">Josefine</div>
          </div>
          <button className="about">See More</button>
        </div>
        <div className="right">
          <img src={AboutCafe} alt="" className="AboutCafe" />
          <img src={Pattern} alt="" className="Pattern" />
          <div className="reviewCard">
            <div className="upper">
              <img
                src="https://s3-alpha-sig.figma.com/img/fa63/325c/12dfa19ace7ed41d571ef79332957d0c?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LvyDZ4zDbida6xvml53tS7E6hoVUYBpLv5MX~2wrubcuw55nRVeUmh-ftzd89ZlRtkzwmmRfZRRtK1odLXFrKeGIkTVOCKB2eb3Qnb77Qf~Vq7JAU-D9BPkI8xScXo7EFiSS84MLiEYpU~sv8MrVDrIlvZ5uCJfEEAlvI8nb63hlBPy1lCvqYMrwvEsclrUHTdbcsRwHGKLmJrmDq-CY4KBvo6fh1fu6yzqojg40XbShx~xeiZ0~wLVPTy5D35ayFKAYYZ2p3hHzGTtj~CyG1DUgz1bHtrEaKg3svMWvbFoTnL9Yj9CSLHOi7q2cExZkSzT~-5um-nFnJzsXCY7p6g__"
                alt=""
              />
              <div className="names">
                <div className="name">Josefine</div>
                <div className="role">CEO & Founder</div>
              </div>
            </div>
            <div className="text">
              Capitalize on low hanging fruit to identify a ballpark
            </div>
            <div className="stars">
              <FaStar size={18} color="#E1B168" />
              <FaStar size={18} color="#E1B168" />
              <FaStar size={18} color="#E1B168" />
              <FaStar size={18} color="#E1B168" />
              <FaStar size={18} color="#E1B168" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutHero;
