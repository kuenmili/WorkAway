import { GET_BUSINESS_BY_ID, CREATE_BUSINESS, UPDATE_BUSINESS, UPDATE_COWORKSPACE_PRICE } from "../actions/business";

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
        case UPDATE_COWORKSPACE_PRICE:
                console.log("ACTION", action.payload)
                return {
                    ...state,
                    business: {
                        ...state.business,
                        cowork_spaces: state.business.cowork_spaces.map(coworkSpace => coworkSpace._id === action.payload._id ? action.payload : coworkSpace)
                    },
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