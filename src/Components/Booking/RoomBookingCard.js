import React, { useState, useEffect } from "react";
import { useCart } from "react-use-cart";

import "./index.css";
import about2 from "../../Assets/images/about-grid-small.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getSpecificROOM } from "../../redux/reducer/Hotel/hotel.action"
import { addToCart } from "../../redux/reducer/Cart/cart.action";
import SelectRoomModal from "./SelectRoomModal";
function RoomBookingCard(room) {
  const dispatch = useDispatch();
  const [roominfo, setroominfo] = useState({});

  const reduxState = useSelector((globalState) => globalState.cartReducer.cart);
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    room._id && dispatch(getSpecificROOM(room._id)).then((data) => {
      setroominfo(data.payload);
      return data.payload

    }).then((data) => {
      reduxState.forEach((each) => {
        if (each._id === data._id) {
          setroominfo((prev) => ({ ...prev, isAddedToCart: true }));
        }
      });
    })

  }, [reduxState]);

  const addFoodToCart = () => {
    dispatch(addToCart({ ...roominfo, quantity: 1, totalPrice: roominfo.price }))
    setroominfo((prev) => ({ ...prev, isAddedToCart: true }));

  }

  const handleClick = () => {
    setOpenModal(true);
  };


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
              onClick={handleClick}
            >
              Book Now
            </button>
            {openModal && (
              <SelectRoomModal setOpen={setOpenModal} roomId={room._id} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default RoomBookingCard;
