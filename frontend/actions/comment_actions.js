import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
});

const deleteComment = id => ({
    type: REMOVE_COMMENT,
    id
});

export const createComment = comment => dispatch => {
    return CommentAPIUtil.createComment(comment)
        .then(newComment => dispatch(receiveComment(newComment)));
};

export const removeComment = id => dispatch => {
    return CommentAPIUtil.destroyComment(id)
        .then(() => dispatch(deleteComment(id)));
};

//testing 
window.createComment = createComment;
window.removeComment = removeComment;