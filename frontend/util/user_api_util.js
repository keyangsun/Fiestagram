export const fetchUser = id => {
    return $.ajax({
        url: `/api/users/${id}`,
        method: 'get'
    });
};

export const searchUsers = username => {
    return $.ajax({
        url: `/api/search/${username}`,
        method: 'get'
    });
};
