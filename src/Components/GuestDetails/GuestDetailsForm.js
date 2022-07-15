import React from "react";
import { DatePicker } from "react-datepicker"
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";

const now = new Date;
const until = new Date(now.getFullYear() + 10, now.getMonth());

const GuestDetailsForm = () => {

  return (
    <Container>
      <Row>
        <Col md={7}>
          <Form>
            <Row>
              <h4>Guest Details</h4>
              <Col md={6}>
                <InputGroup className="mb-3">
                  <Form.Select aria-label="Default select example">
                    <option disabled hidden>
                      Prefix
                    </option>
                    <option value="1">Dr.</option>
                    <option value="2">Miss.</option>
                    <option value="3">Mr.</option>
                    <option value="3">Mrs.</option>
                    <option value="3">Ms.</option>
                    <option value="3">Pr.</option>
                    <option value="3">Prof.</option>
                    <option value="3">Rev.</option>
                  </Form.Select>
                  <Form.Control type="text" placeholder="FirstName" />
                </InputGroup>
              </Col>
              <Col md={6}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control type="text" placeholder="Last Name" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control type="number" placeholder="Mobile number" />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control type="email" placeholder="Email address" />
                        <Form.Text className="text-muted">                         
                            This is the email we will send your confirmation to.
                        </Form.Text>
                    </Form.Group>
                </Col>
              
            </Row>
            <Row>
              <h4>Card Details (to guarantee reservation)</h4>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="number" placeholder="Card Number" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    {/* <Form.Control type="Date" placeholder="Expiration Date (MM/YY)" /> */}
                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="text" placeholder="Name on Card" />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default GuestDetailsForm;
