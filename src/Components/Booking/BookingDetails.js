import React, { useState, useEffect } from "react";
import "./index.css";

import DatePicker from "./DatePicker";
import RoomBookingCard from "./RoomBookingCard";

import { getHotel } from "../../redux/reducer/Hotel/hotel.action";
import { useDispatch, useSelector } from "react-redux";
import PlaceholderCard from "./PlaceholderCard";


function BookingDetails() {
  const [hotel, setHotel] = useState([]);
  const [items, setItems] = useState([]);
  const [showPlaceholder, setShowPlaceholder] = useState(true)
  const reduxState = useSelector((globalState) => globalState.cartReducer.cart)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHotel()).then((data) => {
      setHotel(data.payload);
      setShowPlaceholder(false)
    });


  }, []);
  return (
    <div>
      <div className="card-container">
        <div className="d-flex flex-column ">
          <DatePicker />
          <h1 className="mt-3 mb-4 division-heading"> Select a Room</h1>
        </div>

        {
          showPlaceholder && (
            <PlaceholderCard />
          )
          }

          <>
            {              
            hotel.map((room, index) => (
              <RoomBookingCard {...room} key={index} />
            ))}
          </>


      </div>
    </div>
  );
}

export default BookingDetails;
