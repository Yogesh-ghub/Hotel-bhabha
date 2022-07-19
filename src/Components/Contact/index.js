import React from "react";
import "./index.css";
import {Container, Row, Col } from 'react-bootstrap'
import Banner from '../Banner'
import bannerImg from '../../Assets/images/gallery2.jpg' 

function ContactUs(props) {
  return (
    <div id="contact-container">
      <div className="block">
        
        <Banner title="Contact Us" img={bannerImg} />

        <Container>
          <Row>
            <Col md={12} className="contact-desc">
              <h3 className="font-semibold">Contact Hotel BhaBha</h3>
              <p className="mt-2">
                Get answers to your questions or give feedback, however you like to
                get in touch and wherever you are in the world. Choose from email,
                phone or an online contact form and we’ll help you direct your
                inquiries to the right place, quickly and easily.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default ContactUs;