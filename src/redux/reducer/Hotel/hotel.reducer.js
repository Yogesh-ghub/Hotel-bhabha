import { GET_HOTEL, GET_SPECIFIC_ROOM } from "./hotel.type";


const initialState = {
    hotel: [],
    specific_room: {},
}
const hotelReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_HOTEL:
            return {
                ...state,
                hotel: action.payload
            }
        case GET_SPECIFIC_ROOM:
            return {
                ...state,
                specific_room: action.payload
            }

        default:
            return {
                ...state,

            }

    }
}

export default hotelReducer;