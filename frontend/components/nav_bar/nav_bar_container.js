import { connect } from 'react-redux';
import NavBar from './nav_bar'; 
import { logout } from '../../actions/session_actions';

const mapSTP = state => ({
    user: state.entities.users[state.session.currenUserId],
    loggedin: Boolean(state.session.currentUserId)
});

const mapDTP = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mapSTP,mapDTP)(NavBar); 