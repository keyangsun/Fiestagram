import React from 'react'; 
import NavBarContainer from './nav_bar/nav_bar_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container'; 
import { Route } from 'react-router-dom'; 
import { AuthRoute, ProtectedRoute} from '../util/route_util'; 
import Splash from './splash/splash'; 
import PostIndexContainer from '../components/posts/post_index_container';
import CreatePostContainer 
    from '../components/post_form/create_post_form_container';

const App = () => (
    <div>
        <AuthRoute path='/login' component={LoginFormContainer}/>
        <AuthRoute path='/signup' component={SignupFormContainer} />
        <AuthRoute path='/' component={Splash} />
        <ProtectedRoute path='/home' component={NavBarContainer}/>
        <ProtectedRoute path='/home' component={PostIndexContainer}/>
        <ProtectedRoute path='/home' component={CreatePostContainer}/>
    </div>
);

export default App; 

