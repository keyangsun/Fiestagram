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
        return(
            <div>
                <img src={this.props.post.photoUrl}
                    onClick={this.handlePushHistory}/>
            </div>
        );
    }
}

export default withRouter(ProfilePostItem);