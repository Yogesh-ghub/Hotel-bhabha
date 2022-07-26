import React from "react";

//componets
import Header from "../Components/Header/index";
import Footer from "../Components/Footer";

import GuestDetailsForm from "../Components/GuestDetails/GuestDetailsForm";
import CartUI from "../Components/Booking/CartUI";
import { getCart } from "../redux/reducer/Cart/cart.action";
import { useDispatch } from "react-redux";
function Booking() {
  const dispatch=useDispatch();
  dispatch(getCart());
  return (
    <>
      <Header />

      <div className=" mt-5 ">
        <GuestDetailsForm />
        <CartUI />
      </div>

      <Footer />
    </>
  );
}

export default Booking;
