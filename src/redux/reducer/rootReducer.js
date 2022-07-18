import { combineReducers } from "redux";

import hotelReducer from "./Hotel/hotel.reducer";
import cartReducer from "./Cart/cart.reducer";
const rootReducer=combineReducers(
    {
        hotelReducer,cartReducer
    }
)
export default rootReducer;