import React from 'react'; 
import { Link } from 'react-router-dom';

class PopUp extends React.Component {
    constructor(props) {
        super(props); 
        this.handleDelete = this.handleDelete.bind(this); 
        this.renderDelete = this.renderDelete.bind(this); 
    }

    handleDelete() {
        let { 
            deletePost, post, closeModal, history, currentUser 
            } = this.props; 
        deletePost(post)
            .then( () => {
                closeModal(null);
                history.push(`/profile/${currentUser.id}`); 
            });
    }

    renderDelete() {
        let { currentUser, postId } = this.props; 
        return(
            currentUser.postIds.includes(postId) ? (
                <div>
                    <p onClick={this.handleDelete}>
                        Delete Post
                    </p>
                </div>
            ) : (null)
        );
    }

    render() {
        return(
            <div id='pop-up-form'  className="show">

                <div className="pop-up-main">
                    {this.renderDelete()}
                    <div>
                        <Link to={`/post/${this.props.postId}`}
                            onClick={() => this.props.closeModal(null)}>
                            Go to Post</Link>    
                    </div>
                    <div onClick={() => this.props.closeModal(null)}>
                        <p>Cancel</p>
                    </div>
                </div>

                <div className="modal-screen"
                    onClick={() => this.props.closeModal(null)}>
                </div>

            </div>
        );  
    }
}

export default PopUp;
