import { connect } from 'react-redux'; 
import Profile from './profile';
import { receiveAllPosts } from '../../actions/post_actions';

const mapSTP = (state, ownProps) => {
    let user = state.entities.users[ownProps.match.params.id];
    let posts = user.postIds.map(
        id => state.entities.posts[id]
    );

    return ({
    user,
    posts
    });
};

// const mapDTP = dispatch => ({
//     fetchAllPosts: () => dispatch(receiveAllPosts())
// }); 

export default connect(mapSTP, null)(Profile);
