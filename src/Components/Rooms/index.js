import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import about2 from "../../Assets/images/about-grid-small.jpg";
import Slider from "../Slider/Slider";
import slideimg1 from "../../Assets/images/sliderimg-1.jpeg";
import slideimg2 from "../../Assets/images/sliderimg-2.jpeg";
import slideimg3 from "../../Assets/images/sliderimg-3.jpeg";
import bannerImg from "../../Assets/images/executive-room.jpeg";
import Banner from "../Banner";
import "./index.css";

const RoomOverview = (props) => {
  return (
    <div>
      <Banner title={props.details.title} img={props.details.bannerImg} />

      <Container className="room-overview-container">
        <Row className="d-flex justify-content-around">
          <Col lg={6}>
            <div className="room-slider">
              <Slider img1={props.details.sliderImg1} img2={props.details.sliderImg2} img3={props.details.sliderImg3} />
            </div>
          </Col>
          <Col lg={6} className="right-col d-flex">
            <div className="animated animatedFadeInUp fadeInUp">
              <h2 className="division-heading">{props.details.title}</h2>
              <p>
                {props.details.description}
              </p>
            </div>
            <div className="">
              <img
                src={about2}
                className="img-thumbnail img-fluid"
                alt="img"
                width="70%"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RoomOverview;
