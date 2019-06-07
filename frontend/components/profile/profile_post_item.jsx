import React from 'react'; 
import { withRouter } from 'react-router-dom';

class ProfilePostItem extends React.Component {
    constructor(props) {
        super(props);
        this.handlePushHistory = this.handlePushHistory.bind(this);
    }

    handlePushHistory() {
        this.props.history.push(`/post/${this.props.post.id}`);
    }

    render() {
        let {comment_ids, like_ids} = this.props.post; 
        return(
            <div className="profile-post-item" 
                onClick={this.handlePushHistory}>
                <img src={this.props.post.photoUrl}/>
                <div className="post-stats">
                    <img src="/images/white_heart.png"/>
                    <p>{like_ids.length}</p>
                    <img src="/images/white_comment.png"/>
                    <p>{comment_ids.length}</p>
                </div>
            </div>
        );
    }
}

export default withRouter(ProfilePostItem);