import React from 'react'; 
import NavBarContainer from './nav_bar/nav_bar_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container'; 
import { Route } from 'react-router-dom'; 
import { AuthRoute, ProtectedRoute} from '../util/route_util'; 
import Splash from './splash/splash'; 

const App = () => (
    <div>
        <ProtectedRoute path='/home' component={NavBarContainer}/>
        <AuthRoute path='/login' component={LoginFormContainer}/>
        <AuthRoute path='/signup' component={SignupFormContainer} />
        <AuthRoute path='/' component={Splash} />
    </div>
);

export default App; 

