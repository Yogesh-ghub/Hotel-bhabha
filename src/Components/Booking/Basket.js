import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCart } from "react-use-cart";
import { getCart, decreteQuantity, deleteCart, increteQuantity } from "../../redux/reducer/Cart/cart.action";
import { useNavigate } from 'react-router-dom';
const Basket = (data) => {

  const buy = () => {
    alert("abc");
  };
  const totalUniqueItems = 2;
  const totalItems = 1;
  const cartTotal = 2;

  const history = useNavigate();
  const checkout = () => history("/checkout");

  const [items, setItems] = useState([]);

  const dispatch = useDispatch();
  const reduxState = useSelector((globalState) => globalState.cartReducer.cart)

  useEffect(()=>
  {
    setItems(reduxState)
  },[reduxState]);

  const increaseQty = (_id) => {
     dispatch(increteQuantity(_id));
  }
  const decreaseQty = (id,quantity) => {
    if(quantity===1)
    return;
    dispatch(decreteQuantity(id));

  }
  const removeCart = (id) => {
    dispatch(deleteCart(id))
  }
  return (

    <section className="container">
      <div className="row jistufy-content-center">
        <div className="col-12">
          <h5>
            {" "}
            Cart ({totalUniqueItems}) total Item :({reduxState.length})
          </h5>
          {
            items &&  items.map((props) =>
            (
              <table className="table table-light m-0">
                <tbody>


                  <tr >
                    <td>{props.name}</td>

                    <td>{props.pricePerNight}</td>

                    <td>Quantity({props.quantity})</td>

                    <td>
                      <button
                        onClick={()=>decreaseQty(props._id,props.quantity)}
                        className="btn btn-info ms-2"
                      >
                        {" "}
                        -{" "}
                      </button>
                      <button
                        onClick={()=>increaseQty(props._id)}
                        className="btn btn-info ms-2"
                      >
                        {" "}
                        +{" "}
                      </button>
                      <button
                        onClick={()=>removeCart(props._id)}
                        className="btn btn-danger ms-2"
                      >
                        {" "}
                        RemoveItem{" "}
                      </button>
                    </td>
                  </tr>


                </tbody>
              </table>
            ))
          }


          <div className="col-auto ms-auto">
            <h2> total price: {cartTotal} EGP</h2>
          </div>
        </div>
        <div className="col-auto mb-2">
          <button className="btn btn-danger ms-2">
            Clear Cart
          </button>
          <button className="btn btn-primary ms-2"
          onClick={checkout}
          >
            Buy Now{" "}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Basket;

