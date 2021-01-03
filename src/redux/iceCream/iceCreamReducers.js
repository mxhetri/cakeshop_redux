import {BUY_ICECREAM} from "./iceCreamTypes";

const initialState = {
    numOfIceCreams: 20
}

const iceCreamReducer = (state = initialState, action ) => {
    switch (action.type) {

        case BUY_ICECREAM:
            console.log('number of iceCream', state.numOfIceCream)
            return({
                ...state,
                numOfIceCream: state.numOfIceCreams -5
            })
        default: return state

    }
}

export default iceCreamReducer;
