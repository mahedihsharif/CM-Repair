import CardImg from "../../assets/images/1.png";
import CardImg2 from "../../assets/images/2.png";
import CardImg3 from "../../assets/images/3.png";
const HeaderBottom = () => {
  return (
    <div className="container">
      <div className="row header-bottom-card w-100 mx-auto">
        <div className="col-md-4 common-card">
          <div className="card-circle">
            <img src={CardImg} alt="" />
          </div>
          <div class="card-body">
            <h4 class="card-title text-center">Low Price Guarantee</h4>
            <p class="card-text text-center">John draw real poor</p>
          </div>
        </div>
        <div className="col-md-4 common-card second-card">
          <div className="card-circle">
            <img src={CardImg2} alt="" />
          </div>
          <div class="card-body">
            <h4 class="card-title text-center">Trust Our Experience</h4>
            <p class="card-text text-center">John draw real poor</p>
          </div>
        </div>
        <div className="col-md-4 common-card ">
          <div className="">
            <div className="card-circle">
              <img src={CardImg3} alt="" />
            </div>
            <div class="card-body">
              <h4 class="card-title text-center">1 Year Warranty</h4>
              <p class="card-text text-center">John draw real poor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
