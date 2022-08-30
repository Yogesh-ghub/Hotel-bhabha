import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  FloatingLabel,
} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./GuestDetailsForm.css";
import { AiFillCreditCard } from "react-icons/ai";
import visa from "../../Assets/images/Visa.png";
import mastercard from "../../Assets/images/MasterCard.png";
import amex from "../../Assets/images/Amex.png";
import dinerclub from "../../Assets/images/DinersClub.png";
import jcb from "../../Assets/images/JCB.png";
import { postUserDetails } from "../../redux/reducer/booking/Booking.action";
import { useDispatch } from "react-redux";
import { putUser } from "../../redux/reducer/date/date.action";
const now = new Date();



const GuestDetailsForm = (props) => {
  const [firstName, SetFirstName] = useState("");
  const [lastName, SetLastName] = useState("");
  const [phone, setphoneNo] = useState("");
  const [email, setEmail] = useState("");

  const dispatch=useDispatch();

  const submit= ()=>
  { 
      
     const userDetails = {
      firstName: firstName,
      email: email,
      lastName:lastName,
      phone:phone
    };
    
    console.log(userDetails);

    if(userDetails.firstName
       &&   userDetails.email)
    {
      dispatch(putUser(userDetails))
    }
  }
  return (
    <Container className="guest-details-container">
      <Row>
        <Col md={8}>
          <Row className="guest-details-row">
            <Col md={12} className="guest-details">
              <Form>
                <Row>
                  <h4 className="row-heading">Guest Details</h4>
                  <Col md={6}>
                    <InputGroup className="mb-3">
                      <FloatingLabel controlId="floatingSelect" label="Prefix">
                        <Form.Select
                          aria-label="Floating label select example"
                          className="input-box shadow-none"
                          required
                        >
                          <option value="1">Mr.</option>
                          <option value="2">Miss.</option>
                          <option value="3">Dr.</option>
                          <option value="4">Mrs.</option>
                          <option value="5">Ms.</option>
                          <option value="6">Pr.</option>
                          <option value="7">Prof.</option>
                          <option value="8">Rev.</option>
                        </Form.Select>
                      </FloatingLabel>
                      <FloatingLabel
                        controlId="firstname"
                        label="First Name"
                        className="mb-3"

                      >
                        <Form.Control
                          type="text"
                          placeholder="First Name"
                          className="input-box shadow-none"
                          onChange={(e) => SetFirstName(e.target.value)}
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
                        onChange={(e) => SetLastName(e.target.value)}
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
                        onChange={(e) => setphoneNo(e.target.value)}
                        required
                      />
                    </FloatingLabel>
                  </Col>
                  <Col>
                    <FloatingLabel
                      controlId="email"
                      label="Email Address"
                      className="mb-3"
                    >
                      <Form.Control
                        type="email"
                        placeholder="alex@gmail.com"
                        className="input-box shadow-none"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <Form.Text className="text-muted">
                        This is the email we will send your confirmation to.
                      </Form.Text>
                    </FloatingLabel>
                  </Col>
                </Row>
                <Button variant="primary" onClick={submit} >
                  Submit
                </Button>
                <hr />
                <Row>
                <Col md={6}>
                    <FloatingLabel
                      controlId="companyName"
                      label="Company Name"
                      className="mb-3"
                    >
                      <Form.Control
                        type="text"
                        placeholder="Company Name"
                        className="input-box shadow-none"
                        onChange={(e) => SetLastName(e.target.value)}
                      />
                    </FloatingLabel>
                  </Col>
                <Col md={6}>
                    <FloatingLabel
                      controlId="gstNumber"
                      label="GST Number"
                      className="mb-3"
                    >
                      <Form.Control
                        type="text"
                        placeholder="GST Number"
                        className="input-box shadow-none"
                        onChange={(e) => SetLastName(e.target.value)}
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>

          <Row className="guest-details-row">
            <Col md={12} className="guest-details">
              <h4 className="row-heading">
                Reservation and Cancellation Policy:
              </h4>
              <div className="">
                {/* <p>
                  Early check-in or late check-out is subject to availability
                  and may be chargeable by the hotel directly.
                </p>
                <p>Check-in time is 12:00 PM, Check-out time is 12:00 PM.</p> */}

                <div>
                  <ul className="list-unstyled">
                    <li>The <strong>standard check-in time is 12:00 PM</strong> and the standard <strong>check-out time is 11:00 AM</strong></li>
                    <li>
                    Early check-in or late check-out is strictly subjected to availability and may be chargeable by the hotel, any early check-in or late check-out request must be directed and reconfirmed with hotel directly.
                    </li>
                    <li>
                    A Valid Photo ID Proof of all guests is mandatory for Check-In procedures. Guests are required to carry a Passport / Aadhar Card / Driving License for Check In procedures.
                    </li>
                    <li><strong>Alcohol</strong> and <strong>Non Veg. food</strong> are strictly not allowed in Hotel.</li>
                    <li>
                   <strong>UNMARRIED COUPLES/UNRELATED COUPLES/LOCAL COUPLES ARE NOT ALLOWED.</strong> This is at the full discretion of the hotel management. No refund would be applicable in case the hotel denies check-in under such circumstances.
                    </li>
                    <li>Guest has to pay full amount at the time of check in for pay at hotel bookings.</li>
                    <li>Non- registered visitors are not permitted in guest rooms at night after 10 pm.</li>
                    <li>All disputes are subject to the jurisdiction of the Rajkot (Gujarat) court only.</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        {props.children}
      </Row>
    </Container>
  );
};

export default GuestDetailsForm;
