import React from 'react';
import PostIndexItem from './post_index_item';
import NavBarContainer from '../nav_bar/nav_bar_container';
import CreatePostFormContainer from '../post_form/create_post_form_container';

class PostIndex extends React.Component {
    constructor(props) {
        super(props); 
    }

    componentDidMount() {
        return this.props.fetchAllPosts();
    }

    render() {
        return(
            <>
                <NavBarContainer/>
                <main className="feed">
                    {this.props.posts.map( (post,idx) => {
                        let user = this.props.users[post.user_id];
                        return <PostIndexItem 
                            key={idx}
                            user={user}
                            post={post}/>;} )} 
                </main>
                <CreatePostFormContainer/>
            </>
        );
    }
}

export default PostIndex;