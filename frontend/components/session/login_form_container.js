import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form'; 

const mapSTP = state => ({
    errors: state.errors.session,
    formType: 'login'
});

const mapDTP = dispatch => ({
    processForm: user => dispatch(login(user)),
    processDemo: user => dispatch(login(user))
});

export default connect(mapSTP, mapDTP)(SessionForm); 
