import React from 'react';

class PostIndexItem extends React.Component { 

    constructor(props) {
        super(props);
    }

    render () {
        return(
            <>
                <div className='post-item'>
                    <header>
                        <div className='post-header-left'>
                            <img src={this.props.user.profilePhoto}/>
                            <p>{this.props.user.username}</p>
                        </div>
                        <div className='post-header-right'>
                            <img src="/images/ellipsis.png"
                                onClick={() => 
                                    this.props.showPopUp(this.props.post.id)}/>
                        </div>
                    </header>
                    <div className='post-img'>
                        <img src={this.props.post.photoUrl}/>
                    </div>
                    <div className="post-bottom">
                        <div className="caption">

                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default PostIndexItem; 