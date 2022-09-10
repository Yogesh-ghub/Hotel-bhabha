import React from "react";
import { useNavigate } from "react-router-dom";
import './index.css'
import { Container, Row, Col, Button } from "react-bootstrap";
import dining1 from '../../Assets/images/dining/DSC00735 Large.jpeg'
import dining2 from '../../Assets/images/dining/DSC00742 Large.jpeg'
import dining3 from '../../Assets/images/dining/DSC00462 Large.png'
import dining4 from '../../Assets/images/dining/restaurant2.jpg'

import conference1 from '../../Assets/images/conference/DSC00816 Large.jpeg'
import conference2 from '../../Assets/images/conference/DSC00747 Large.jpeg'
import conference3 from '../../Assets/images/conference/DSC00820 Large.jpeg'
import conference4 from '../../Assets/images/conference/DSC00743 Large.jpeg'
function HallAndDiningHome() {

  let navigate = useNavigate();

  function handleClick(path) {
    navigate(path, { replace: true });
  }
  return (
    <>
      <Container id="halls-home">
        <Row>
          <h2 className="division-heading">Dine & Shine</h2>
          <Col md={12}>
            <Row>
              <Col md={6} className="col-area my-4 ">
                <Row lg={2}>
                  <Col md={12}>
                    <div className="mt-4 d-lg-block d-none">
                      <figure>
                        <img src={dining1} alt="About us" width="100%" />
                      </figure>
                    </div>
                  </Col>{" "}
                  <Col md={12}>
                    <div className="mt-4 d-lg-block d-none">
                      <figure>
                        <img src={dining2} alt="About us" width="100%" />
                      </figure>
                    </div>
                  </Col>{" "}
                  <Col md={12}>
                    <div className="mt-4 d-lg-block d-none">
                      <figure>
                        <img src={dining3} alt="About us" width="100%" />
                      </figure>
                    </div>
                  </Col>{" "}
                  <Col md={12}>
                    <div className="mt-4">
                      <figure>
                        <img src={dining4} alt="About us" width="100%" />
                      </figure>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <div className="p-4 mt-4 bg-grey">
                      <h3 className="division-subheading my-3">
                        We organize best in town business meeting and seminars
                      </h3>
                      <p className="">
                        We have every facility to make your meetings and conference go without a hitch.
                      </p>
                      <Button className="book-now-btn" onClick={()=> handleClick("./dining-hall")}>Explore</Button>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col md={6} className="col-area my-4 ">
                <Row>
                  <Col md={12} className="mb-4">
                    <div className="p-4 mt-4 bg-grey">
                      <h2 className="division-subheading my-3">Explore the traditional taste..</h2>
                      <p className="">
                        The state of art restaurant, serving the classic gujarati cuisine is the elated specialty of the hotel.
                      </p>
                      <Button
                       className="book-now-btn"
                       onClick={() => handleClick("./dining-hall")}
                       >
                        Explore
                      </Button>
                    </div>
                  </Col>
                </Row>
                <Row lg={2}>
                  {/* <Col md={16}>
                    <div className="">
                      <figure>
                        <img src={restaurant2} alt="About us" width="100%" />
                      </figure>
                    </div>
                  </Col> */}
                  <Col md={12}>
                    <div className="mt-2 d-lg-block d-none">
                      <figure>
                        <img src={conference1} alt="About us" width="100%" />
                      </figure>
                    </div>
                  </Col>{" "}
                  <Col md={12}>
                    <div className="mt-2 d-lg-block d-none">
                      <figure>
                        <img src={conference2} alt="About us" width="100%" />
                      </figure>
                    </div>
                  </Col>{" "}
                  <Col md={12}>
                    <div className="mt-4 d-lg-block d-none">
                      <figure>
                        <img src={conference3} alt="About us" width="100%" />
                      </figure>
                    </div>
                  </Col>{" "}
                  <Col md={12}>
                    <div className="mt-4">
                      <figure>
                        <img src={conference4} alt="About us" width="100%" />
                      </figure>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HallAndDiningHome;
