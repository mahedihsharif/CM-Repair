import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BiSearch } from "react-icons/bi";
import { BsMinecartLoaded } from "react-icons/bs";
import Logo from "../../assets/images/logo.png";
const Navabr = () => {
  return (
    <div className="sub-container">
      <Navbar expand="lg" className="nav">
        <Container fluid>
          <Navbar.Brand href="#home" className="d-none logo">
            <img src={Logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-auto my-2 my-lg-0 gap-3 " navbarScroll>
              <Nav.Link href="#action1" className="nav-item">
                Home
              </Nav.Link>
              <NavDropdown
                title="Services"
                id="navbarScrollingDropdown"
                className="nav-item"
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="Blog"
                id="navbarScrollingDropdown"
                className="nav-item"
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="Page"
                id="navbarScrollingDropdown"
                className="nav-item"
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#action1" className="nav-item">
                Contact
              </Nav.Link>

              <Nav.Link href="#action1" className="nav-icon">
                {" "}
                <BiSearch />
              </Nav.Link>
              <div className="nav-border"></div>
              <Nav.Link href="#action1" className="nav-icon">
                {" "}
                <BsMinecartLoaded />
              </Nav.Link>

              <Button className="service">Book A Services</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navabr;
