import { GET_BUSINESS_BY_ID, CREATE_BUSINESS, UPDATE_BUSINESS  } from "../action/business";

const InitialState = {
    business: {},
};

const rootReducer = (state = InitialState, action) => {
    switch(action.type) {
        case GET_BUSINESS_BY_ID: {
            return{
                ...state,
                business: action.payload,
            }
        }
        case CREATE_BUSINESS: {
            return {
                ...state,
                business: action.payload,
            }
        }
        case UPDATE_BUSINESS: {
            return {
                ...state,
                business: action.payload,
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