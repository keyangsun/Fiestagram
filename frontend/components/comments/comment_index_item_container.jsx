import { connect } from 'react-redux';
import React from 'react';
import { fetchUser } from '../../actions/user_actions';
import { Link } from 'react-router-dom';
import { diffDate } from '../../util/general_util';

class CommentIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.renderDeleteMe = this.renderDeleteMe.bind(this);
    }

    componentDidMount() {
        let { comment } = this.props;
        if ( this.props.user === undefined ) {
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
        if (this.props.user === undefined) { 
            return null; 
        } else {

            if ( this.props.location === '/home') {
                return (
                    <p>
                        <strong id='show-username'>
                            {this.props.user.username}
                        </strong>  {this.props.comment.content}
                    </p>
                );
            } else {
                return (
                    <div className="show-caption">
                        <Link to={`/profile/${this.props.user.id}`}>
                            <img src={this.props.user.profilePhoto} />
                        </Link>
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
    }
}

const mapSTP = (state, ownProps) => {
    let tempUser; 

    if (ownProps.comment === undefined) {
        tempUser = undefined; 
    } else {
        tempUser = state.entities.users[ownProps.comment.user_id]; 
    }

    return {
    user: tempUser,
    currentUserId: state.session.currentUserId
    };
}; 

const mapDTP = dispatch => ({
    fetchUser: id => dispatch(fetchUser(id))
});

export default connect(mapSTP, mapDTP)(CommentIndexItem);