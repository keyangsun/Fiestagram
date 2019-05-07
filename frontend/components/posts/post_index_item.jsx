import React from 'react';
import PopUpContainer from '../pop_up/pop_up_container';

class PostIndexItem extends React.Component { 

    constructor(props) {
        super(props);
        this.showPopUp = this.showPopUp.bind(this);
    }

    showPopUp() {
        document.getElementById(`pop-up-form-${this.props.post.id}`)
            .className = 'show';
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
                                onClick={this.showPopUp}/>
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

                <PopUpContainer postId={this.props.post.id}/>
            </>
        );
    }
}

export default PostIndexItem; 