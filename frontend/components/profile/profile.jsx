import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import CreatePostFormContainer from '../post_form/create_post_form_container';
import ProfileHeader from './profile_header';
import ProfilePosts from './profile_posts';

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

        this.props.fetchUser(this.props.match.params.id);
    }

    render() {
 
        let { posts } = this.props; 
        if ( posts.length !== 0 && posts[0] === undefined ) {
            return null;
        } else {
            console.log(this.props);
            return(
                <>
                    <NavBarContainer/>
                    <ProfileHeader user={this.props.user}/>
                    <ProfilePosts posts={posts}/>
                    <CreatePostFormContainer/>
                </>
            );
        }
    }
}

export default Profile;