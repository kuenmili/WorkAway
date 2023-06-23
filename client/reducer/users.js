import { GET_USERS, GET_USER, CREATE_USER, PUT_USER, GET_USER_BY_ID } from "../action/users";

const InitialState = {
    user: [],
};

const rootReducer = (state= InitialState, action) => {
    switch(action.type) {
        case GET_USER: {
            return{
                ...state,
                user: action.payload
            } 
        }
        case GET_USER_BY_ID: {
            return {
                ...state,
                user: action.payload
            }
        }
        case CREATE_USER: {

            let user = [...state.user]
            user.unshift(action.payload)

            return {
                ...state,
                user: user,
            }
        }
        case PUT_USER: {
            return {
                ...state,
                user:action.payload
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
};

export default rootReducer;