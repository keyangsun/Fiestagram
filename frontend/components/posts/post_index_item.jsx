import React from 'react';
import { Link } from 'react-router-dom';
import LikeBarContainer from '../likes/like_bar_container';
import CommentIndexContainer from '../comments/comment_index_container'; 
import CreateCommentFormContainer 
    from '../comments/create_comment_form_container'; 

class PostIndexItem extends React.Component { 

    constructor(props) {
        super(props);
        this.state = {
            longCaption: false
        };
        this.handleLoad = this.handleLoad.bind(this); 
        this.renderCaption = this.renderCaption.bind(this); 
    }

    handleLoad(e) {
        let loader = e.target.parentElement.children[1]; 
        loader.removeAttribute("class"); 
    }

    renderCaption() {
        let { caption } = this.props.post; 
        if ( caption.length > 120 && this.state.longCaption === false ) {
            return (
                <p>
                    <strong>{this.props.user.username} </strong>
                    {caption.slice(0,121) + " ... "} 
                    <em style={{color: '#999999'}}
                        onClick={() => this.setState({longCaption: true})}>
                        more
                    </em>
                </p>
            ); 
        } else {
            return (
                <p>
                    <strong>{this.props.user.username} </strong>
                    {caption}
                </p>
            );
        }
    }

    render () {
        return(
            <>
                <div className='post-item'>
                    <header>
                        <div className='post-header-left'>
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
                        <div className='post-header-right'>
                            <img src="/images/ellipsis.png"
                                onClick={() => 
                                    this.props.showPopUp(this.props.post.id)}/>
                        </div>
                    </header>

                    <div className='post-img'>
                        <img src={this.props.post.photoUrl} 
                            onLoad={this.handleLoad}/>
                        <div className="animated-background"></div>
                    </div>

                    <div className="post-bottom">
                        <LikeBarContainer postId={this.props.post.id}/>
                        <div className="caption">
                            {this.renderCaption()}
                        </div>
                        <CommentIndexContainer post={this.props.post} />
                        <CreateCommentFormContainer 
                            postId={this.props.post.id}/>
                    </div>

                </div>
            </>
        );
    }
}

export default PostIndexItem; 