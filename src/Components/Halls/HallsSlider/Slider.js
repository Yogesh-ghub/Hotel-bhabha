import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./index.css";
import img from '../../../Assets/images/gallery8.jpg'
const SliderElement = (props) => {
  return (
    <div className="slider-column my-4">
      <Container fluid>
        <Row>
          <Col sm={12} lg className="mx-3">
            <div className="img-container justify-content-center">
              <img
                src={props.img}
                alt="slider image"
                width="100%"
                className=""
              />
            </div>
          </Col>
          <Col sm={12} lg className="d-flex align-items-center mx-3">
            <div className="px-3">
              <div>
                <h3 className="division-subheading text-center">{props.title}</h3>
                <p className="">{props.description}</p>
                { props.timing && (
                  <div>
                    <span className="fw-bold">Timings:</span> <br/>
                  <span className="fw-bold">Lunch:</span> {props.timing.Lunch} <br />
                  <span className="fw-bold">Dinner:</span> {props.timing.Dinner}
                </div>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SliderElement;
