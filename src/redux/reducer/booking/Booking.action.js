import {
  POST_BOOKING_DETAILS,
  POST_USER_DATA,
  POST_CART_DATA,
} from "./Booking.type";
import axios from "axios";

export const postDetails = (details) => async (dispatch) => {
  try {
    const datarecieve = await axios.post(
      "https://real-cyan-wasp-shoe.cyclic.app/api/booking",
      // "http://localhost:4000/api/booking",
      details
    );

    return dispatch({ type: POST_BOOKING_DETAILS, payload: datarecieve.data });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};
export const postCartDetails = (details) => async (dispatch) => {
  try {
    const datarecieve = await axios.post(
      "https://real-cyan-wasp-shoe.cyclic.app/api/booking/cart",
      // "http://localhost:4000/api/booking/cart",
      details
    );

    return dispatch({ type: POST_CART_DATA, payload: datarecieve.data });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};
export const postUserDetails = (details) => async (dispatch) => {
  try {
    const datarecieve = await axios.post(
      "https://real-cyan-wasp-shoe.cyclic.app/api/booking/guest",
      // "http://localhost:4000/api/booking/guest",
      details
    );

    return dispatch({ type: POST_USER_DATA, payload: datarecieve.data });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error.message });
  }
};
