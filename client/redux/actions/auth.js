import axios from "axios";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

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
        const json = await axios.post("/auth/login", {
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

export const logout = () => async (dispatch) => {
    try {
        const { data } = await axios.post("/auth/logout");
        return dispatch({
            type: LOGOUT,
            payload: data,
        });
    } catch (error) {
        console.log(error);
    }
}
