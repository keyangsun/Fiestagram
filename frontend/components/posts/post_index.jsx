import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
    constructor(props) {
        super(props); 
    }

    componentDidMount() {
        return this.props.fetchAllPosts();
    }

    render() {
        return(
            <main className="feed">
                {this.props.posts.map( (post,idx) => {
                    let user = this.props.users[post.user_id];
                    return <PostIndexItem 
                        key={idx}
                        user={user}
                        post={post}/>;} )} 
            </main>
        );
    }
}

export default PostIndex;