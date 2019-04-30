export const signup = user => {
    return $.ajax({
        url: '/api/users',
        method: 'post',
        data: {user: user}
    });
};

export const login = user => {
    return $.ajax({
        url: '/api/session',
        method: 'post',
        data: {user: user}
    });
};

export const logout = id => {
    return $.ajax({
        url: '/api/session',
        method: 'delete'
    });
};

//testing 
window.login = login;
window.signup = signup;
window.logout = logout;