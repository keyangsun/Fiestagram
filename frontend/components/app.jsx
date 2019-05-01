import React from 'react'; 
import NavBarContainer from './nav_bar/nav_bar_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container'; 
import { Route } from 'react-router-dom';

const App = () => (
    <div>
        <header>
            <h2>Fiestagram App</h2>
            <NavBarContainer/>
        </header>
        
        <Route path="/login" component={LoginFormContainer} />
        <Route path="/signup" component={SignupFormContainer} />
    </div>
);

export default App; 

