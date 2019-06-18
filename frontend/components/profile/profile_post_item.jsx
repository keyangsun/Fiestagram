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

    handleMouseEnter(e) {
        let stats = e.currentTarget.lastElementChild; 
        stats.classList.remove("hide-stats"); 
    }

    handleMouseLeave(e) {
        let stats = e.currentTarget.lastElementChild;
        stats.classList.add("hide-stats");
    }

    render() {
        // eslint-disable-next-line camelcase
        let {comment_ids, like_ids} = this.props.post; 
        return(
            <div className="profile-post-item" 
                onClick={this.handlePushHistory}
                onMouseEnter={e => this.handleMouseEnter(e)}
                onMouseLeave={e => this.handleMouseLeave(e)}>

                <img src={this.props.post.photoUrl}/>

                <div className="post-stats hide-stats">
                    <div>
                        <img src="/images/white_heart.png"/>
                        <div>{like_ids.length}</div>
                        <img src="/images/white_comment.png"/>
                        <div>{comment_ids.length}</div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default withRouter(ProfilePostItem);