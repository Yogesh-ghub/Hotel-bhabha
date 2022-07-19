import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCart } from "react-use-cart";
import { getCart, decreteQuantity, deleteCart, increteQuantity } from "../../redux/reducer/Cart/cart.action";

const Basket = (props) => {

  const buy = () => {
    alert("abc");
  };
  const totalUniqueItems = 2;
  const totalItems = 1;
  const cartTotal = 2;


  const [items, setItems] = useState([]);

  const dispatch = useDispatch();
  const reduxState = useSelector((globalState) => globalState.cartReducer.cart)



  const increaseQty = () => {
    // dispatch(increteQuantity(props._id))
  }
  const decreaseQty = () => {

  }
  const removeCart = () => {

  }
  return (

    <section className="container">
      <div className="row jistufy-content-center">
        <div className="col-12">
          <h5>
            {" "}
            Cart ({totalUniqueItems}) total Item :({reduxState.length})
          </h5>
          <table className="table table-light m-0">
            <tbody>


              <tr >
                <td>{props.name}</td>

                <td>{props.pricePerNight}</td>

                <td>Quantity({props.quantity})</td>

                <td>
                  <button
                    onClick={decreaseQty}
                    className="btn btn-info ms-2"
                  >
                    {" "}
                    -{" "}
                  </button>
                  <button
                    onClick={increaseQty}
                    className="btn btn-info ms-2"
                  >
                    {" "}
                    +{" "}
                  </button>
                  <button
                    onClick={removeCart}
                    className="btn btn-danger ms-2"
                  >
                    {" "}
                    RemoveItem{" "}
                  </button>
                </td>
              </tr>


            </tbody>
          </table>

          <div className="col-auto ms-auto">
            <h2> total price: {cartTotal} EGP</h2>
          </div>
        </div>
        <div className="col-auto mb-2">
          <button className="btn btn-danger ms-2">
            Clear Cart
          </button>
          <button className="btn btn-primary ms-2">
            Buy Now{" "}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Basket;

