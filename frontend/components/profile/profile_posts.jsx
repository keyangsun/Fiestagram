import React from 'react';
import ProfilePostItem from './profile_post_item';

class ProfilePosts extends React.Component {
    constructor(props) {
        super(props);
        this.renderPosts = this.renderPosts.bind(this); 
    }

    renderPosts() {
        if ( this.props.posts.length === 0 ) {
            return(
                <div className="no-posts">
                    <img src="/images/camera.png"/>
                    <h3>Upload a Photo</h3>
                    <div className="upload-msg">
                        <p>Share photos that you'd like your friends to see</p>
                    </div>
                </div>
            ); 
        } else {
            return( 
                <div className="posts-grid">
                    {this.props.posts.map((post, idx) =>
                    <ProfilePostItem
                        key={idx}
                        post={post} />
                    )} 
                </div>
            );
        }
    }

    render() {
        return(
            <div className="profile-posts">
                <div className="profile-menu">
                    <div className="posts">
                        <img src="/images/grid.png"/>
                        <p>POSTS</p>
                    </div>
                </div>
                {this.renderPosts()}
            </div>
        );
    }
}

export default ProfilePosts;