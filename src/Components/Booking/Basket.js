import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCart } from "react-use-cart";
import {
  getCart,
  decreteQuantity,
  deleteCart,
  increteQuantity,
} from "../../redux/reducer/Cart/cart.action";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
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
  const reduxState = useSelector((globalState) => globalState.cartReducer.cart);

  useEffect(() => {
    setItems(reduxState);
  }, [reduxState]);

  const increaseQty = (_id) => {
    dispatch(increteQuantity(_id));
  };
  const decreaseQty = (id, quantity) => {
    if (quantity === 1) return;
    dispatch(decreteQuantity(id));
  };
  const removeCart = (id) => {
    console.log(id);
    dispatch(deleteCart(id));
  };
  return (

    <>
      {reduxState.length && 
      (<Container className="d-flex my-4 ">
        <Row>
          <Col sm={12}>
            <h5>
              {""}
              Cart ({totalUniqueItems}) total Item :({reduxState.length})
            </h5>
            <table className="table table-light m-0">
              <thead>
                <tr>
                  <th scope="col">Room Type</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col"></th>
                </tr>
              </thead>

              <tbody>
                {items &&
                  items.map((props) => (
                    <tr>
                      <td>{props.roomName}</td>

                      <td>{props.price}</td>

                      <td>{props.quantity}</td>

                      <td>
                        
                        <button
                          onClick={() => removeCart(props.roomid)}
                          className="btn btn-danger ms-2"
                        >
                          Remove Item
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>

          </Col>
          <div className="col-auto my-2">
            <button className="btn btn-danger ms-2">Clear Cart</button>
            <button className="btn btn-primary ms-2" onClick={checkout}>
              Book Now{" "}
            </button>
          </div>
        </Row>
      </Container>)
      }
    </>
  );
};

export default Basket;
