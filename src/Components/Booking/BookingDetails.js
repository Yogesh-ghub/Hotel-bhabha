import React from "react";
import "./index.css";

import DatePicker from "./DatePicker";
import RoomBookingCard from "./RoomBookingCard";

import useFetch from "../../hooks/useFetch";
import Basket from "./Basket";

function BookingDetails() {
  const { data, loading } = useFetch("http://localhost:4000/api/room/");

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
          {loading ? (
            "loading"
          ) : (
            <>
              {data.map((item, index) => {
                return (
                  <RoomBookingCard
                    {...item}
                    key={index}
                    id={item._id}
                    item={item}
                  />
                );
              })}
            </>
          )}

          <Basket />
        </div>
      </div>
    </div>
  );
}

export default BookingDetails;
