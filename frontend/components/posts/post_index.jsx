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
                {this.props.posts.map( (post,idx) => 
                    <PostIndexItem 
                        key={idx}
                        post={post}/> )}
            </main>
        );
    }
}

export default PostIndex;