import React from "react";
import { DatePicker } from "react-datepicker";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
  FloatingLabel,
} from "react-bootstrap";
import "./GuestDetailsForm.css";
import { AiFillCreditCard } from "react-icons/ai";
import visa from "../../Assets/images/Visa.png";
import mastercard from "../../Assets/images/MasterCard.png";
import amex from "../../Assets/images/Amex.png";
import dinerclub from "../../Assets/images/DinersClub.png";
import jcb from "../../Assets/images/JCB.png";
const now = new Date();
const until = new Date(now.getFullYear() + 10, now.getMonth());

const GuestDetailsForm = () => {
  return (
    <Container className="guest-details-container">
      <Row className="guest-details-row">
        <Col md={7} className="guest-details">
          <Form>
            <Row>
              <h4 className="row-heading">Guest Details</h4>
              <Col md={6}>
                <InputGroup className="mb-3">
                  {/* <Form.Select aria-label="Default select example" className="input-box shadow-none">
                    <option disabled hidden>
                      Prefix *
                    </option>
                    <option value="1">Dr.</option>
                    <option value="2">Miss.</option>
                    <option value="3">Mr.</option>
                    <option value="3">Mrs.</option>
                    <option value="3">Ms.</option>
                    <option value="3">Pr.</option>
                    <option value="3">Prof.</option>
                    <option value="3">Rev.</option>
                  </Form.Select> */}
                  <FloatingLabel controlId="floatingSelect" label="Prefix">
                    <Form.Select
                      aria-label="Floating label select example"
                      className="input-box shadow-none"
                      required
                    >
                      <option value="1">Dr.</option>
                      <option value="2">Miss.</option>
                      <option value="3">Mr.</option>
                      <option value="3">Mrs.</option>
                      <option value="3">Ms.</option>
                      <option value="3">Pr.</option>
                      <option value="3">Prof.</option>
                      <option value="3">Rev.</option>
                    </Form.Select>
                  </FloatingLabel>
                  {/* <Form.Control type="text" placeholder="FirstName" className="input-box shadow-none" /> */}
                  <FloatingLabel
                    controlId="firstname"
                    label="First Name"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      placeholder="First Name"
                      className="input-box shadow-none"
                      required
                    />
                  </FloatingLabel>
                </InputGroup>
              </Col>
              <Col md={6}>
                <FloatingLabel
                  controlId="lastName"
                  label="Last Name"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    className="input-box shadow-none"
                    required
                  />
                </FloatingLabel>
              </Col>
            </Row>

            <Row>
              <Col>
                <FloatingLabel
                  controlId="mobno"
                  label="Mobile Number"
                  className="mb-3"
                >
                  <Form.Control
                    type="number"
                    placeholder="Mobile no."
                    className="input-box shadow-none"
                    required
                  />
                </FloatingLabel>
              </Col>

              <Col>
                {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control type="email" placeholder="Email address" className="input-box shadow-none"  />
                        <Form.Text className="text-muted">                         
                            This is the email we will send your confirmation to.
                        </Form.Text>
                    </Form.Group> */}
                <FloatingLabel
                  controlId="email"
                  label="Email Address"
                  className="mb-3"
                >
                  <Form.Control
                    type="email"
                    placeholder="alex@gmail.com"
                    className="input-box shadow-none"
                    required
                  />
                  <Form.Text className="text-muted">
                    This is the email we will send your confirmation to.
                  </Form.Text>
                </FloatingLabel>
              </Col>
            </Row>
            <hr />
            <Row>
              <h4 className="row-heading">
                Card Details (to guarantee reservation)
              </h4>
              <div className="pay-icons">
                <img class="pay-icons-item" src={visa} width="45px" />
                <img class="pay-icons-item" src={mastercard} width="45px" />
                <img class="pay-icons-item" src={amex} width="45px" />
                <img class="pay-icons-item" src={dinerclub} width="45px" />
                <img class="pay-icons-item" src={jcb} width="45px" />
              </div>
              <Col md={6}>
                {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="number" placeholder="Card Number" className="input-box" />
                </Form.Group> */}
                <InputGroup className="mb-3">
                  <FloatingLabel
                    controlId="card-number"
                    label=""
                    className="mb-3"
                  >
                    <InputGroup.Text id="card-icon">
                      <AiFillCreditCard size={24} />
                    </InputGroup.Text>
                  </FloatingLabel>
                  {/* <Form.Control
                    placeholder="Card number"
                    aria-label="card number"
                    aria-describedby="card number"
                    className="input-box shadow-none"
                /> */}
                  <FloatingLabel
                    controlId="card-number"
                    label="Card number"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Card Number"
                      className="input-box shadow-none"
                      required
                    />
                  </FloatingLabel>
                </InputGroup>

                <FloatingLabel
                  controlId="card expire"
                  label="Card Expiration "
                  className="mb-3"
                >
                  <Form.Control
                    type="date"
                    placeholder="Card expiration date"
                    className="input-box shadow-none"
                    required
                  />
                </FloatingLabel>
                <FloatingLabel
                  controlId="name-card"
                  label="Name on Card"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    placeholder="Name on Card"
                    className="input-box shadow-none"
                    required
                  />
                </FloatingLabel>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>

      <Row className="guest-details-row">
        <Col md={7} className="guest-details">
          <h4 className="row-heading">Reservation and Cancellation Policy:</h4>
          <div className="">
            <p>
              Early check-in or late check-out is subject to availability and
              may be chargeable by the hotel directly.
            </p>
            <p>Check-in time is 12:00 PM, Check-out time is 12:00 PM.</p>

            <div>
              <ul className="list-unstyled">
                <li>
                  If cancelled, advance payment made online will not be
                  refundable.
                </li>
                <li>
                  It is mandatory for guests to present valid photo
                  identification upon check in.
                </li>
                <li>The Credit Card Holder must be one of the travelers.</li>
                <li>
                  We reserve the right to cancel or modify reservations where it
                  appears that a customer has engaged in fraudulent or
                  inappropriate activity or under other circumstances where it
                  appears that the reservations contain or resulted from a
                  mistake or error.
                </li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default GuestDetailsForm;
