import React from "react";

//componets
import Header from "../Components/Header/index";
import Footer from "../Components/Footer";
import BookingDetails from "../Components/Booking/BookingDetails";
import Basket from "../Components/Booking/Basket";
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
      <Basket />
      <GuestDetailsForm />
      <Footer />
    </>
  );
}

export default Booking;
