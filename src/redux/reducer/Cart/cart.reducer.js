import { GET_CART, ADD_TO_CART, DELETE_CART, INCRETE_QUANTITY, DECRETE_QUANTITY } from "./cart.type";

const initialState = {
    cart: [],
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CART:
            return {
                ...state,
                cart: action.payload
            };
        case ADD_TO_CART:
            return {
                ...state,
                cart: action.payload
            };
        case DECRETE_QUANTITY:
            return {
                ...state,
                cart: action.payload
            };
        case INCRETE_QUANTITY:
            return {
                ...state,
                cart: action.payload
            };
        case DELETE_CART:
            return {
                ...state,
                cart: action.payload
            };
        default:
            return {
                ...state
            }

    }
}

export default cartReducer;
