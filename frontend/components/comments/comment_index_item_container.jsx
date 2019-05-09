import { connect } from 'react-redux';
import React from 'react';
import { fetchUser } from '../../actions/user_actions';

class CommentIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.renderDeleteMe = this.renderDeleteMe.bind(this);
    }

    componentDidMount() {
        let { user, comment } = this.props; 
        if ( user === undefined ) {
            this.props.fetchUser(comment.user_id);
        }
    }

    handleDelete() {
        this.props.removeComment(this.props.comment);
    }

    renderDeleteMe() {
        let { currentUserId, user } = this.props;
        
        return currentUserId === user.id ? (
            <button onClick={() => this.handleDelete()}>
                delete comment
            </button>
        ) : (
            null 
        );
    }

    render() {
        return(
            <div>
                {this.props.user.username}
                <br/>
                {this.props.comment.content}
                {this.renderDeleteMe()}
            </div>
        );
    }
}

const mapSTP = (state, ownProps) => {
    return {
    user: state.entities.users[ownProps.comment.user_id],
    currentUserId: state.session.currentUserId
    };
}; 

const mapDTP = dispatch => ({
    fetchUser: id => dispatch(fetchUser(id))
});

export default connect(mapSTP, mapDTP)(CommentIndexItem);