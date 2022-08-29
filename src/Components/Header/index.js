import React, { useState, useEffect,useRef } from "react";
import {
  Navbar,
  Container,
  Nav,
  Button,
  Offcanvas,
  NavDropdown,
} from "react-bootstrap";
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import logo1 from "../../Assets/images/logo-1.png";
import logo2 from "../../Assets/images/logo-2.png";
import { Link } from "react-router-dom";
import RoomDropdown from "../RoomDropdown";
import "./index.css";
import executiveRoom from "../../Assets/images/executive-room.jpeg";
import superiorRoom from "../../Assets/images/superior-room.jpeg";
import deluxeRoom from "../../Assets/images/delux-img-4.jpeg";

const Header = () => {
  const [logo, setLogo] = useState(logo1);
  const [width, setWidth] = useState("180");
  const [height, setHeight] = useState("80");
  const [bg, setbg] = useState("");
  const [isToggle, setIsToggle] = useState(false);
  const ref = useRef(null)
  const changeNavbarLogo = () => {
    if (window.scrollY >= 60) {
      setLogo(logo2);
      setWidth("160");
      setHeight("50");
      setbg("bg-grey");
    } else {
      setLogo(logo1);
      setWidth("180");
      setHeight("80");
      setbg("");
    }
  };
  
  useEffect(()=>{
    
    if(isToggle){
      setbg("bg-grey")
    }else{
      setbg("")
    }
  }, [isToggle])
  
  // useEffect(() => {
    //   const handleClickOutside = (event) => {
      //     if (ref.current && !ref.current.contains(event.target)) {
        //       setbg("bg-grey")
        
        //     }
        //   };
        //   document.addEventListener('click', handleClickOutside, true);
        //   return () => {
          //     document.removeEventListener('click', handleClickOutside, true);
          //   };
          // }, [ onClickOutside ]);
          useEffect(() => {
            
    // Function for click event
    function handleOutsideClick(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsToggle(false)
      }
    }
    
    // Adding click event listener
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [ref]);

  isToggle ? disableBodyScroll(document) : enableBodyScroll(document)
  window.addEventListener("scroll", changeNavbarLogo);

  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" className={`navbar ${bg}`}>
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            width={width}
            height={height}
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Offcanvas
          id="responsive-navbar-nav"
          placement="end"
          aria-labelledby="offcanvasNavbarLabel-expand-lg"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
              <img src={logo2} alt="Hotel Logo" width="100" height="40" />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <hr className="d-block d-md-none" />
          <Offcanvas.Body className="justify-content-end">
            <Nav className="nav-items mx-3">
              <Nav.Link as={Link} className="nav-links mr-2" to="/">
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                className="nav-links mr-2"
                eventKey={2}
                to="/about"
              >
                About
              </Nav.Link>

              <NavDropdown
                title="rooms"
                id="navbarScrollingDropdown"
                className="d-block d-lg-none"
              >
                <div className="nav-dropdown">
                  <NavDropdown.Item as={Link} to="/rooms/standard-room">
                    Standard room
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/rooms/deluxe-room">
                    Delux room
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/rooms/family-room">
                    Family room
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/rooms/executive-room">
                    Executive room
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/rooms/superior-room">
                    Superior room
                  </NavDropdown.Item>
                </div>
              </NavDropdown>

              <div>
                <li ref={ref} class="nav-item dropdown-mega position-static d-none d-lg-block">
                  <a
                    class="nav-link dropdown-toggle nav-links mr-2"
                    href="#"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    onClick={()=> setIsToggle(!isToggle)}
                  >
                    Rooms
                  </a>
                  <div class="dropdown-menu bg-grey m-0" style={{border: '0px', borderRadius: '0px'}}>
                    <div class="mega-content px-4">
                      <div class="container-fluid megamenu">
                        <div class="row justify-content-between align-items-center">
                          <div className="col py-4">
                            <div>
                              <Link to="/rooms/executive-room"><figure><img className="img img-fluid room-dropdown-img" src={executiveRoom} alt="executive room" /></figure></Link>
                              <Link className='link' to="/rooms/executive-room"><h5 className="text-center dropdown-title my-2">Executive room</h5></Link>
                            </div>

                          </div>
                          <div className="col py-4">
                            <div>
                              <Link to="/rooms/superior-room"><figure><img className="img img-fluid room-dropdown-img" src={superiorRoom} alt="executive room" /></figure> </Link>
                              <Link className="link" to="/rooms/superior-room"><h5 className="text-center dropdown-title my-2">Superior room</h5></Link>
                            </div>
                          </div>
                          <div className="col py-4">
                            <div>
                              <Link to="/rooms/deluxe-room"><figure><img className="img img-fluid room-dropdown-img" src={deluxeRoom} alt="executive room" /></figure> </Link>
                              <Link className="link" to="/rooms/deluxe-room"><h5 className="text-center dropdown-title my-2">Deluxe room</h5></Link>
                            </div>
                          </div>
                          <div className="col py-4">
                            <div>
                              <Link to="/rooms/family-room"><figure><img className="img img-fluid room-dropdown-img" src={executiveRoom} alt="executive room" /> </figure></Link>
                              <Link className="link" to="/rooms/family-room"><h5 className="text-center dropdown-title my-2">Executive room</h5></Link>
                            </div>
                          </div>
                          <div className="col py-4">
                            <div>
                              <Link to="/rooms/standard-room"><figure><img className="img img-fluid room-dropdown-img" src={executiveRoom} alt="executive room" /></figure></Link> 
                              <Link className="link" to="/rooms/standard-room"><h5 className="text-center dropdown-title my-2">Executive room</h5></Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </div>

              <Nav.Link
                as={Link}
                className="nav-links mr-2"
                eventKey={2}
                to="/dining-hall"
              >
                Dining Hall
              </Nav.Link>

              <Nav.Link
                as={Link}
                className="nav-links mr-2"
                eventKey={2}
                to="/contact"
              >
                Contact us
              </Nav.Link>

              <Nav.Link as={Link} to="/booking">
                <Button className="book-now-btn">Book Now</Button>
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;
