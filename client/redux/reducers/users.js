import { CREATE_USER, PUT_USER, GET_USER_BY_ID } from "../actions/users";

const InitialState = {
    user: {},
    loggedIn: false,
    
};

const rootReducer = (state= InitialState, action) => {
    switch(action.type) {
        case GET_USER_BY_ID: {
            return {
                ...state,
                user: action.payload
            }
        }
        case CREATE_USER: {
            return {
                ...state,
                user: user,
            }
        }
        case PUT_USER: {
            const { payload } = action;

            return {
                ...state,
                user: payload
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