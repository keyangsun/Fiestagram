import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS'; 

const receiveUser = (payload) => ({
    type: RECEIVE_USER,
    payload
});

const receiveUsers = payload => ({
    type: RECEIVE_USERS,
    payload
});

export const fetchUser = id => dispatch => {
    return UserAPIUtil.fetchUser(id)
        .then(payload => dispatch(receiveUser(payload)));
};

export const searchUsers = username => dispatch => {
    return UserAPIUtil.searchUsers(username)
        .then(payload => dispatch(receiveUsers(payload))); 
}; 


