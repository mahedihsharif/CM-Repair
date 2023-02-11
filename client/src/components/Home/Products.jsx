import React from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineStar } from "react-icons/ai";
import { BsFillCartPlusFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import ComputerImg from "../../assets/images/computer-img.png";
import MonitorImg from "../../assets/images/computer.png";
import LaptopImg from "../../assets/images/laptop-img.png";
import MobileImg from "../../assets/images/mobile-img.png";
//import Swiper core and required modules

import SwiperCore, { Navigation, Pagination } from "swiper/core";

//install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const Products = () => {
  return (
    <div className="products">
      <div className="container">
        <div className="lineCircle">
          <h4 className="text-center lines">Products</h4>
          <span className="circle"></span>
        </div>
        <h1>our recent products</h1>
        <ul>
          <li className="all">All</li>
          <li className="desktop">Desktop</li>
          <li className="laptop">Laptop</li>
          <li className="mobile">Mobile</li>
          <li className="protector">Screen Protector</li>
        </ul>
        <div className="card-container d-flex justify-content-center align-content-center gap-5 pt-5">
          <Swiper
            slidesPerView={4}
            slidesPerColumn={2}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              bulletClass: `swiper-pagination-bullet`,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="pagination"
          >
            <SwiperSlide>
              <div className="card-content">
                <Card.Img variant="top" src={MonitorImg} />
                <Card.Body>
                  <Card.Title className="title">
                    Apple iMac Retina 5k
                  </Card.Title>

                  <div className="icons">
                    <AiOutlineStar className="icon" />
                    <AiOutlineStar className="icon" />
                    <AiOutlineStar className="icon" />
                    <AiOutlineStar className="icon" />
                    <AiOutlineStar className="icon" />
                  </div>

                  <h4 className="price">$245.00</h4>
                  <div className="button">
                    <button>
                      <BsFillCartPlusFill className="cart" /> add to cart
                    </button>
                  </div>
                  <div className="footer-circle"></div>
                </Card.Body>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="card-content">
                <Card.Img variant="top" src={LaptopImg} />
                <Card.Body>
                  <Card.Title className="title">
                    PC Macbook-pro-air-mini
                  </Card.Title>
                  <div className="icons">
                    <AiOutlineStar className="icon" />
                    <AiOutlineStar className="icon" />
                    <AiOutlineStar className="icon" />
                    <AiOutlineStar className="icon" />
                    <AiOutlineStar className="icon" />
                  </div>

                  <h4 className="price">$245.00</h4>
                  <div className="button">
                    <button>
                      <BsFillCartPlusFill className="cart" /> add to cart
                    </button>
                  </div>
                  <div className="footer-circle"></div>
                </Card.Body>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-content">
                <Card.Img variant="top" src={MobileImg} />
                <Card.Body>
                  <Card.Title className="title">iPhone X Iphone 12</Card.Title>
                  <div className="icons">
                    <AiOutlineStar className="icon" />
                    <AiOutlineStar className="icon" />
                    <AiOutlineStar className="icon" />
                    <AiOutlineStar className="icon" />
                    <AiOutlineStar className="icon" />
                  </div>

                  <h4 className="price">$245.00</h4>
                  <div className="button">
                    <button>
                      <BsFillCartPlusFill className="cart" /> add to cart
                    </button>
                  </div>
                  <div className="footer-circle"></div>
                </Card.Body>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-content">
                <Card.Img variant="top" src={ComputerImg} />
                <Card.Body>
                  <Card.Title className="title">
                    Intel Core i7 Gaming PC
                  </Card.Title>
                  <div className="icons">
                    <AiOutlineStar className="icon" />
                    <AiOutlineStar className="icon" />
                    <AiOutlineStar className="icon" />
                    <AiOutlineStar className="icon" />
                    <AiOutlineStar className="icon" />
                  </div>

                  <h4 className="price">$245.00</h4>
                  <div className="button">
                    <button>
                      <BsFillCartPlusFill className="cart" /> add to cart
                    </button>
                  </div>
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

export default Products;
