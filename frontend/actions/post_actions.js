import * as PostAPIUtil from '../util/post_api_util';

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST'; 
export const REMOVE_POST = 'REMOVE_POST'; 
export const RECEIVE_POST_ERRORS = 'RECEIVE_POST_ERRORS';
export const REMOVE_POST_ERRORS = 'REMOVE_POST_ERRORS';

const receiveAllPosts = payload => ({
    type: RECEIVE_ALL_POSTS,
    payload
});

const receivePost = payload => ({
    type: RECEIVE_POST,
    payload
});

const deletePost = post => ({
    type: REMOVE_POST,
    post 
});

export const removePostErrors = () => ({
    type: REMOVE_POST_ERRORS
});

export const receivePostErrors = postErrors => ({
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
        .then(payload => dispatch(receivePost(payload)))
        .fail(res => dispatch(receivePostErrors(res.responseJSON))); 
};

export const removePost = post => dispatch => {
    return PostAPIUtil.deletePost(post.id)
        .then(() => dispatch(deletePost(post)))
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
