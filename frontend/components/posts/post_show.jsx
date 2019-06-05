import React from 'react'; 
import { Link } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';
import CreatePostFormContainer from '../post_form/create_post_form_container';
import { diffDate } from '../../util/general_util';
import PopUpContainer from '../pop_up/pop_up_container';
import EditPostForm from '../post_form/edit_post_form';
import CommentIndexContainer from '../comments/comment_index_container';
import CreateCommentFormContainer 
    from '../comments/create_comment_form_container';
import LikeBarContainer from '../likes/like_bar_container';

class PostShow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: null,
            edit: null
        };

        this.renderPopUp = this.renderPopUp.bind(this);
        this.changeSelected = this.changeSelected.bind(this);
        this.renderEditButton = this.renderEditButton.bind(this);
        this.changeEdit = this.changeEdit.bind(this);
        this.renderEditForm = this.renderEditForm.bind(this);
    }

    changeSelected(id) {
        this.setState({
            selected: id
        });
    }

    changeEdit(id) {
        this.setState({
            edit: id
        });
    }

    componentDidMount() {
        this.props.fetchPost(this.props.match.params.id);
    }

    renderEditForm() {
        return this.state.edit === null ? (
            <></>
        ) : (
            <EditPostForm
                post={this.props.post}
                history={this.props.history}
                updatePost={this.props.updatePost}
                closeModal={this.changeEdit} />
        );
    }

    renderPopUp() {
        return this.state.selected === null ? (
            <></>
        ) : (
            <PopUpContainer
                postId={this.props.post.id}
                closeModal={this.changeSelected} />
        );
    }

    renderEditButton() {
        return this.props.user.id === this.props.currentUserId ? (
            <strong
                onClick={() => this.changeEdit(this.props.post.id)}>
                Edit Post
            </strong>
        ) : (
            null
        );
    }

    render() {
        if ( this.props.post === undefined) {
            return <></>;
        } else {
            return(
                <>
                    <NavBarContainer/>
                    <div className="post-show-main">
                        <div className="post-show-img">
                                <img src={this.props.post.photoUrl}/>
                        </div>
                        <div className="post-show-section">

                            <header>
                                <div className="header-left">
                                    <Link to={`/profile/${this.props.user.id}`}>
                                        <img src={this.props.user.profilePhoto}/>
                                    </Link>
                                    <div>
                                        <p>{this.props.user.username}</p>
                                        <p className="location">
                                            {this.props.post.location}
                                        </p>
                                    </div>
                                </div>
                                <img src="/images/ellipsis.png"
                                    onClick={() => 
                                    this.changeSelected(this.props.post.id)}/>
                            </header>

                            <section>

                                <div className="show-caption">
                                    <Link to={`/profile/${this.props.user.id}`}>
                                        <img src={this.props.user.profilePhoto} />
                                    </Link>
                                    <div>
                                        <div>
                                            <strong id='show-username'>
                                                {this.props.user.username}
                                            </strong>
                                            {this.props.post.caption}
                                        </div>
                                        <div className='ribbon'>
                                            <p id='dates'>
                                                {diffDate(this.props.post.updated_at)}
                                            </p>
                                            {this.renderEditButton()}
                                        </div> 
                                    </div>
                                </div>

                                <div className="comments-section">
                                    <CommentIndexContainer 
                                        post={this.props.post}/>
                                </div>

                            </section>
                            
                            <LikeBarContainer postId={this.props.post.id}/>
                            <CreateCommentFormContainer postId={this.props.post.id}/>
                        </div>
                    </div>
                    
                    {this.renderEditForm()}
                    {this.renderPopUp()}
                    <CreatePostFormContainer/>
                </>
            ); 
        }        
    }
}

export default PostShow; 