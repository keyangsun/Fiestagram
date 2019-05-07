import { RECEIVE_CURRENT_USER } from '../actions/session_actions'; 
import { 
    RECEIVE_ALL_POSTS, 
    RECEIVE_POST
    } from '../actions/post_actions'; 
import { merge } from 'lodash'; 

const usersReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_ALL_POSTS: 
            return merge({}, state, action.payload.users);
        case RECEIVE_CURRENT_USER: 
            return merge({}, state, {[action.user.id]: action.user}); 
        case RECEIVE_POST:
            let newState = merge({}, state);
            newState[action.post.user_id].postIds.push(action.post.id);
            return newState; 
        default: 
            return state; 
    }
};

export default usersReducer; 