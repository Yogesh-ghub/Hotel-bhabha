import { GET_CART,ADD_TO_CART,DECRETE_QUANTITY,DELETE_CART,INCRETE_QUANTITY } from "./cart.type";

export const getCart = () => async (dispatch) => {
    try {

        let cartData = { cart: [] };

        if (localStorage.hotelCart) {
            const { cart } = JSON.parse(localStorage.getItem("hotelCart"));
            cartData.cart = cart;
        }

        return dispatch({ type: GET_CART, payload: cartData.cart });
    }
    catch (error) {
        return dispatch({ type: "Error", payload: error });
    }
}
export const addToCart = (newRoom) => async (dispatch) => {
    try {

        let cartData = { cart: [] };

        if (localStorage.hotelCart) {
            const { cart } = JSON.parse(localStorage.getItem("hotelCart"));
            cartData.cart = cart;
        }

        cartData.cart.push(newRoom);

        localStorage.setItem("hotelCart", JSON.stringify({ cart: cartData.cart }));
        return dispatch({ type: ADD_TO_CART, payload: cartData.cart });
    }
    catch (error) {
        return dispatch({ type: "Error", payload: error });
    }
}

export const deleteCart = (roomID) => async (dispatch) => {
    try {
        console.log(roomID);
        let cartData = { cart: [] };

        if (localStorage.hotelCart) {
            const { cart } = JSON.parse(localStorage.getItem("hotelCart"));
            cartData.cart = cart;
        }

        if (!cartData.cart.length) {
            return dispatch({ type: "ERROR", payload: "Cart is empty" });
        }

        cartData.cart=cartData.cart.filter(({ _id }) => _id !== roomID)

        localStorage.setItem("hotelCart", JSON.stringify({ cart: cartData.cart }));
        return dispatch({ type: DELETE_CART, payload: cartData.cart });
    }
    catch (error) {
        return dispatch({ type: "Error", payload: error });
    }
}

export const decreteQuantity = (roomId) => async (dispatch) => {
    try {

        let cartData = { cart: [] };

        if (localStorage.hotelCart) {
            const { cart } = JSON.parse(localStorage.getItem("hotelCart"));
            cartData.cart = cart;
        }

        cartData.cart = cartData.cart.map((room) =>
            room._id === roomId
                ? {
                    ...room,
                    quantity: room.quantity - 1,
                    totalPrice: room.price * (room.quantity - 1),
                }
                : room
        );

        localStorage.setItem("hotelCart", JSON.stringify({ cart: cartData.cart }));
        return dispatch({ type: DECRETE_QUANTITY, payload: cartData.cart });
    }
    catch (error) {
        return dispatch({ type: "Error", payload: error });
    }
}
export const increteQuantity = (roomId) => async (dispatch) => {
    try {

        let cartData = { cart: [] };

        if (localStorage.hotelCart) {
            const { cart } = JSON.parse(localStorage.getItem("hotelCart"));
            cartData.cart = cart;
        }

        cartData.cart = cartData.cart.map((room) =>
            room._id === roomId
                ? {
                    ...room,
                    quantity: room.quantity +1,
                    totalPrice: room.price * (room.quantity + 1),
                }
                : room
        );

        localStorage.setItem("hotelCart", JSON.stringify({ cart: cartData.cart }));
        return dispatch({ type: INCRETE_QUANTITY, payload: cartData.cart });
    }
    catch (error) {
        return dispatch({ type: "Error", payload: error });
    }
}