const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner position-absolute w-100 h-100">
        <div className="banner-sub-container position-absolute">
          <h3>Mobile & Computer</h3>
          <h1>Repair Service</h1>
          <p>
            Instrument cultivated alteration any favourable expression law far
            nor. <br /> Both new like tore but year.
          </p>
          <div className="d-flex gap-4 pt-4 bannner-btn">
            <button className="banner-services">Book A Services</button>
            <button className="banner-quote">Get a Quote</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
