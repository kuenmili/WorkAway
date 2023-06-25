import { GET_ALL_REVIEW, CREATE_REVIEW, UPDATE_REVIEW } from "../action/review";

const InitialState = {
    reviews: [],
    review: {},
};

const rootReducer = (state = InitialState, action) => {
    switch(action.type) {
        case GET_ALL_REVIEW: {
            return{
                ...state,
                reviews: action.payload
            }
        }
        case CREATE_REVIEW: {
            let reviews = [action.payload, ...state.reviews]

            return {
                ...state,
                reviews: reviews,
            }
        }
        case UPDATE_REVIEW: {
            let reviews = [...state.reviews].map((review) => {
                if (review.id === action.payload.id) {
                    return action.payload
                }
                return review
            });

            return {
                ...state,
                reviews: reviews
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
