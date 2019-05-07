import React from 'react'; 
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container'; 
import { AuthRoute, ProtectedRoute} from '../util/route_util'; 
import Splash from './splash/splash'; 
import PostIndexContainer from '../components/posts/post_index_container';
import PostShowContainer from './posts/post_show_container';
import { Switch } from 'react-router-dom';
import ProfileContainer from './profile/profile_container';

const App = () => (
    <div>
        <AuthRoute path='/login' component={LoginFormContainer}/>
        <AuthRoute path='/signup' component={SignupFormContainer} />
        <AuthRoute path='/' component={Splash} />

        <Switch>
            <ProtectedRoute path='/profile/:id' component={ProfileContainer}/>
            <ProtectedRoute path='/post/:id' component={PostShowContainer}/>
            <ProtectedRoute path='/home' component={PostIndexContainer}/>
        </Switch>    
    </div>
);

export default App; 

