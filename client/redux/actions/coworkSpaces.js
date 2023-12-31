import axios from 'axios';
import { getBusinessById } from './business';

export const GET_COWORKSPACES = 'GET_COWORKSPACES';
export const GET_COWORKSPACES_BY_NAME = 'GET_COWORKSPACES_BY_NAME';
export const GET_COWORKSPACE = 'GET_COWORKSPACE';
export const ADD_COWORKSPACE = 'ADD_COWORKSPACE';
export const UPDATE_COWORKSPACE = 'UPDATE_COWORKSPACE';
export const DELETE_COWORKSPACE = 'DELETE_COWORKSPACE';
export const COWORKSPACE_LOADING = 'COWORKSPACE_LOADING';
export const COWORKSPACE_ERROR = 'COWORKSPACE_ERROR';
export const GET_BUSINESS_WITH_RESERVE = "GET_BUSINESS_WITH_RESERVE";



const baseCoworkSpacesURL = '/cowork_spaces';

export const getCoworkSpaces = () => async dispatch => {
    try {
        const { data } = await axios.get(baseCoworkSpacesURL);
        dispatch({
            type: GET_COWORKSPACES,
            payload: data
        });
        
    } catch ({ response: { data } }) {
        dispatch({
            type: COWORKSPACE_ERROR,
            payload: data
        });
    }
}




export const getCoworkSpacesBySearch = ({ name, score, location, services, price }) => async dispatch => {
    console.log(score, location, services, price);
    const query = `?name=${name || ""}&score=${score || ""}&location=${location || ""}&services=${services || ""}&price=${price || ""}`
    
    try {
        const { data } = await axios.get(`${baseCoworkSpacesURL}/search${query}`);
        dispatch({
            type: GET_COWORKSPACES_BY_NAME,
            payload: data
        });
    } catch ({ response: { data } }) {
        dispatch({
            type: COWORKSPACE_ERROR,
            payload: data
        });
    }
}

export const getCoworkSpace = id => async dispatch => {
    try {
        const { data } = await axios.get(`${baseCoworkSpacesURL}/${id}`);
        dispatch({
            type: GET_COWORKSPACE,
            payload: data
        });
    } catch ({ response: { data } }) {
        dispatch({
            type: COWORKSPACE_ERROR,
            payload: data
        });
    }
}

export const getBusinessWithReserve = () => {
    return async (dispatch) => {
        try {
            const json = await axios.get(`${baseCoworkSpacesURL}/${id}/detail`, {
            headers: {
                Authorization: `Bearer ${ localStorage.getItem("token") }`,
            }
        });
        return dispatch({
            type: GET_BUSINESS_WITH_RESERVE,
            payload:json.data
        })
        } catch (error) {
            console.log("error", error)
        }
    }
};


export const addCoworkSpace = coworkSpaceToCreate => async dispatch => {
    try {
        const { data } = await axios.post(`${baseCoworkSpacesURL}`, {coworkSpaceToCreate}, {
            headers: {
                Authorization: `Bearer ${ localStorage.getItem("token") }`,
            }
        });
        dispatch({
            type: ADD_COWORKSPACE,
            payload: data
        });
    } catch ({ response: { data }}) {
        dispatch({
            type: COWORKSPACE_ERROR,
            payload: data
        });
    }
}

export const updateCoworkSpace = coworkSpace => async dispatch => {
    try {
        const { data } = await axios.put(`${baseCoworkSpacesURL}/${coworkSpace._id}`, {
            headers: {
                Authorization: `Bearer ${ localStorage.getItem("token") }`,
            }
        });
        dispatch({
            type: UPDATE_COWORKSPACE,
            payload: data
        });
    } catch ({ response: { data }}) {
        dispatch({
            type: COWORKSPACE_ERROR,
            payload: data
        });
    }
}

export const deleteCoworkSpace = id => async dispatch => {
    try {
        await axios.delete(`${baseCoworkSpacesURL}/${id}`, {
            headers: {
                Authorization: `Bearer ${ localStorage.getItem("token") }`,
            }
        });
        dispatch({
            type: DELETE_COWORKSPACE,
            payload: id
        });
    } catch (err) {
        dispatch({
            type: COWORKSPACE_ERROR,
            payload: err.response.data
        });
    }
}

export const setCoworkSpaceLoading = () => {
    return {
        type: COWORKSPACE_LOADING
    }
}

export const clearCoworkSpaceErrors = () => {
    return {
        type: COWORKSPACE_ERROR,
        payload: null
    }
}

export const clearCoworkSpaces = () => {
    return {
        type: GET_COWORKSPACES,
        payload: []
    }
}

export const clearCoworkSpace = () => {
    return {
        type: GET_COWORKSPACE,
        payload: {}
    }
}