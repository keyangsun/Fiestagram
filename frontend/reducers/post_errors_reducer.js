import {
    RECEIVE_POST,
    RECEIVE_POST_ERRORS
    } from '../actions/post_actions';

const postErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    
    switch(action.type) {
        case RECEIVE_POST_ERRORS: 
            return action.postErrors;
        case RECEIVE_POST:
            return [];
        default: 
            return state;
    }
};

export default postErrorsReducer;
