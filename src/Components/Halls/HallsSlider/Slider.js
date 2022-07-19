import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./index.css";
import img from '../../../Assets/images/gallery8.jpg'
const SliderElement = (props) => {
  return (
    <div className="slider-column mt-4">
      <Container fluid>
        <Row>
          <Col className="mx-3">
            <div className="img-container">
              <img
                src={props.img}
                alt="slider image"
                width="400rem"
                className=""
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SliderElement;
