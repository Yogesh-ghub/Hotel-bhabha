import React from "react";

import "./index.css";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function RoomBookingCard({ room }) {
  return (
    <>
      <Card className="room-card">
        <div className="d-lg-flex  d-md-flex gap-3 justify-content-around">
          <div>
            <Card.Img src={room.images[0]} />
          </div>
          <div className="">
            <Card.Body>
              <Card.Title>{room.name}</Card.Title>
              <Card.Subtitle> Sleeps 3 | 1 King | 398 ft²</Card.Subtitle>
              <Card.Text className="mt-2">{room.desc}</Card.Text>
              <Button variant="primary" className="flex float-end">
                Book Now
              </Button>
            </Card.Body>
          </div>
        </div>
      </Card>
    </>
  );
}

export default RoomBookingCard;
