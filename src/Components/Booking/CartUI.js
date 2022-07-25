import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function CartUI() {
  const [cartData, setCartData] = useState([]);
  const reduxState = useSelector((globalState) => globalState.cartReducer.cart);

  useEffect(() => {
    reduxState && setCartData(reduxState);
  }, [reduxState]);
  const payNow = () => {
    let options = {
      key: "rzp_test_ylrxtcnQZcSWvV",
      amount: 1000 * 100,
      currency: "INR",
      name: "Hotel BHABHA",
      description: "Fast Dilevary Service",
      image: "",

      handler: (data) => {
        alert("payment successfull");

        console.log(data);
      },
      prefill: {
        name: "Bankush",
        email: "banku@gmail.com",
      },
      theme: {
        color: "#e23744",
      },
    };

    let razorPay = new window.Razorpay(options);
    razorPay.open();
  };

  return (
    <div class="col-lg-4 col-md-7">
      <div className='w-100 d-flex flex-column cart  p-3 m-3'>
        <h4>Your Stay</h4>
        {/* <h1>CART</h1> */}

        {cartData &&
          cartData.map((data, key) => (
            <>
              <span>Room {key + 1}</span>
              <div className="d-flex justify-content-between">
                <h4 className="room-heading">{data.name}</h4>
                <strong>&#8377; {data.price}</strong>
              </div>
              <div>Guest Capacity :-{data.guestCapacity} </div>

              <div>Total Guest : </div>
              <span> + 100 for 2 person </span>

              <span> + 350 for extra person </span>
              <hr />
            </>
          ))}

        <div> Total price inc gst : </div>

        <button
          onClick={payNow}
          className="d-flex justify-content-center book-now-btn btn-book "
        >
          Pay now
        </button>
      </div>
    </div>
  );
}

export default CartUI;
