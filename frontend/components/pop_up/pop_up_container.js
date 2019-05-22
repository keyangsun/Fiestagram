import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { 
    removePost
    } from '../../actions/post_actions';
import PopUp from './pop_up';

const mapSTP = (state, ownProps) => {
    let id = state.session.currentUserId;

    return({
        currentUser: state.entities.users[id],
        post: state.entities.posts[ownProps.postId]
    });
};

const mapDTP = dispatch => ({
    deletePost: post => dispatch(removePost(post))
}); 

export default withRouter(connect(mapSTP, mapDTP)(PopUp));