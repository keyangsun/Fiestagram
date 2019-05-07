import React from 'react'; 
import { Link } from 'react-router-dom';

class PopUp extends React.Component {
    constructor(props) {
        super(props); 
        this.closeModal = this.closeModal.bind(this); 
    }

    closeModal() {
        document.getElementById(`pop-up-form-${this.props.postId}`)
            .className = 'hide';
    }

    render() {
        let {currentUser, postId, deletePost} = this.props; 

        const deletebutton = (
            currentUser.postIds.includes(postId) ? (
                <div>
                    <p onClick={() => deletePost(postId)}>
                        Delete Post
                    </p>
                </div>
            ) : (null)
        );

        return(
            <div id={`pop-up-form-${postId}`}  className="hide">

                <div className="pop-up-main">
                    {deletebutton}
                    <div>
                        <Link to={`/post/${postId}`}>Go to Post</Link>    
                    </div>
                    <div onClick={this.closeModal}>
                        <p>Cancel</p>
                    </div>
                </div>

                <div className="modal-screen"
                    onClick={this.closeModal}>
                </div>

            </div>
        );  
    }
}

export default PopUp;
