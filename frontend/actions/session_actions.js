import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'; 
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'; 

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user  
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

const receiveSessionErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors 
});

export const login = user => dispatch => {
    return SessionAPIUtil.login(user)
        .then(loggedInUser => dispatch(receiveCurrentUser(loggedInUser)))
        .fail(response => dispatch(receiveSessionErrors(response.responseJSON))); 
};

export const logout = () => dispatch => {
    return SessionAPIUtil.logout()
        .then(() => dispatch(logoutCurrentUser())); 
};

export const signup = user => dispatch => {
    return SessionAPIUtil.signup(user)
        .then(newUser => dispatch(receiveCurrentUser(newUser)))
        .fail(response => dispatch(receiveSessionErrors(response.responseJSON)))
};

//testing 
window.login = login;
window.signup = signup;
window.logout = logout; 