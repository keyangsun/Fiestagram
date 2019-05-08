import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { removeComment } from '../../actions/comment_actions';

const mapSTP = (state, ownProps) => {
    let comments = ownProps.post.comment_ids.map(
        id => state.entities.comments[id]);

    return {
        comments 
    };
};

const mapDTP = dispatch => ({
    removeComment: id => dispatch(removeComment(id))
});

export default connect(mapSTP, mapDTP)(CommentIndex);