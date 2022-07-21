import React from "react";

function CartUI() {
  return (
    <div>
      <div class="container m-3">
        <div class="row">
          <div class="col-lg-5 col-md-7  p-3 d-flex flex-column ">
            <h1>CART</h1>
            <h3>ROom Name</h3>
            <span>MAx Guest </span>
            <p>Room Desc</p>
            <span>ROom PRice : price here</span>

            <span>TOtal guest : </span>
            <span> + 100 for 2 person </span>

            <span> + 350 for extra person </span>

            <span> Total price inc gst : </span>

            <button className="d-flex float-end book-now-btn btn-book ">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartUI;
