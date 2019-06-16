import {
    RECEIVE_POST,
    RECEIVE_ALL_POSTS, 
    RECEIVE_POST_ERRORS,
    REMOVE_POST_ERRORS
    } from '../actions/post_actions';

const postErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    
    switch(action.type) {
        case RECEIVE_POST_ERRORS: 
            return action.postErrors;
        case RECEIVE_ALL_POSTS:
            return [];
        case REMOVE_POST_ERRORS: 
            return []; 
        case RECEIVE_POST:
            return [];
        default: 
            return state;
    }
};

export default postErrorsReducer;
