import { POST_BOOKING_DETAILS,POST_USER_DATA,POST_CART_DATA } from "./Booking.type";

const initialState = {
    bookingDetails: {}
}

const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_BOOKING_DETAILS:
            return {
                ...state,
                bookingDetails: action.payload
            }


        default: {
            return {
                ...state,
            };
        }
    }
}

export default bookingReducer;