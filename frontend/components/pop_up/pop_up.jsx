import React from 'react'; 
import { Link } from 'react-router-dom';

class PopUp extends React.Component {
    constructor(props) {
        super(props); 
    }

    render() {
        let {currentUser, postId, deletePost, post} = this.props; 

        const deleteEditButton = (
            currentUser.postIds.includes(postId) ? (
                <>
                    <div>
                        <p onClick={() => { deletePost(post); 
                            this.props.closeModal(null);
                            this.props.history.push('/home');}}>
                            Delete Post
                        </p>
                    </div>
                </>
            ) : (null)
        );

        return(
            <div id='pop-up-form'  className="show">

                <div className="pop-up-main">
                    {deleteEditButton}
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
