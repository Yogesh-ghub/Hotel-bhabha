import React from "react";
import { Card, Placeholder, Container, Row, Col } from "react-bootstrap";
import holder from '../../Assets/images/holder.png'
const PlaceholderCard = () => {
  return (
      <Container>
        <Row>
            <Col md={4} lg={3}>
                    <img className="img img-fluid" src={holder} />
            </Col>
            <Col md={8} lg={6}>
                <Placeholder as={Card.Title} animation="glow">
                  <Placeholder xs={6} />
                </Placeholder>
                <Placeholder xs={3} />

                
                <Placeholder as={Card.Text} animation="glow">
                  <Placeholder xs={12} />
                  <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                  <Placeholder xs={8} />
                </Placeholder>

                <Placeholder md={10} />

          </Col>
        </Row>
      </Container>
  );
};

export default PlaceholderCard;
