import React, { useState } from "react";

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
import AlertTop from "../Alert";

const ContactForm = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const initialState = { name: "", address: "", mobile: "", subject: "" };
  const [formData, setFormData] = useState(initialState);

  function resetForm() {
    setFormData(initialState);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let response = await fetch(
        "https://hotel-bhabha-backend.herokuapp.com/api/contact/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "Application/json;charset=utf-8",
          },
          body: JSON.stringify(formData),
        }
      );

      resetForm();
      setModalShow(true);
      console.log(response);
    } catch (error) {
      alert("Oops! there is an error");
    }

    // let response = await fetch("http://localhost:4000/api/contact/send", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "Application/json;charset=utf-8",
    //   },
    //   body: JSON.stringify(formData),
    // });

    // resetForm();
    // setModalShow(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <AlertTop show={modalShow} onHide={() => setModalShow(false)} />

      <Container className="form-container">
        <Row className="justify-content-between p-3">
          <h2 className="division-heading text-center">Contact Us</h2>
          <Col lg={5}>
            <div className=" ">
              <div className="address-card ">
                <h2 className="division-subheading">Address</h2>
                <p className="text-center text-wrap">
                  Panchnath road, near Gandhi Museum, Rajkot - 360001
                </p>
                <p>
                  <a className="link" href="tel:++91-281-2220861">
                    <FaPhoneAlt /> +91-281-2220861-66
                  </a>
                </p>

                <p>
                  <a className="link" href="tel:+91-9898789898">
                    <FaPhoneAlt />
                    +91-9898789898
                  </a>
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
                    <a
                      href="https://www.facebook.com/hotelbhabha/"
                      target="_blank"
                      className="contact-icons contact-fb-icon"
                    >
                      <FaFacebookF size={24} className="" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/bhabha_hotel/"
                      target="_blank"
                      className="contact-icons contact-ig-icon"
                    >
                      <BsInstagram size={24} className="" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:info@hotelbhabha.com"
                      target="_blank"
                      className="contact-icons contact-mail-icon"
                    >
                      <SiGmail size={24} className="" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://g.page/hotelbhabha?share"
                      target="_blank"
                      className="contact-icons contact-map-icon"
                    >
                      <SiGooglemaps size={24} className="" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-5">
                <Map width="300" height="200" />
              </div>
            </div>
          </Col>

          <Col lg={5} className="d-none d-lg-block">
            <h2 className="mb-4 mt-4 division-subheading">Reach Out To Us</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control
                  type="text"
                  className="form-input"
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="Address">
                <Form.Control
                  type="text"
                  className="form-input"
                  placeholder="Address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control
                  type="phone"
                  className="form-input"
                  placeholder="Mobile no."
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="Subject">
                <Form.Control
                  as="textarea"
                  rows={3}
                  type="text"
                  className="form-input"
                  placeholder="Message"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
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
    </>
  );
};

export default ContactForm;
