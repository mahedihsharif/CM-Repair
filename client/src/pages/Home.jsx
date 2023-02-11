import Header from "../components/Header/Header";
import About from "../components/Home/About";
import Blog from "../components/Home/Blog";
import ChooseUs from "../components/Home/ChooseUs";
import ContactUs from "../components/Home/ContactUs";
import Products from "../components/Home/Products";
import Services from "../components/Home/Services";
import Team from "../components/Home/Team";
import Testimonial from "../components/Home/Testimonial";

const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Services />
      <ChooseUs />
      <Products />
      <ContactUs />
      <Team />
      <Testimonial />
      <Blog />
    </>
  );
};

export default Home;
