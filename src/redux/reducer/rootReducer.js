import { combineReducers } from "redux";

import hotelReducer from "./Hotel/hotel.reducer";
import cartReducer from "./Cart/cart.reducer";
import datereducer from "./date/date.reducer";
const rootReducer=combineReducers(
    {
        hotelReducer,cartReducer,datereducer
    }
)
export default rootReducer;