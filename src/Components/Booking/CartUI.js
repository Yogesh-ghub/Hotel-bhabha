import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  postDetails,
  postDateDetails,
  postUserDetails,
} from "../../redux/reducer/booking/Booking.action";

function CartUI() {
  const months = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const dateReduxState = useSelector(
    (globalState) => globalState.datereducer.date
  );
  const [cartData, setCartData] = useState([]);
  const reduxState = useSelector((globalState) => globalState.cartReducer.cart);
  const userReduxState = useSelector(
    (globalState) => globalState.datereducer.user
  );

  const dispatch = useDispatch();

  const passdata = (data) => {
    if (reduxState && userReduxState && dateReduxState) {
      // dispatch(postCartDetails({ cart: cartData })).then((response) => {
      //   console.log(response.payload);
      //   setCartId(response.payload._id)
      //   return response.payload;
      // })

      // dispatch(postDateDetails({ dates:dateReduxState })).then((response) => {
      //   console.log(response.payload);
      //   setUserId(response.payload._id)
      // })

      dispatch(
        postDetails({
          guest: userReduxState,
          cart: cartData,
          dates: dateReduxState,
          razorpay_payment_id: data.razorpay_payment_id,
        })
      ).then((response) => {
        console.log(`respone :${response.payload}`);
        //   setUserId(response.payload._id)
      });
    }

    // if (userReduxState) {
    //   console.log(`details:- ${details}`);
    //   dispatch(postUserDetails({ userReduxState })).then((response) => {
    //     console.log(response.payload);
    //   })
    // }
  };

  useEffect(() => {
    reduxState && setCartData(reduxState);
  }, [reduxState, userReduxState, dateReduxState]);

  const payNow = () => {
    const userDetails = localStorage.getItem("userDetails");

    if (userDetails) {
      let options = {
        key: "rzp_test_XNO9l8QlN0j6Rz",
        amount:
          reduxState.reduce((total, current) => total + current.price, 0) * 100,
        currency: "INR",
        name: "Hotel BHABHA",
        description: "Hotel Bhabha",
        image: "",

        handler: (data) => {
          alert("payment successfull");
          if (data) {
            passdata(data);
          }
        },
        prefill: {
          name: "",
          email: "",
        },
        theme: {
          color: "#e23744",
        },
      };

      let razorPay = new window.Razorpay(options);
      razorPay.open();
    } else {
      alert(`fill details first`);
    }
  };

  return (
    <div class="col-lg-4 col-md-7">
      <div className="w-100 d-flex flex-column cart  p-3 m-3">
        <h4 className="room-heading">Your Stay</h4>
        <div className="d-flex justify-content-between">
          <div>
            <span className="fw-bold">Check-in</span> <br />
            After 00:00 A.M.
          </div>
          <div>
            <span className="fw-bold">Check-out</span> <br />
            before 00:00 A.M.
          </div>
        </div>
        <div>
          <span>
            {months[dateReduxState.startDate.month - 1]}{" "}
            {dateReduxState.startDate.date}, {dateReduxState.startDate.year}
          </span>{" "}
          -
          <span>
            {" "}
            {months[dateReduxState.endDate.month - 1]}{" "}
            {dateReduxState.endDate.date}, {dateReduxState.endDate.year}
          </span>
        </div>
        <hr />

        {cartData &&
          cartData.map((data, key) => (
            <>
              <span>Room {key + 1}</span>
              <div className="d-flex justify-content-between">
                <h4 className="room-heading">{data.roomName}</h4>
                <strong>&#8377; {data.price}</strong>
              </div>
              <div>Guest Capacity :-{data.guestCapacity} </div>

              <div>Total Guest : </div>
              <span> + 100 for 2 person </span>

              <span> + 350 for extra person </span>
              <hr />
            </>
          ))}

        <div className="d-flex justify-content-between fw-bold fs-5">
          <span>Total price inc GST and all taxes : </span>
          <span>
            &#8377;{" "}
            {reduxState.reduce((total, current) => total + current.price, 0)}
          </span>
        </div>

        <button
          onClick={payNow}
          className="d-flex my-2 justify-content-center book-now-btn btn-book "
        >
          Pay now
        </button>
      </div>
    </div>
  );
}

export default CartUI;
