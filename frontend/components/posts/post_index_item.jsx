import React from 'react';
import { Link } from 'react-router-dom';

class PostIndexItem extends React.Component { 

    constructor(props) {
        super(props);
        this.handleLoad = this.handleLoad.bind(this); 
    }

    handleLoad(e) {
        let loader = e.target.parentElement.children[1]; 
        loader.removeAttribute("class"); 
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
                        <div className="caption">
                            {/* captions here */}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default PostIndexItem; 