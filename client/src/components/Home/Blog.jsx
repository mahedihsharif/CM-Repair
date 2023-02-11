import React from "react";
import Card from "react-bootstrap/Card";
import { BiRightArrowAlt, BiTimeFive } from "react-icons/bi";
import { FaRegCommentDots } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import BlogImg1 from "../../assets/images/blog-img1.png";
import BlogImg2 from "../../assets/images/blog-img2.png";
import BlogImg3 from "../../assets/images/blog-img3.png";
const Blog = () => {
  return (
    <div className="blog">
      <div className="container">
        <div className="lineCircle">
          <h4 className="text-center lines">Blog</h4>
          <span className="circle"></span>
        </div>
        <h1>Our Recent Blog & News</h1>
        <div className="card-container d-flex justify-content-center align-content-center gap-5">
          <Swiper
            slidesPerView={3}
            slidesPerColumn={2}
            spaceBetween={30}
            loop={true}
            autoplay={{ delay: 8000, disableOnInteraction: false }}
            className="pagination"
          >
            <SwiperSlide>
              <div className="card-content">
                <div className="image-card">
                  <div className="image-content">
                    <BiTimeFive className="icon" /> <p>03 Dec, 2021</p>
                  </div>
                  <Card.Img variant="top" src={BlogImg1} />
                </div>
                <Card.Body>
                  <Card.Title className="title">
                    Resources Exquisite Set Arranging Moonlight Him
                  </Card.Title>
                  <Card.Text className="text">
                    Lorem ipsum dolor sit amet, consecte tur adipiscing elit
                  </Card.Text>
                  <div className="footer">
                    <h6>
                      Read More <BiRightArrowAlt className="right-icon" />
                    </h6>
                    <p>
                      <FaRegCommentDots className="comment-icon" /> Comment
                    </p>
                  </div>
                </Card.Body>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-content">
                <div className="image-card">
                  <div className="image-content">
                    <BiTimeFive className="icon" /> <p>03 Dec, 2021</p>
                  </div>
                  <Card.Img variant="top" src={BlogImg2} />
                </div>
                <Card.Body>
                  <Card.Title className="title">
                    Barton Did Feebly Change Man She Afford Square
                  </Card.Title>
                  <Card.Text className="text">
                    Lorem ipsum dolor sit amet, consecte tur adipiscing elit
                  </Card.Text>
                  <div className=" footer">
                    <h6>
                      Read More <BiRightArrowAlt className="right-icon" />
                    </h6>
                    <p>
                      <FaRegCommentDots className="comment-icon" /> Comment
                    </p>
                  </div>
                </Card.Body>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-content">
                <div className="image-card">
                  <div className="image-content">
                    <BiTimeFive className="icon" /> <p>03 Dec, 2021</p>
                  </div>
                  <Card.Img variant="top" src={BlogImg3} />
                </div>
                <Card.Body>
                  <Card.Title className="title">
                    Village Did Removed Enjoyed Explain Saw Calling Talking.
                  </Card.Title>
                  <Card.Text className="text">
                    Lorem ipsum dolor sit amet, consecte tur adipiscing elit
                  </Card.Text>
                  <div className="footer">
                    <h6>
                      Read More <BiRightArrowAlt className="right-icon" />
                    </h6>
                    <p>
                      <FaRegCommentDots className="comment-icon" /> Comment
                    </p>
                  </div>
                </Card.Body>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Blog;
