import React from "react";
import { useCart } from "react-use-cart";

import "./index.css";
import about2 from "../../Assets/images/about-grid-small.jpg";

function RoomBookingCard({ room }) {
  const { addItem } = useCart();

  console.log(room);

  return (
    <>
      <div class="container m-3">
        <div class="row">
          <div class="col-lg-3 col-md-4 ">
            <img src={about2} alt="img" className="img-fluid" />
          </div>
          <div class="col-lg-5 col-md-7  p-3 ">
            <h3>{room.name}</h3>
            <span>1 king | {room.guestCapacity} adult |</span>
            <p>
              Variable width contentVariable width contentVariable width
              Variable width contentVariable width contentVariable width
            </p>
            <span>₹{room.pricePerNight}</span>
            <button
              className="d-flex float-end book-now-btn btn-book "
              onClick={() => addItem()}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default RoomBookingCard;
