import { connect } from 'react-redux'; 
import Profile from './profile';
import { fetchUser } from '../../actions/user_actions';

const mapSTP = (state, ownProps) => {
    let user = state.entities.users[ownProps.match.params.id];
    let posts;
    if ( user ) {
        posts = user.postIds.map(
            id => state.entities.posts[id]
        );
    } else {
        posts = [ undefined ];
    }

    return ({
    user,
    posts
    });
};

const mapDTP = dispatch => ({
    fetchUser: id => dispatch(fetchUser(id))
}); 

export default connect(mapSTP, mapDTP)(Profile);
