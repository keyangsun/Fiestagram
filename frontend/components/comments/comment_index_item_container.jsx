import { connect } from 'react-redux';
import React from 'react';
import { fetchUser } from '../../actions/user_actions';
import { diffDate } from '../../util/general_util';

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
            <strong onClick={() => this.handleDelete()}>
                Delete
            </strong>
        ) : (
            null 
        );
    }

    render() {
        return(
            <div className="show-caption">
                <img src={this.props.user.profilePhoto} />
                <div>
                    <div>
                        <strong id='show-username'>
                            {this.props.user.username}
                        </strong>
                        {this.props.comment.content}
                    </div>
                    <div className='ribbon'>
                        <p id='dates'>
                            {diffDate(this.props.comment.created_at)}
                        </p>
                        {this.renderDeleteMe()}
                    </div>
                </div>
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