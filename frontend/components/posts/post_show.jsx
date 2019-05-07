import React from 'react'; 
import NavBarContainer from '../nav_bar/nav_bar_container';
import CreatePostFormContainer from '../post_form/create_post_form_container';
import { diffDate } from '../../util/general_util';

class PostShow extends React.Component {

    constructor(props) {
        super(props);
        this.showPopUp = this.showPopUp.bind(this);
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
                            <img src="/images/ellipsis.png" 
                                onClick={this.showPopUp}/>
                        </header>
                        <section>
                            <div className="show-caption">
                                <img src={this.props.user.profilePhoto} />
                                <div>
                                    <p>
                                        <p id='show-username'>
                                            {this.props.user.username}
                                        </p>
                                        {this.props.post.caption}
                                    </p>
                                    <p id='dates'>
                                        {diffDate(this.props.post.updated_at)}
                                    </p>
                                </div>
                            </div>

                            <div>
                               /* comments */
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