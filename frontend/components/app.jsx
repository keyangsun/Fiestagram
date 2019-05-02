import React from 'react'; 
import NavBarContainer from './nav_bar/nav_bar_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container'; 
import { Route } from 'react-router-dom'; 
import { AuthRoute, ProtectedRoute} from '../util/route_util'; 
import Splash from './splash/splash'; 

const App = () => (
    <div>
        <ProtectedRoute path='/home' exact component={NavBarContainer}/>
        <Route path='/' exact component={Splash} />
        <AuthRoute path='/login' exact component={LoginFormContainer}/>
        <AuthRoute path='/signup' exact component={SignupFormContainer} />
    </div>
);

export default App; 

