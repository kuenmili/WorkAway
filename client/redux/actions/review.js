"use client";
import axios from 'axios';

export const GET_ALL_REVIEW = "GET_ALL_REVIEW";
export const GET_BY_COWORKSPACE = "GET_BY_COWORKSPACE";
export const CREATE_REVIEW = "CREATE_REVIEW";
export const UPDATE_REVIEW = "UPDATE_REVIEW";

export const getAllReview = () => {
    return async (dispatch) => {
        const json = await axios.get("https://work-away-back-6zjxm846l-kuenmili.vercel.app/reviews",{
            
        })
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
        const json = await axios.post("https://work-away-back-6zjxm846l-kuenmili.vercel.app/reviews/post" , {
            user_id,
            score,
            comment,
            coworkspace
        },{
            headers: {
                Authorization: `Bearer ${ localStorage.getItem("token") }`,
            }
        })
        return dispatch({
            type: CREATE_REVIEW,
            payload: json.data,
        })
    }
};

export const updateReview = (id, reviewData) => {
    return async dispatch => {
        const json = await axios.put(`https://work-away-back-6zjxm846l-kuenmili.vercel.app/reviews/${id}`, reviewData, {
            headers: {
                Authorization: `Bearer ${ localStorage.getItem("token") }`,
            }
        })
        return dispatch({
            type: UPDATE_REVIEW,
            payload: json.data,
        })
    }
};
