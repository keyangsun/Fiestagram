import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
});

const deleteComment = comment => ({
    type: REMOVE_COMMENT,
    comment
});

export const createComment = comment => dispatch => {
    return CommentAPIUtil.createComment(comment)
        .then(newComment => dispatch(receiveComment(newComment)));
};

export const removeComment = comment => dispatch => {
    return CommentAPIUtil.destroyComment(comment.id)
        .then(() => dispatch(deleteComment(comment)));
};

//testing 
window.createComment = createComment;
window.removeComment = removeComment;