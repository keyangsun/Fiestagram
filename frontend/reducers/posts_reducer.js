import { 
    RECEIVE_ALL_POSTS, 
    RECEIVE_POST,
    REMOVE_POST
    } from '../actions/post_actions'; 
import {
    RECEIVE_COMMENT,
    REMOVE_COMMENT 
    } from '../actions/comment_actions';    
import { merge } from 'lodash';
import { RECEIVE_USER } from '../actions/user_actions';

const postsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = merge({}, state); 

    switch(action.type) {
        case RECEIVE_USER: 
            return merge({}, state, action.payload.posts);
        case RECEIVE_COMMENT: 
            newState[action.comment.post_id].comment_ids.push(action.comment.id);
            return newState;
        case REMOVE_COMMENT: 
            let target = action.comment.id; 
            let newCommentIdsArr = newState[action.comment.post_id].comment_ids;
            newCommentIdsArr = newCommentIdsArr.filter( val => val !== target);
            newState[action.comment.post_id].comment_ids = newCommentIdsArr;
            return newState;
        case RECEIVE_ALL_POSTS: 
            return action.payload.posts || {};
        case RECEIVE_POST: 
            return merge({}, state, {[action.payload.post.id]: action.payload.post});
        case REMOVE_POST: 
            delete newState[action.post.id];
            return newState; 
        default: 
            return state; 
    }
};

export default postsReducer; 