import React from "react";

//componets
import Header from "../Components/Header/index";
import Footer from "../Components/Footer";
import BookingDetails from "../Components/Booking/BookingDetails";
import Basket from "../Components/Booking/Basket";
import GuestDetailsForm from "../Components/GuestDetails/GuestDetailsForm";


function Booking() {
  return (
    <>
      <Header />
    
      <BookingDetails />
      <Basket />
      <GuestDetailsForm />
      <Footer />
    </>
  );
}

export default Booking;
