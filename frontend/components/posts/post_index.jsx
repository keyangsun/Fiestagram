import React from 'react';
import PostIndexItemContainer from './post_index_item_container';
import NavBarContainer from '../nav_bar/nav_bar_container';
import CreatePostFormContainer from '../post_form/create_post_form_container';
import PopUpContainer from '../pop_up/pop_up_container';

class PostIndex extends React.Component {

    constructor(props) {
        super(props); 
        this.state = {
            selected: null,
            loading: true
        };
        this.renderPopUp = this.renderPopUp.bind(this);
    }

    changeSelected(id) {
        this.setState({
            selected: id
        });
    }

    componentDidMount() {
        this.props.fetchAllPosts();
        this.setState({
            loading: false
        });
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
        if ( this.state.loading === true ) {
            return <i className="fab fa-instagram" />; 
        } else {
            let posts = Object.values(this.props.posts); 
            return(
                <>
                    <NavBarContainer/>
                    <main className="feed">
                        { posts.map( (post,idx) => {
                            let user = this.props.users[post.user_id];
                            return <PostIndexItemContainer 
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
}

export default PostIndex;