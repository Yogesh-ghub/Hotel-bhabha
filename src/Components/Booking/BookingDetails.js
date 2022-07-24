import React, { useState, useEffect } from "react";
import "./index.css";

import DatePicker from "./DatePicker";
import RoomBookingCard from "./RoomBookingCard";
import Basket from "./Basket";

import { getHotel } from "../../redux/reducer/Hotel/hotel.action";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../redux/reducer/Cart/cart.action";

function BookingDetails() {
  const [hotel, setHotel] = useState([]);
  const [items, setItems] = useState([]);
  const reduxState = useSelector((globalState) => globalState.cartReducer.cart)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHotel()).then((data) => {
      console.log(data.payload);
      setHotel(data.payload);
    });


  }, []);


  // useEffect(() => {
  //   dispatch(getCart()).then((data) => {
  //     setItems(data.payload);
  //   })
  // }, [])
  console.log(reduxState);



  return (
    <div>
      <div className="booking-banner">
        <div className="animated animatedFadeInUp fadeInUp">
          <h1>Book Your Room</h1>
        </div>
      </div>
      <div className="mt-5 card-container">
        <div className="d-flex flex-column ">
          <DatePicker />
          <h1 className="mt-5 mb-4"> Select a Room</h1>
        </div>
        <div className="row">

          <>
            {hotel.map((room, index) => (
              <RoomBookingCard {...room} key={index} />
            ))}
          </>
          <Basket/>

        </div>
      </div>
    </div>
  );
}

export default BookingDetails;
