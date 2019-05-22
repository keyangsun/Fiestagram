import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'; 
import { login, clearSessionErrors } from '../../actions/session_actions';
import SessionForm from './session_form'; 

const mapSTP = state => ({
    errors: state.errors.session,
    formType: 'login'
});

const mapDTP = dispatch => ({
    processForm: user => dispatch(login(user)),
    processDemo: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearSessionErrors())
});

export default withRouter(connect(mapSTP, mapDTP)(SessionForm)); 
