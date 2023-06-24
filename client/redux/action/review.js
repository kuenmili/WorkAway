"use client";
import axios from 'axios';

export const GET_ALL_REVIEW = "GET_ALL_REVIEW";
export const GET_BY_COWORKSPACE = "GET_BY_COWORKSPACE";
export const CREATE_REVIEW = "CREATE_REVIEW";
export const UPDATE_REVIEW = "UPDATE_REVIEW";

export const getAllReview = () => {
    return async (dispatch) => {
        const json = await axios.get("http://localhost:3001/reviews")
        return dispatch({
            type: GET_ALL_REVIEW,
            payload: json.data
        })
    }
};

export const createReview = ({
    user_id,
    score,
    comment,
    coworkspace
}) => {
    return async dispatch => {
        const json = await axios.post("http://localhost:3001/reviews/post", {
            user_id,
            score,
            comment,
            coworkspace
        })
        return dispatch({
            type: CREATE_REVIEW,
            payload: json.data,
        })
    }
};

export const updateReview = (id, reviewData) => {
    return async dispatch => {
        const json = await axios.put(`http://localhost:3001/reviews/${id}`, reviewData)
        return dispatch({
            type: UPDATE_REVIEW,
            payload: json.data,
        })
    }
};
