import * as PostAPIUtil from '../util/post_api_util';

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST'; 
export const REMOVE_POST = 'REMOVE_POST'; 
export const RECEIVE_POST_ERRORS = 'RECEIVE_POST_ERRORS';

const receiveAllPosts = payload => ({
    type: RECEIVE_ALL_POSTS,
    payload
});

const receivePost = post => ({
    type: RECEIVE_POST,
    post
});

const deletePost = id => ({
    type: REMOVE_POST,
    id 
}); 

const receivePostErrors = postErrors => ({
    type: RECEIVE_POST_ERRORS,
    postErrors
});

export const fetchAllPosts = () => dispatch => {
    return PostAPIUtil.fetchPosts()
        .then(posts => dispatch(receiveAllPosts(posts)))
        .fail(res => dispatch(receivePostErrors(res.responseJSON))); 
};

export const fetchPost = id => dispatch => {
    return PostAPIUtil.fetchPost(id)
        .then(post => dispatch(receivePost(post)))
        .fail(res => dispatch(receivePostErrors(res.responseJSON))); 
};

export const removePost = id => dispatch => {
    return PostAPIUtil.deletePost(id)
        .then(() => dispatch(deletePost(id)))
        .fail(res => dispatch(receivePostErrors(res.responseJSON))); 
};

export const updatePost = post => dispatch => {
    return PostAPIUtil.updatePost(post)
        .then(updated => dispatch(receivePost(updated)))
        .fail(res => dispatch(receivePostErrors(res.responseJSON)));
};

export const createPost = post => dispatch => {
    return PostAPIUtil.createPost(post)
        .then(newPost => dispatch(receivePost(newPost)))
        .fail(res => dispatch(receivePostErrors(res.responseJSON))); 
};

// testing 
window.fetchAllPosts = fetchAllPosts; 
window.fetchPost = fetchPost; 
window.removePost =removePost; 
window.updatePost = updatePost;
window.createPost = createPost; 