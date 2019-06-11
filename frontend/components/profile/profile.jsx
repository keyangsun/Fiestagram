import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import CreatePostFormContainer from '../post_form/create_post_form_container';
import ProfileHeader from './profile_header';
import ProfilePosts from './profile_posts';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true 
        };
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.id)
            .then( () => this.setState({loading: false}));
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.match.params.id !== nextProps.match.params.id) {
            this.setState({loading: true}); 
            this.props.fetchUser(nextProps.match.params.id)
                .then( () => this.setState({loading: false})); 
            return false; 
        }
        return true;
    }

    render() {
        if ( this.state.loading === true ) {
            return (
                <div className="loading">
                    <i className="fab fa-instagram" />
                </div>
            );
        } else {
            return(
                <>
                    <NavBarContainer/>
                    <ProfileHeader user={this.props.user}/>
                    <ProfilePosts posts={this.props.posts}/>
                    <CreatePostFormContainer/>
                </>
            );
        }
    }
}

export default Profile;