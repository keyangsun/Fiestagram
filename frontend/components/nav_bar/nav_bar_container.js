import { connect } from 'react-redux';
import NavBar from './nav_bar'; 
import { logout } from '../../actions/session_actions';

const mapSTP = state => {
    let user = state.entities.users[state.session.currentUserId];

    return({
    user
    }); 
};

const mapDTP = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mapSTP,mapDTP)(NavBar); 