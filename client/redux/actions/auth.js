import axios from "axios";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const PUT_USER = "PUT_USER";
export const GET_USER_BY_ID = "GET_USER_BY_ID";

const dispatchLogin = (payload) => ({
    type: LOGIN,
    payload,
});

export const login = ({ email, password }) => async (dispatch) => {
    const token = localStorage.getItem("token");
    const isAdmin = localStorage.getItem("isAdmin");
    if (token) {
        return dispatch(dispatchLogin({ token: token, isAdmin: JSON.parse(isAdmin), success: true }));
    }

    try {
        const json = await axios.post("https://work-away-back-6zjxm846l-kuenmili.vercel.app/auth/login", {
            email,
            password,
        });
        console.log("JSON.DATA: ", json.data);
        if (json.data.success) {
            return dispatch({
                type: LOGIN,
                payload: json.data,
            });
        }

        return dispatch({
            type: LOGIN_ERROR,
            payload: json.data,
        });
    } catch (error) {
        console.log(error);
    }
}

export const putUser = (id, userData) => {
    console.log(id);
    return async dispatch => {
        const json = await axios.put(`https://work-away-back-6zjxm846l-kuenmili.vercel.app/users/${id}`,userData, {
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

export const logout = () => async (dispatch) => {
    try {
        const { data } = await axios.post("https://work-away-back-6zjxm846l-kuenmili.vercel.app/auth/logout");
        return dispatch({
            type: LOGOUT,
            payload: data,
        });
    } catch (error) {
        console.log(error);
    }
}

export const getUserByID = (id) => {
    return async (dispatch) => {
        const json = await axios.get(`https://work-away-back-6zjxm846l-kuenmili.vercel.app/users/${id}`, {
            headers: {
                Authorization: `Bearer ${ localStorage.getItem("token")}`,
            }
        });

        return dispatch({
            type:GET_USER_BY_ID,
            payload: json.data
        })
    }
}
