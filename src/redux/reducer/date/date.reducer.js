import { PUT_DATE,PUT_USER } from "./date.type";

const initialState = {
    date: {},
    user:{}
}

const datereducer = (state = initialState, action) => {
    switch (action.type) {
        case PUT_DATE:
            return {
                ...state,
                date: action.payload
            };
        case PUT_USER:
            return {
                ...state,
                user: action.payload
            };



        default:
            return {
                ...state,

            }
    }
}

export default datereducer;