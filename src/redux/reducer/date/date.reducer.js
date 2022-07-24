import { PUT_DATE } from "./date.type";

const initialState = {
    date: {}
}

const datereducer = (state = initialState, action) => {
    switch (action.type) {
        case PUT_DATE:
            return {
                ...state,
                date: action.payload
            };



        default:
            return {
                ...state,

            }
    }
}

export default datereducer;