import { connect } from 'react-redux'; 
import LikeBar from './like_bar'; 
import { createLike, removeLike} from '../../actions/like_actions'; 

const mapSTP = (state, ownProps) => {
    return({
        likes: state.entities.posts[ownProps.postId].like_ids, 
        likers: state.entities.posts[ownProps.postId].liker_ids,
        currUser: state.session.currentUserId
    });
};

const mapDTP = dispatch => ({
    createLike: like => dispatch(createLike(like)),
    removeLike: like => dispatch(removeLike(like))
});

export default connect(mapSTP, mapDTP)(LikeBar);