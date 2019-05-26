import { fetchAllPosts } from '../../actions/post_actions';
import { connect } from 'react-redux';
import PostIndex from './post_index'; 

const mapSTP = state => ({
    posts: state.entities.posts,
    users: state.entities.users
});

const mapDTP = dispatch => ({
    fetchAllPosts: () => dispatch(fetchAllPosts())
});

export default connect(mapSTP, mapDTP)(PostIndex); 