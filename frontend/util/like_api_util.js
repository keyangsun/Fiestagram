export const createLike = like => {
    return $.ajax({
        url: '/api/likes',
        method: 'post',
        data: {like: like}
    });
};

export const destroyLike = id => {
    return $.ajax({
        url: `/api/likes/${id}`,
        method: 'delete'
    });
};