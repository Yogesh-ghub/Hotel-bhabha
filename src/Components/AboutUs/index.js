import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../../Assets/images/DSC00754.jpg";
import food2 from "../../Assets/images/food2.jpeg";

import { Container, Row, Col, Button } from "react-bootstrap";

import { IoBed, IoRestaurant } from "react-icons/io5";

import "./index.css";
const AboutUs = () => {
  let navigate = useNavigate();

  function handleClick(path) {
    navigate(path, { replace: true });
  }

  return (
    <Container className="p-4 about-us-container">
      <Row className="d-flex justify-content-between">
        <Col md={12} lg={6}>

          <Row>
            <Col xs={12} sm={6} className="col-area my-4">
              <div className="text-area">
                <div className="d-flex justify-content-center my-2">
                  <IoBed size={48} className="" />
                </div>
                <h4 className="text-center my-2">Cozy Bed</h4>
                <p className="text-center">
                  Far Far away, behind the word mountains, far from countries
                  vokalia
                </p>
              </div>
            </Col>
            <Col xs={12} sm={6} className="col-area my-4">
              <div className="about-us-img">
                <figure>
                  <img src={img1} alt="About us " width="100%" height="100%" />
                </figure>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={6} className="col-area my-4">
              <div className="about-us-img">
                <figure>
                  <img src={food2} alt="About us" width="100%" height="100%" />
                </figure>
              </div>
            </Col>
            <Col xs={12} sm={6} className="col-area my-4">
              <div className="text-area">
                <div className="d-flex justify-content-center my-2">
                  <IoRestaurant size={48} className="" />
                </div>

                <h4 className="text-center my-2">Best Food</h4>
                <p className="text-center">
                  A Premier Gujrati Thali with Delicious Varieties
                </p>
              </div>
            </Col>
          </Row>
        </Col>

        <Col md={12} lg={5} className="col-area-description my-4">
          <div className="">
            <h1 className="division-heading">Pride of Rajkot: Hotel Bhabha</h1>

            <p>
              The authentic architectural construction and custom-built room
              settings depicts the richness and expresses an overall splendor of
              times past and present of the Rajkot city. Guest rooms bedecked in
              styles of the various era of the royal history, Bhabha Hotel turns
              to the pride of Rajkot Maintaining the manner and comfort of times
              past...
            </p>
            <Button
              className="book-now-btn"
              onClick={() => handleClick("./about")}
            >
              Read more...
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
