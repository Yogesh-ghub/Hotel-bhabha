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
      prefill:
      {
        name: "Bankush",
        email: "banku@gmail.com",
      },
      theme: {
        color: "#e23744",
      },
    };

    let razorPay = new window.Razorpay(options)
    razorPay.open();
  }

  return (
    <div>
      <div class="container m-3">
        <div class="row">
          <div class="col-lg-5 col-md-7  p-3 d-flex flex-column ">
            <h1>CART</h1>

            {cartData && cartData.map((data) =>
            (
              <>
                <h3>ROOM NAME:-{data.name}</h3>
                <span>guestCapacity :-{data.guestCapacity} </span>
                <p>DESC OF ROOM :-{data.desc}</p>
                <span>ROom PRice :{data.price}</span>

                <span>TOtal guest : </span>
                <span> + 100 for 2 person </span>

                <span> + 350 for extra person </span>
              </>
            )


            )}

            <span> Total price inc gst : </span>

            <button
              onClick={payNow}
              className="d-flex float-end book-now-btn btn-book ">
              pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartUI;
