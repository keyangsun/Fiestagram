import { RECEIVE_USERS } from '../actions/user_actions'; 

const userSearchReducer = (state = {}, action) => {
    Object.freeze(state); 

    switch(action.type) {
        case RECEIVE_USERS: 
            return action.payload.users; 
        default: 
            return state; 
    }
}; 

export default userSearchReducer; 

