import { 
    RECEIVE_ALL_POSTS, 
    RECEIVE_POST,
    REMOVE_POST
    } from '../actions/post_actions'; 
import {
    RECEIVE_COMMENT,
    REMOVE_COMMENT 
    } from '../actions/comment_actions';   
import {
    RECEIVE_LIKE,
    REMOVE_LIKE   
    } from '../actions/like_actions'; 
import { merge } from 'lodash';
import { RECEIVE_USER } from '../actions/user_actions';

const postsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = merge({}, state); 
    let target;
    let newLikerIdsArr; 
    let newLikeIdsArr; 
    let postObj; 

    switch(action.type) {
        case RECEIVE_LIKE: 
            target = action.like.post_id;
            postObj = newState[action.like.post_id];
            newLikerIdsArr = postObj.liker_ids;
            newLikeIdsArr = postObj.like_ids; 
            newLikerIdsArr.push(action.like.user_id); 
            newLikeIdsArr.push(action.like.id); 
            newState[action.like.post_id].liker_ids = newLikerIdsArr;
            newState[action.like.post_id].like_ids = newLikeIdsArr; 
            return newState; 
        case REMOVE_LIKE: 
            newLikerIdsArr = newState[action.like.post_id].liker_ids;
            newLikeIdsArr = newState[action.like.post_id].like_ids;
            newLikerIdsArr = newLikerIdsArr.filter(val => val !== action.like.user_id); 
            newLikeIdsArr = newLikeIdsArr.filter(val => val !== action.like.id);
            newState[action.like.post_id].liker_ids = newLikerIdsArr;
            newState[action.like.post_id].like_ids = newLikeIdsArr;
            return newState; 
        case RECEIVE_USER: 
            return merge({}, state, action.payload.posts);
        case RECEIVE_COMMENT: 
            newState[action.comment.post_id].comment_ids.push(action.comment.id);
            return newState;
        case REMOVE_COMMENT: 
            target = action.comment.id; 
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