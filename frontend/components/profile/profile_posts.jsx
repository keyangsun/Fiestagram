import React from 'react';
import ProfilePostItem from './profile_post_item';

class ProfilePosts extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="profile-posts">
                <div className="profile-menu">
                    <p>POSTS</p>
                </div>
                <div className="posts-grid">
                    {this.props.posts.map( (post, idx) => 
                        <ProfilePostItem 
                            key={idx}
                            post={post}/>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default ProfilePosts;