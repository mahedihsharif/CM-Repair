import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="container">
        <div className="lineCircle">
          <h4 className="lines">Testimonials</h4>
          <span className="circle"></span>
        </div>
        <h2>Happy Client Quote After Servicing</h2>

        <div className="card-container d-flex justify-content-center align-content-center gap-5">
          <Swiper
            slidesPerView={1}
            slidesPerColumn={2}
            spaceBetween={30}
            loop={true}
            autoplay={{ delay: 8000, disableOnInteraction: false }}
            className="pagination"
          >
            <SwiperSlide>
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Doloribus iure voluptates assumenda dolor facilis eaque quam
                  eum culpa minus ad?
                </p>
                <h5>Michael Jordan</h5>
                <h6>Manager</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Doloribus iure voluptates assumenda dolor facilis eaque quam
                  eum culpa minus ad?
                </p>
                <h5>Michael Jordan</h5>
                <h6>Manager</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Doloribus iure voluptates assumenda dolor facilis eaque quam
                  eum culpa minus ad?
                </p>
                <h5>Michael Jordan</h5>
                <h6>Manager</h6>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
