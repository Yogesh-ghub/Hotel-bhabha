import React from "react";

//componets
import Header from "../Components/Header/index";
import Footer from "../Components/Footer";

import GuestDetailsForm from "../Components/GuestDetails/GuestDetailsForm";
import CartUI from "../Components/Booking/CartUI";

function Booking() {
  return (
    <>
      <Header />

      <div className=" mt-5 ">
        <GuestDetailsForm>
          <CartUI />
        </GuestDetailsForm>
      </div>

      <Footer />
    </>
  );
}

export default Booking;
