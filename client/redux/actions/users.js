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
        const json = await axios.post("http://localhost:3001/users/signup", {    
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
