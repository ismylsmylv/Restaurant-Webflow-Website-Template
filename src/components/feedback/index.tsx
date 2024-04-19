import "./style.scss";
// Import Swiper styles
import { RiDoubleQuotesR } from "react-icons/ri";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper/modules";
const counter = [1, 2, 3, 4, 5, 6];
function Feedback() {
  return (
    <div className="Feedback">
      <div className="container">
        <div className="headings">
          <div className="subText">Testimonial</div>
          <div className="heading">What our clients say</div>
          <div className="text">
            We love to hear from customers, so please leave a comment or say
            hello in an email.
          </div>
        </div>
        <div className="swiperContainer">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {counter.map((elem) => {
              return (
                <SwiperSlide className="swiperCard" key={elem}>
                  <div className="upper">
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
                  </div>
                  <div className="line"></div>
                  <div className="text">
                    "It is professional, considers everyone's time, can think
                    about the There are many variations of passages whole probls
                    small niche, friendly.
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

export default Feedback;
