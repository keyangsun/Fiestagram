import React from 'react';
import ReactDom from 'react-dom'; 
import configureStore from './store/store'; 
import Root from './components/root'; 
// testing 
import * as SessionAPIUtil from './util/session_api_util';


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const store = configureStore(); 
    //testing 
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    //
    ReactDom.render(<Root store={store}/>, root); 
}); 