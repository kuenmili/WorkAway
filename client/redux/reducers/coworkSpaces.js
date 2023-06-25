import {
    GET_COWORKSPACES,
    GET_COWORKSPACES_BY_NAME,
    GET_COWORKSPACE,
    ADD_COWORKSPACE,
    UPDATE_COWORKSPACE,
    DELETE_COWORKSPACE,
    COWORKSPACE_LOADING,
    COWORKSPACE_ERROR
} from '../actions/coworkSpaces';

const initialState = {
    coworkSpaces: [],
    coworkSpace: {},
    loading: false,
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_COWORKSPACES:
            return {
                ...state,
                coworkSpaces: action.payload,
                loading: false
            }
        case GET_COWORKSPACES_BY_NAME:
            return {
                ...state,
                coworkSpaces: action.payload,
                loading: false
            }
        case GET_COWORKSPACE:
            return {
                ...state,
                coworkSpace: action.payload,
                loading: false
            }
        case ADD_COWORKSPACE:
            return {
                ...state,
                coworkSpaces: [action.payload, ...state.coworkSpaces],
                loading: false
            }
        case UPDATE_COWORKSPACE:
            return {
                ...state,
                coworkSpaces: state.coworkSpaces.map(coworkSpace => coworkSpace._id === action.payload._id ? action.payload : coworkSpace),
                loading: false
            }
        case DELETE_COWORKSPACE:
            return {
                ...state,
                coworkSpaces: state.coworkSpaces.filter(coworkSpace => coworkSpace._id !== action.payload),
                loading: false
            }
        case COWORKSPACE_LOADING:
            return {
                ...state,
                loading: true
            }
        case COWORKSPACE_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}