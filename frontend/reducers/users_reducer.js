import { RECEIVE_CURRENT_USER } from '../actions/session_actions'; 
import { RECEIVE_ALL_POSTS } from '../actions/post_actions'; 
import { merge } from 'lodash'; 

const usersReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_ALL_POSTS: 
            return merge({}, state, action.payload.users);
        case RECEIVE_CURRENT_USER: 
            return merge({}, state, {[action.user.id]: action.user}); 
        default: 
            return state; 
    }
};

export default usersReducer; 