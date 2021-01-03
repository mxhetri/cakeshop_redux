import {FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS} from "./userTypes";
import axios from "axios";

export const fetchUsersRequest = () => {
    return{
        type: FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = (users) => {
    return{
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUsersFailure = (error) => {
    return{
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest)  //this sets loading to true
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const users = response.data
                console.log('user data is', users)
                dispatch(fetchUsersSuccess(users))
            })
            .catch(error => {
                const errorMsg = error.message
                console.log('error is', errorMsg)
                dispatch(fetchUsersFailure(errorMsg))
            })
    }
}
