import { GET_RESERVE_BY_ID, CREATE_RESERVE, UPDATE_RESERVE } from "../action/reserves";

const InitialState = {
    reserves: [],
    reserve: {},
};

const rootReducer = (state = InitialState, action) => {
    switch(action.type) {
        case GET_RESERVE_BY_ID: {
            return {
                ...state,
                reserve: action.payload
            }
        }
        case CREATE_RESERVE: {
            let reserves = [action.payload, ...state.reserves]

            return {
                ...state,
                reserves: reserves,
            }
        }
        case UPDATE_RESERVE: {
            let reserves = [...state.reserves].map((reserve) => {
                if (reserve.id === action.payload.id) {
                    return action.payload
                }
                return reserve
            });

            return {
                ...state,
                reserves: reserves
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export default rootReducer