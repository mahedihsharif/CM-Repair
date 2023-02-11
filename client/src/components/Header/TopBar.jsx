import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { GrFacebookOption, GrLinkedinOption } from "react-icons/gr";
import { HiLocationMarker } from "react-icons/hi";
const TopBar = () => {
  return (
    <>
      <div className="topBar">
        <div className="container d-flex justify-content-evenly align-item-center pl-5 pr-5 pt-3 pb-3 topBar-sub-container">
          <div className="d-flex gap-3">
            <div className="left d-flex gap-3">
              <div className="icon">
                <FiPhoneCall />
              </div>
              <div className="call-number">
                <h5>0 (143) 456 7897</h5>
              </div>
              <div className="left-border"></div>
            </div>
            <div className="middle d-flex gap-3">
              <div className="icon">
                <HiLocationMarker />
              </div>
              <div className="call-number">
                <h5>11 Deneside, Seghill, NE23 7ER</h5>
              </div>
            </div>
          </div>
          <div className="right d-flex gap-4">
            <div className="icons">
              <GrFacebookOption />
            </div>
            <div className="icons">
              {" "}
              <BsTwitter />
            </div>
            <div className="icons">
              <GrLinkedinOption />
            </div>
            <div className="icons">
              <BsInstagram />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
