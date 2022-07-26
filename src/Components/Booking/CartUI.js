import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { postDetails, postCartDetails, postUserDetails } from "../../redux/reducer/booking/Booking.action";

function CartUI() {
  const dateReduxState = useSelector((globalState) => globalState.datereducer.date)
  const [cartData, setCartData] = useState([]);
  const reduxState = useSelector((globalState) => globalState.cartReducer.cart)

  const [details, setDetails] = useState({
    firstName: "abx",
    lastName: "Singhlol",
    email: "bankushxxpws@gmail.com",
    phone: "971176446642345",
    totalGuest: 20,
    totalBill: 400,
    




  })


    


  const dispatch = useDispatch();

  const passdata = (data) => {
    // // reduxState && dispatch(postCartDetails(reduxState)).then((response)=>
    // // {
    // //     console.log(response.payload);
    // //     return response.payload;
    // // }).then((data)=>
    // // {   
    // //   const _id=data._id
    //   dispatch(postUserDetails(details)).then((userdata)=>
    //   {
    //     console.log(userdata.payload);
    //   })
    // // })


    // dispatch(postDetails({...reduxState,...dateReduxState,razorpay_payment_id:data.razorpay_payment_id})).then((data)=>
    // {
    //   console.log(data);
    // })
    
    if(reduxState)
    {
      setDetails((prev)=>
      {
        console.log(`prev :- ${prev}`);
        reduxState.map((data)=>
        (
          prev.roomType.id=data._id,
          prev.roomType.quantity=data.quantity
        ))
        
      })
    }

    dispatch(postDetails({...details,razorpay_payment_id:data.razorpay_payment_id})).then((userdata) => {
      console.log(userdata.payload);
    })

  }

  useEffect(() => {
    reduxState && setCartData(reduxState);

  }, [reduxState])

  const payNow = () => {
    let options = {
      key: "rzp_test_ylrxtcnQZcSWvV",
      amount: 1000 * 100,
      currency: "INR",
      name: "Hotel BHABHA",
      description: "Fast Dilevary Service",
      image: "",

      handler: (data) => {

        alert("payment successfull")
        if (data) {
          passdata(data);
        }

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
        <hr />

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

        <div className="fs-5 fw-bold"> Total price inc gst : </div>

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
