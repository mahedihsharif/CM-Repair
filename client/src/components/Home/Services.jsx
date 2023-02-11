import React from "react";
import Card from "react-bootstrap/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import Data from "../../assets/images/data.png";
import Laptop from "../../assets/images/laptop.png";
import Mobile from "../../assets/images/mobile.png";
import Pc from "../../assets/images/pc.png";
import Image4 from "../../assets/images/service4.png";
import Image1 from "../../assets/images/services1.png";
import Image2 from "../../assets/images/services2.png";
import Image3 from "../../assets/images/services3.png";
//import Swiper core and required modules

import SwiperCore, { Autoplay, Pagination } from "swiper/core";

//install Swiper modules
SwiperCore.use([Pagination, Autoplay]);
const Services = () => {
  return (
    <div className="container">
      <div className="services">
        <div className="lineCircle">
          <h4 className="text-center lines">Our Services</h4>
          <span className="circle"></span>
        </div>
        <h2 className="text-center pt-5">Explore Our Services</h2>
        <div className="card-container d-flex justify-content-center align-content-center gap-5">
          <Swiper
            slidesPerView={4}
            slidesPerColumn={2}
            spaceBetween={30}
            loop={true}
            autoplay={{ delay: 8000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              bulletClass: `swiper-pagination-bullet`,
            }}
            className="pagination"
          >
            <SwiperSlide>
              <div className="card-content">
                <Card.Img variant="top" src={Image1} />
                <Card.Body>
                  <span>
                    <div className="image">
                      <img src={Data} alt="" />
                    </div>
                  </span>
                  <Card.Title className="title">Data Recovery</Card.Title>
                  <Card.Text className="text">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    dolore magna aliqua.
                  </Card.Text>
                  <div className="footer-circle"></div>
                </Card.Body>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="card-content">
                <Card.Img variant="top" src={Image2} />
                <Card.Body>
                  <span>
                    <div className="image">
                      <img src={Pc} alt="" />
                    </div>
                  </span>
                  <Card.Title className="title">PC Computer Repair</Card.Title>
                  <Card.Text className="text">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    dolore magna aliqua.
                  </Card.Text>
                  <div className="footer-circle"></div>
                </Card.Body>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-content">
                <Card.Img variant="top" src={Image3} />
                <Card.Body>
                  <span>
                    <div className="image">
                      <img src={Laptop} alt="" />
                    </div>
                  </span>
                  <Card.Title className="title">Laptop Repair</Card.Title>
                  <Card.Text className="text">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    dolore magna aliqua.
                  </Card.Text>
                  <div className="footer-circle"></div>
                </Card.Body>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-content">
                <Card.Img variant="top" src={Image4} />
                <Card.Body>
                  <span>
                    <div className="image">
                      <img src={Mobile} alt="" />
                    </div>
                  </span>
                  <Card.Title className="title">Mobile Repair</Card.Title>
                  <Card.Text className="text">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    dolore magna aliqua.
                  </Card.Text>
                  <div className="footer-circle"></div>
                </Card.Body>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Services;
