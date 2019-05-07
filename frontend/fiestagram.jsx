import React from 'react';
import ReactDom from 'react-dom'; 
import configureStore from './store/store'; 
import Root from './components/root'; 
// testing 
import * as SessionAPIUtil from './util/session_api_util';
import * as PostAPIUtil from './util/post_api_util';
import * as PostActions from './actions/post_actions'; 


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");

    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { currentUserId: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    
    //testing start 
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.fetchPosts = PostActions.fetchAllPosts;
    window.fetchPost = PostActions.fetchPost; 
    //testing end 
    
    ReactDom.render(<Root store={store}/>, root); 
}); 

document.onscroll = () => {
    const navbar = document.getElementById('navbar');
    const navlogo = document.getElementById('nav-logo');
    if (navbar && navlogo) {
        if (window.scrollY > 100) {
            navbar.classList.add('navbar-down');
            navlogo.classList.add('hide-logo');
        } else if (window.scrollY === 100 ) {
            window.scroll(0, 105);
        } else {
            navlogo.classList.remove('hide-logo');
            navbar.classList.remove('navbar-down');
        }
    }
};