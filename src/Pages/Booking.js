import React from "react";

//componets
import Header from "../Components/Header/index";
import Footer from "../Components/Footer";
import BookingDetails from "../Components/Booking/BookingDetails";
import GuestDetailsForm from "../Components/GuestDetails/GuestDetailsForm";
import { getCart } from "../redux/reducer/Cart/cart.action";
import { useDispatch } from "react-redux";

function Booking() {
  const dispatch=useDispatch();
  dispatch(getCart());
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
