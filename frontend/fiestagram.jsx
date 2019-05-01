import React from 'react';
import ReactDom from 'react-dom'; 
import configureStore from './store/store'; 
import Root from './components/root'; 
// testing 
import * as SessionAPIUtil from './util/session_api_util';


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
    //testing 
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    //
    
    ReactDom.render(<Root store={store}/>, root); 
}); 