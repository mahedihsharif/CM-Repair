import React from "react";
import Card from "react-bootstrap/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import Team1 from "../../assets/images/team1.png";
import Team2 from "../../assets/images/team2.png";
import Team3 from "../../assets/images/team3.png";
import Team4 from "../../assets/images/team4.png";

const Team = () => {
  return (
    <div className="team">
      <div className="container">
        <div className="lineCircle">
          <h4 className="text-center lines">Team</h4>
          <span className="circle"></span>
        </div>
        <h1>Our Professional Expert Team</h1>
        <div className="card-container d-flex justify-content-center align-content-center gap-5">
          <Swiper
            slidesPerView={4}
            slidesPerColumn={2}
            spaceBetween={30}
            loop={true}
            autoplay={{ delay: 8000, disableOnInteraction: false }}
            className="pagination"
          >
            <SwiperSlide>
              <div className="card-content">
                <Card.Img variant="top" src={Team1} />
                <Card.Body>
                  <Card.Title className="title">Imon Hossain</Card.Title>
                  <Card.Text className="text">Repair Technician</Card.Text>
                  <div className="footer-circle"></div>
                </Card.Body>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="card-content">
                <Card.Img variant="top" src={Team2} />
                <Card.Body>
                  <Card.Title className="title">Alex Frunklin</Card.Title>
                  <Card.Text className="text">Repair Technician</Card.Text>
                  <div className="footer-circle"></div>
                </Card.Body>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-content">
                <Card.Img variant="top" src={Team3} />
                <Card.Body>
                  <Card.Title className="title">Henry Joseph</Card.Title>
                  <Card.Text className="text">Repair Technician</Card.Text>
                  <div className="footer-circle"></div>
                </Card.Body>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-content">
                <Card.Img variant="top" src={Team4} />
                <Card.Body>
                  <Card.Title className="title">Aaron Finch</Card.Title>
                  <Card.Text className="text">Repair Technician</Card.Text>
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

export default Team;
