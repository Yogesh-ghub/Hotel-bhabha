import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { GrLinkNext } from "react-icons/gr";
import { Link } from "react-router-dom";
import "./index.css";
const SliderElement = (props) => {
  return (
    <div className="slider-column my-4">
      <Container fluid>
        <Row>
          <Col className="mx-2">
            <div className="img-container">
              <img
                src={props.img}
                alt="sliderimage"
                width="380rem"
                className=""
              />
            </div>
          </Col>
          <Col className="d-flex align-items-center">
            <div className="room-details px-4">
              <div>
                <h3 className="division-subheading">{props.title}</h3>
                <p>{props.description}</p>

                <Link className="more" to={`/rooms/${props.id}`}>
                  more{" "}
                  <span className="more-icon">
                    <GrLinkNext />
                  </span>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SliderElement;
