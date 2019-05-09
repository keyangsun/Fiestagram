import { RECEIVE_CURRENT_USER } from '../actions/session_actions'; 
import { 
    RECEIVE_ALL_POSTS, 
    RECEIVE_POST
    } from '../actions/post_actions'; 
import { RECEIVE_USER } from '../actions/user_actions';    
import { merge } from 'lodash'; 

const usersReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_USER:
            return merge({}, state, { [action.payload.user.id]: action.payload.user }); 
        case RECEIVE_ALL_POSTS: 
            return merge({}, state, action.payload.users);
        case RECEIVE_CURRENT_USER: 
            return merge({}, state, {[action.payload.user.id]: action.payload.user}); 
        case RECEIVE_POST:
            return merge({}, state, {[action.payload.user.id]: action.payload.user});
        default: 
            return state; 
    }
};

export default usersReducer; 