import React from "react";
import "./index.css";

import DatePicker from "./DatePicker";
import RoomBookingCard from "./RoomBookingCard";

import useFetch from "../../hooks/useFetch";

function BookingDetails(props) {
  const { data, loading, error } = useFetch("http://localhost:4000/api/room/");

  console.log(data);

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
        <div className="">
          {loading ? (
            "loading"
          ) : (
            <>
              {data.map((room) => (
                <RoomBookingCard key={room._id} room={room} />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookingDetails;
