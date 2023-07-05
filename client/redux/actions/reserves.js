"use client";
import axios from "axios";

export const GET_RESERVES_BY_BUSINESS = "GET_RESERVES_BY_BUSINESS";
export const GET_RESERVE_BY_ID = "GET_RESERVE_BY_ID";
export const CREATE_RESERVE = "CREATE_RESERVE";
export const UPDATE_RESERVE ="UPDATE_RESERVE";
export const DELETE_RESERVE = "DELETE_RESERVE";

export const getReserveById = (id) => {
    return async (dispatch) => {
        const json = await axios.get(`http://localhost:3001/reserves/${id}`, {
            headers: {
                Authorization: `Bearer ${ localStorage.getItem("token") }`,
            }
        });
        return dispatch({
            type: GET_RESERVE_BY_ID,
            payload: json.data
        })
    }
};

export const createReserve = ({
    date_from,
    date_to,
    occupants,
    user,
    coworkspace
}) => {
    return async dispatch => {
        const json = await axios.post("http://localhost:3001/reserves", {
            headers: {
                Authorization: `Bearer ${ localStorage.getItem("token") }`,
            }
        } , {
            reserveToCreate: {
                date_from,
                date_to,
                occupants,
                user,
                coworkspace,
            },
        }, {
            headers: {
                Authorization: `Bearer ${ localStorage.getItem("token") }`,
            }
        }  
        );

        return dispatch({
            type: CREATE_RESERVE,
            payload: json.data,
        })
    }
}

export const updateReserve = (id, reserveData) => {
    return async dispatch => {
        const json = await axios.put(`http://localhost:3001/reserves/${id}`, {
            headers: {
                Authorization: `Bearer ${ localStorage.getItem("token") }`,
            }
        } );
        return dispatch({
            type:UPDATE_RESERVE,
            payload: json.data,
        })
    }
};
