import { connect } from 'react-redux';
import NavBar from './nav_bar'; 
import { logout } from '../../actions/session_actions';
import { withRouter }  from 'react-router-dom';

const mapSTP = state => ({
    user: state.entities.users[state.session.currenUserId],
    loggedin: Boolean(state.session.currentUserId)
});

const mapDTP = dispatch => ({
    logout: () => dispatch(logout())
});

export default withRouter(connect(mapSTP,mapDTP)(NavBar)); 