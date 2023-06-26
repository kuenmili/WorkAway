import { combineReducers } from 'redux';
import coworkSpaces from '../reducers/coworkSpaces';
import users from '../reducers/users';
import reserves from '../reducers/reserves';
import review from '../reducers/review';
import business from '../reducers/business';

const rootReducer = combineReducers({
    users,
    reserves,
    review,
    business,
    coworkSpaces,
});

export default rootReducer;
