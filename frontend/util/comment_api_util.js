export const createComment = comment => {
    return $.ajax({
        url: '/api/comments',
        method: 'post',
        data: {comment: comment}
    });
};

export const destroyComment = id => {
    return $.ajax({
        url: `/api/comments/${id}`,
        method: 'delete'
    });
};

//testing
window.createComment = createComment;
window.destoryComment = destroyComment;