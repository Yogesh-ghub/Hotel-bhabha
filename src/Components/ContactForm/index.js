import React from "react";

//styles
import "./index.css";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { SiGmail, SiGooglemaps } from "react-icons/si";
import { FaHotel, FaPhoneAlt } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

//component
import Map from "../../Components/Map";

const ContactForm = (props) => {
  return (
    <Container className="form-container">
      <Row className="justify-content-between p-3">
        <h2 className="division-heading text-center">Contact Us</h2>
        <Col lg={5}>
          <div className=" ">
            <div className="address-card ">
              <h2>
                <FaHotel /> Hotel address
              </h2>
              <p className="text-center text-wrap">
                Panchnath road, near Gandhi Museum, Rajkot - 360001
              </p>
              <p>
                <a className="link" href="tel:++91-281-2220861"><FaPhoneAlt /> +91-281-2220861</a>
              </p>

              <p>
                <a className="link" href="tel:+91-9898789898"><FaPhoneAlt />+91-9898789898 </a>
              </p>
              <p>
                <a className="link" href="mailto:info@hotelbhabha.com">
                  <FiMail /> info@hotelbhabha.com
                </a>
              </p>
            </div>
            <div>
              <ul className="social-icons list-unstyled d-flex justify-content-center">
                <li>
                  <a href="https://www.facebook.com/hotelbhabha/" target="_blank" className="contact-icons contact-fb-icon">
                    <FaFacebookF size={24} className="" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/bhabha_hotel/" target="_blank" className="contact-icons contact-ig-icon">
                    <BsInstagram size={24} className="" />
                  </a>
                </li>
                <li>
                  <a href="mailto:info@hotelbhabha.com" target="_blank" className="contact-icons contact-mail-icon">
                    <SiGmail size={24} className="" />
                  </a>
                </li>
                <li>
                  <Link to="#" target="_blank" className="contact-icons contact-map-icon">
                    <SiGooglemaps size={24} className="" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-5">
              <Map width="300" height="200" />
            </div>
          </div>
        </Col>

        <Col lg={5} className="d-none d-lg-block">
          <h2 className="mb-4 mt-4 ">
            <FaHotel /> Hotel address
          </h2>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control
                type="text"
                className="form-input"
                placeholder="Name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="Address">
              <Form.Control
                type="text"
                className="form-input"
                placeholder="Address"
              />
            </Form.Group>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="Email">
                  <Form.Control
                    type="email"
                    className="form-input"
                    placeholder="Email"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="Phone">
                  <Form.Control
                    type="phone"
                    className="form-input"
                    placeholder="Phone"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3" controlId="Subject">
              <Form.Control
                type="text"
                className="form-input"
                placeholder="Subject"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="message">
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Type your message here"
                className="form-input"
              />
            </Form.Group>
            <div className="d-flex justify-content-end">
              <Button type="submit" className="float-right submit-btn">
                Submit
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
