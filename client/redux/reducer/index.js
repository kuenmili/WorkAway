import { combineReducers } from "redux";
import users from '../reducer/users';
import reserves from '../reducer/reserves';
import review from '../reducer/review';
import business from '../reducer/business';

const rootReducer = combineReducers({
    usersReducer: users,
    reserves,
    review,
    business,
});

export default rootReducer;