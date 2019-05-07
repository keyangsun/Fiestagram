import React from 'react'; 
import NavBarContainer from '../nav_bar/nav_bar_container';
import CreatePostFormContainer from '../post_form/create_post_form_container';
import { diffDate } from '../../util/general_util';

class PostShow extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPost(this.props.match.params.id);
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
                                    <img src={this.props.user.profilePhoto}/>
                                    <p>{this.props.user.username}</p>
                                </div>
                                <img src="/images/ellipsis.png"/>
                            </header>
                            <section>
                                <div className="show-caption">
                                    <img src={this.props.user.profilePhoto} />
                                    <div>
                                        <p>
                                            <strong id='show-username'>
                                                {this.props.user.username}
                                            </strong>
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
}

export default PostShow; 