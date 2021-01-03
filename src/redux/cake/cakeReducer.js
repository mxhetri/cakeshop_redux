// In this file, we define reducer for cake

import {BUY_CAKE} from "./cakeTypes";

const initialState = {
    numOfCakes:10
}

//define reducer function
const cakeReducer = (state=initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - action.payload
            }
        default: return state
    }
}

export default cakeReducer;
