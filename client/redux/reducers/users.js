import { CREATE_USER, GET_USER_BY_ID } from "../actions/users";

const InitialState = {
    user: {},
};

const rootReducer = (state= InitialState, action) => {
    switch(action.type) {
        case CREATE_USER: {
            return {
                ...state,
                user: action.payload,
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