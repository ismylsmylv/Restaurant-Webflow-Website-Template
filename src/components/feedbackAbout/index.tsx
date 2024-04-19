import "./style.scss";
// Import Swiper styles
import { RiDoubleQuotesR } from "react-icons/ri";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation } from "swiper/modules";
const counter = [1, 2, 3, 4, 5, 6];
function FeedbackAbout() {
  return (
    <div className="FeedbackAbout">
      <div className="container">
        <div className="headings">
          <div className="subText">Testimonial</div>
          <div className="heading">What our clients say</div>
        </div>
        <div className="swiperContainer">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {counter.map((elem) => {
              return (
                <SwiperSlide className="swiperCard" key={elem}>
                  <RiDoubleQuotesR size={50} color="#E1B168" />
                  <div className="text">
                    "Leverage agile frameworks to provide a robust synopsis for
                    high level overviews. Iterative approaches to corporate
                    strategy foster collaborative thinking further overall value
                    proposition organicallfriendly"
                  </div>{" "}
                  <div className="image">
                    <div className="dot">
                      <RiDoubleQuotesR size={20} color="#292E36" />
                    </div>
                    <img
                      src="https://www.cl.cam.ac.uk/~ga384/profile.jpg"
                      alt=""
                    />
                  </div>
                  <div className="info">
                    <div className="name">Daniyal Sppra</div>
                    <div className="location">Newyork</div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default FeedbackAbout;
