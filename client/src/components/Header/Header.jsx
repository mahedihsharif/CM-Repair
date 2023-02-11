import Logo from "../../assets/images/logo.png";
import Navbar from "../Header/Navbar";
import Banner from "./Banner";
import HeaderBottom from "./HeaderBottom";
import TopBar from "./TopBar";
const Header = () => {
  return (
    <>
      <div className="header-container">
        <img src={Logo} alt="" />
      </div>
      <div className="sub-header-container"></div>

      <TopBar />
      <Navbar />
      <Banner />
      <HeaderBottom />
    </>
  );
};

export default Header;
