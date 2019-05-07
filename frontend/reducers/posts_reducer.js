import { 
    RECEIVE_ALL_POSTS, 
    RECEIVE_POST,
    REMOVE_POST
    } from '../actions/post_actions'; 
import { merge } from 'lodash';

const postsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_ALL_POSTS: 
            return action.payload.posts || {};
        case RECEIVE_POST: 
            return merge({}, state, {[action.payload.post.id]: action.payload.post});
        case REMOVE_POST: 
            let newState = merge({}, state); 
            delete newState[action.id];
            return newState; 
        default: 
            return state; 
    }
};

export default postsReducer; 