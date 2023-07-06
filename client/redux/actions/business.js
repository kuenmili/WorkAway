"use client";
import axios from "axios"

export const GET_BUSINESS_BY_ID = "GET_BUSINESS_BY_ID";
export const CREATE_BUSINESS = "CREATE_BUSINESS";
export const UPDATE_BUSINESS = "UPDATE_BUSINESS";
export const LOGIN_BUSINESS = "LOGIN_BUSINESS";


export const loginBusiness = () => {
    return async (dispatch) => {
        try {
            const json = await axios.post("https://work-away-back-6zjxm846l-kuenmili.vercel.app/business",{
                
            email,
            password,
        });
        return dispatch({
            type:LOGIN_BUSINESS,
            payload: json.data
        })
        } catch (error) {
            console.log(error)
        }
    }
}

export const getBusinessById = (id) => {

    return async (dispatch) => {
        try {
            const json = await axios.get(`https://work-away-back-6zjxm846l-kuenmili.vercel.app/business/${ id }`, {
                headers: {
                    Authorization: `Bearer ${ localStorage.getItem("token") }`,
                }
            });
            return dispatch({
                type:GET_BUSINESS_BY_ID,
                payload: json.data
            })
        } catch (error) {
            console.log("ERROR: ", error);
        }
    }
};



export const createBusiness = ({  name,
    cuit,
    cellphone_number,
    email,
    password,
    address, }) => {
        return async dispatch => {
            const json = await axios.post("https://work-away-back-6zjxm846l-kuenmili.vercel.app/business", {
                businessToCreate: {
                    cuit,
                    cellphone_number,
                    email,
                    password,
                    address
                }
            });
            return dispatch({
                type: CREATE_BUSINESS,
                payload: json.data,
            })

        }
    };

export const updateBusiness = (id, bussinessData) => {
    return async dispatch => {
        const json = await axios.put(`https://work-away-back-6zjxm846l-kuenmili.vercel.app/business/${ id }` , bussinessData, {
            headers: {
                Authorization: `Bearer ${ localStorage.getItem("token") }`,
            }
        });
        return dispatch({
            type: UPDATE_BUSINESS,
            payload: json.data,
        })
    }
};
