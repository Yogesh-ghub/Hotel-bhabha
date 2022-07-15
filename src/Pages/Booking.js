import React from "react";

//componets
import Header from "../Components/Header/index";
import Footer from "../Components/Footer";
import BookingDetails from "../Components/Booking/BookingDetails";
import GuestDetailsForm from "../Components/GuestDetails/GuestDetailsForm";

function Booking() {
  return (
    <>
      <Header />
    
      <BookingDetails />
      <GuestDetailsForm />
      <Footer />
    </>
  );
}

export default Booking;
