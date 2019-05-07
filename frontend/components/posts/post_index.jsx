import React from 'react';
import PostIndexItem from './post_index_item';
import NavBarContainer from '../nav_bar/nav_bar_container';
import CreatePostFormContainer from '../post_form/create_post_form_container';
import PopUpContainer from '../pop_up/pop_up_container';

class PostIndex extends React.Component {

    constructor(props) {
        super(props); 
        this.state = {
            selected: null
        };
        this.renderPopUp = this.renderPopUp.bind(this);
    }

    changeSelected(id) {
        this.setState({
            selected: id
        });
    }

    componentDidMount() {
        return this.props.fetchAllPosts();
    }

    renderPopUp() {
        return this.state.selected === null ? (
            <></>
        ) : (
            <PopUpContainer 
                postId={this.state.selected}
                closeModal={this.changeSelected.bind(this)}/>
        );
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
                            showPopUp={this.changeSelected.bind(this)}
                            post={post}/>;} )} 
                </main>
                <CreatePostFormContainer/>
                {this.renderPopUp()}
            </>
        );
    }
}

export default PostIndex;