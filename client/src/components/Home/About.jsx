import React from "react";
import AboutImage from "../../assets/images/about.png";
import Signature from "../../assets/images/signature.png";
import User from "../../assets/images/user.png";

const About = () => {
  return (
    <div className="container">
      <div className="about">
        <div className="lineCircle">
          <h4 className="text-center lines">About Us</h4>
          <span className="circle"></span>
        </div>
        <div className="row">
          <div className="col-md-6 pt-5">
            <img src={AboutImage} alt="" />
          </div>
          <div className="col-md-6 pt-5">
            <h2>
              Successfully Providing the Best Computer and Mobile Services from
              20 years
            </h2>
            <p>
              Do commanded an shameless we disposing do. Indulgence ten
              remarkably nor are impression out. <br />
              Power is lived means oh every in we quiet. Remainder provision an
              in intention. Saw supported too joy promotion engrosse. Want eyes
              by neat so just must. Past draw tall up face show rent oh mr.
            </p>
            <div className="profile">
              <div className="d-flex justify-content-between pt-3">
                <div className="d-flex gap-3">
                  <img src={User} alt="" />
                  <div className="content">
                    <h3>Jonson Adalson</h3>
                    <p>CEO, of CM-repair Company</p>
                  </div>
                </div>
                <div className="sign">
                  <img src={Signature} alt="" />
                </div>
              </div>
              <button>learn more</button>
            </div>
          </div>
        </div>
        <div className="counter">
          <div className="firstCounter">
            <h2>40+</h2>
            <p>Professionals</p>
          </div>
          <div className="secondCounter">
            <h2>6.8k+</h2>
            <p>Happy Clients</p>
          </div>
          <div className="thirdCounter">
            <h2>90%</h2>
            <p>Devices Fixed</p>
          </div>
          <div className="fourCounter">
            <h2>1.2k+</h2>
            <p>Win Awards</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
