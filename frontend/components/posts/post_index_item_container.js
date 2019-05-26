import { connect } from 'react-redux';
import PostIndexItem from './post_index_item'; 

const selectComments = (commentState, postId) => {
    let arr = Object.values(commentState);
    let comments = [];
    arr.forEach(comment => {
        if (comment.post_id === postId) {
            comments.push(comment);
        }
    });
    return comments;
};

const mapSTP = (state, ownProps) => {
    return {
    comments: selectComments(state.entities.comments, ownProps.post.id)
    }; 
};

export default connect(mapSTP,null)(PostIndexItem); 