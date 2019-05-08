import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { 
    removePost
    } from '../../actions/post_actions';
import PopUp from './pop_up';

const mapSTP = state => {
    let id = state.session.currentUserId;

    return({
        currentUser: state.entities.users[id]
    });
};

const mapDTP = dispatch => ({
    deletePost: id => dispatch(removePost(id))
}); 

export default withRouter(connect(mapSTP, mapDTP)(PopUp));