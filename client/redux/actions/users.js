"use client";
import axios from "axios";

export const GET_USER_BY_ID = "GET_USER_BY_ID";
export const CREATE_USER = "CREATE_USER";
export const PUT_USER = "PUT_USER"

export const getUserByID = (id) => {
    return async (dispatch) => {
        const json = await axios.get(`http://localhost:3001/users/${id}`);

        return dispatch({
            type:GET_USER_BY_ID,
            payload: json.data
        })
    }
}

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

export const putUser = (id, userData) => {
    console.log(id);
    return async dispatch => {
        const json = await axios.put(`http://localhost:3001/users/${id}`,userData, {
            headers: {
                Authorization: `Bearer ${ localStorage.getItem("token") }`,
            }
        })
        return dispatch({
            type: PUT_USER,
            payload: json.data,
        })
    }
}