export const fetchPost = id => {
    return $.ajax({
        url: `/api/posts/${id}`,
        method: 'get'
    });
};

export const fetchPosts = () => {
    return $.ajax({
        url: '/api/posts',
        method: 'get'
    });
};

export const createPost = post => {
    return $.ajax({
        url: '/api/posts',
        method: 'post',
        data: post, 
        contentType: false,
        processData: false
    });
};

export const updatePost = post => {
    return $.ajax({
        url: `/api/posts/${post.id}`,
        method: 'patch',
        data: post, 
        contentType: false,
        processData: false
    });
};

export const deletePost = id => {
    return $.ajax({
        url: `/api/posts/${id}`,
        method: 'delete'
    });
};

//testing 
window.fetchPost = fetchPost;
window.fetchPosts = fetchPosts;
window.createPost = createPost;
window.updatePost = updatePost; 
window.deletePost = deletePost; 