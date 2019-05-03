import React from 'react'; 
import NavBarContainer from './nav_bar/nav_bar_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container'; 
import { Route } from 'react-router-dom'; 
import { AuthRoute, ProtectedRoute} from '../util/route_util'; 
import Splash from './splash/splash'; 
import PostIndexContainer from '../components/posts/post_index_container';

const App = () => (
    <div>
        <AuthRoute path='/login' component={LoginFormContainer}/>
        <AuthRoute path='/signup' component={SignupFormContainer} />
        <AuthRoute path='/' component={Splash} />
        <ProtectedRoute path='/home' component={NavBarContainer}/>
        <ProtectedRoute path='/home' component={PostIndexContainer}/>
    </div>
);

export default App; 

