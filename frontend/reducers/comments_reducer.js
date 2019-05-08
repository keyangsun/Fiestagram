import { 
    RECEIVE_COMMENT, 
    REMOVE_COMMENT 
    } from '../actions/comment_actions';
import {
    RECEIVE_ALL_POSTS,
    RECEIVE_POST
    } from '../actions/post_actions';
import { merge } from 'lodash';

const commentsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_ALL_POSTS: 
            return action.payload.comments;
        case RECEIVE_POST:  
            return merge({}, state, action.payload.comments);
        case RECEIVE_COMMENT: 
            return merge({}, state, {[action.comment.id]: action.comment});
        case REMOVE_COMMENT: 
            let newState = merge({}, state);
            delete newState[action.comment.id];
            return newState; 
        default: 
            return state;
    }
};

export default commentsReducer;