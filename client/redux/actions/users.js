"use client";
import axios from "axios";

export const CREATE_USER = "CREATE_USER";

export const createUser = ({
    first_name,
    last_name,
    email,
    password,
    cellphone_number,
    profile_image,
}) => {
    return async dispatch => {
        const json = await axios.post("https://work-away-back-6zjxm846l-kuenmili.vercel.app/users/signup", {    
            first_name,
            last_name,
            email,
            password,
            cellphone_number,
            profile_image,
    })
        return dispatch({
            type: CREATE_USER,
            payload: json.data,
        });
    }
}
