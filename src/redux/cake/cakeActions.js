// In this file, we define action creators for cake

import {BUY_CAKE} from "./cakeTypes";

// buyCake action creator
export const buyCake = (number = 1) => {
    return({
        type: BUY_CAKE,
        payload: number
    })
}

