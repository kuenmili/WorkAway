"use client";
import axios from "axios"

export const GET_BUSINESS_BY_ID = "GET_BUSINESS_BY_ID";
export const CREATE_BUSINESS = "CREATE_BUSINESS";
export const UPDATE_BUSINESS = "UPDATE_BUSINESS";

export const getBusinessById = (id) => {
    return async (dispatch) => {
        const json = await axios.put(`http://localhost:3001/business/${ id }`);
        return dispatch({
            type:GET_BUSINESS_BY_ID,
            payload: json.data
        })
    }
};

export const createBusiness = ({  name,
    cuit,
    cellphone_number,
    email,
    password,
    address, }) => {
        return async dispatch => {
            const json = await axios.post("http://localhost:3001/business", {
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
        const json = await axios.put(`http://localhost:3001/business/${ id }`, bussinessData);
        return dispatch({
            type: UPDATE_BUSINESS,
            payload: json.data,
        })
    }
};
