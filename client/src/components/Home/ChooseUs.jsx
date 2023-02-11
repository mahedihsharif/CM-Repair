import React from "react";
import ExperienceImage from "../../assets/images/2.png";
import GenuineImage from "../../assets/images/3.png";
import SalesImage from "../../assets/images/wcu-1.png";
import ClientImage from "../../assets/images/wcu-2.png";
import SkillImage from "../../assets/images/wcu-3.png";
import QualityImage from "../../assets/images/wcu-5.png";
const ChooseUs = () => {
  return (
    <div className="choose">
      <div className="background">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="lineCircle">
                <h4 className="lines">Why Choosee Us</h4>
                <span className="circle"></span>
              </div>
              <h1 className="pt-4">
                When You Need Us, We <br /> Are Here.
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </p>
              <div className="row gap-3">
                <div className="col-md-5 choose-card p-4 rounded">
                  <div className="text-center">
                    <img src={SalesImage} alt="" />
                  </div>
                  <h5 className="pt-3">After Sales Support</h5>
                </div>
                <div className="col-md-5 choose-card p-4 rounded">
                  <div className="text-center">
                    <img src={ClientImage} alt="" />
                  </div>
                  <h5 className="pt-3">Client Satisfaction</h5>
                </div>
              </div>
              <button>get a quote</button>
            </div>
            <div className="col-md-6">
              <div className="d-flex">
                <div className="left-part">
                  <div className="leftCards card1">
                    <div className="text-center">
                      <img src={SkillImage} alt="" />
                    </div>
                    <h5 className="text-center pt-4">Skilled Personal</h5>
                    <p className="text-center">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit
                      dolore magna aliqua.
                    </p>
                  </div>
                  <div className="rightCards card2">
                    <div className="text-center">
                      <img src={QualityImage} alt="" />
                    </div>
                    <h5 className="text-center pt-4">Quality</h5>
                    <p className="text-center">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit
                      dolore magna aliqua.
                    </p>
                  </div>
                </div>
                <div className="right-part">
                  <div className="rightCards card3">
                    <div className="text-center">
                      <img src={ExperienceImage} alt="" />
                    </div>
                    <h5 className="text-center pt-4">Experience</h5>
                    <p className="text-center">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit
                      dolore magna aliqua.
                    </p>
                  </div>
                  <div className="leftCards card4">
                    <div className="text-center">
                      <img src={GenuineImage} alt="" />
                    </div>
                    <h5 className="text-center pt-4">Skilled Personal</h5>
                    <p className="text-center">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit
                      dolore magna aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
