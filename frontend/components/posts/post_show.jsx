import React from 'react'; 
import NavBarContainer from '../nav_bar/nav_bar_container';
import CreatePostFormContainer from '../post_form/create_post_form_container';

class PostShow extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
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
                                <img src={this.props.user.profilePhoto}/>
                                <p>{this.props.user.username}</p>
                            </div>
                            <img src="/images/ellipsis.png" />
                        </header>
                        <section>
                            <img src={this.props.user.profilePhoto} />
                            <div className="show-caption">
                                <p>{this.props.post.caption}</p>
                                <p></p>
                            </div>
                            <div>
                                COMMENTS I GUESS
                            </div>
                        </section>

                    </div>
                </div>
                <CreatePostFormContainer/>
            </>
        );  
    }
}

export default PostShow; 