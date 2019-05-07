import { connect } from 'react-redux';
import { removePost, updatePost } from '../../actions/post_actions';
import PostShow from './post_show';

const mapSTP = (state, ownProps) => {
    let post = state.entities.posts[ownProps.match.params.id];
    let user = state.entities.users[post.user_id];

    return {
        post,
        user
    };
}; 

const mapDTP = dispatch => ({
    removePost: id => dispatch(removePost(id)), 
    updatePost: post => dispatch(updatePost(post))
});

export default connect(mapSTP,mapDTP)(PostShow);