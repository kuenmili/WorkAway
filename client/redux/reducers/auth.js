import jwt from "jsonwebtoken";
const { LOGIN, LOGOUT, LOGIN_ERROR } = require("../actions/auth");

const initialState = {
    user: null,
    loggedIn: false,
    isAdmin: false,
    error: "",
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN: {
            const { token, isAdmin, success } = action.payload;
            localStorage.setItem("token", token);
            localStorage.setItem("isAdmin", isAdmin)
            return {
                ...state,
                user: jwt.decode(token),
                loggedIn: success,
                isAdmin: isAdmin,
            };
        }
        case LOGIN_ERROR: {
            const { message } = action.payload;
            return {
                ...state,
                error: message,
            };
        }
        case LOGOUT: {
            const { success } = action.payload;
            localStorage.removeItem("token");
            localStorage.removeItem("isAdmin");
            return {
                ...state,
                user: null,
                loggedIn: false,
                isAdmin: false,
                success: success,
            };
        }
        default:
            return state;
    }
}

export default authReducer;
