import PostForm from './post_form';
import { createPost } from '../../actions/post_actions'; 
import { connect } from 'react-redux'; 

const mapSTP = state => ({
    errors: state.errors.posts
});

const mapDTP = dispatch => ({
    createPost: post => dispatch(createPost(post))
});

export default connect(mapSTP, mapDTP)(PostForm); 