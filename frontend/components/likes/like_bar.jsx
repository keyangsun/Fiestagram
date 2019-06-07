import React from 'react'; 

class LikeBar extends React.Component {
    constructor(props) {
        super(props);
        this.renderHeart = this.renderHeart.bind(this);
        this.createLike = this.createLike.bind(this);
        this.removeLike = this.removeLike.bind(this); 
        this.renderNumLikes = this.renderNumLikes.bind(this);
    }

    createLike() {
        this.props.createLike({
            post_id: this.props.postId 
        });
    }

    removeLike() {
        let { likes, currUser, removeLike } = this.props; 
        
        for(let i = 0; i < likes.length; i ++) {
            if ( likes[i].user_id === currUser ) {
                removeLike(likes[i]);
                return; 
            }
        }
    }

    renderHeart() {
        let { likers, currUser, history, postId } = this.props; 
        return likers.includes(currUser) ? (
            <section id="icons">
                <img src='/images/red_heart.png' onClick={this.removeLike}/>
                <img src='/images/comment.png' 
                    onClick={() => history.push(`/post/${postId}`)}/>
            </section>
        ) : (
            <section id="icons">
                <img src='/images/heart.png' onClick={this.createLike}/>
                <img src='/images/comment.png'
                        onClick={() => history.push(`/post/${postId}`)}/>
            </section>
        ); 
    }

    renderNumLikes() {
        let { likes } = this.props; 
        if ( likes.length === 0 ) {
            return null; 
        } else if ( likes.length === 1 ) {
            return (<p id="num-likes">1 like</p>); 
        } else {
            return (<p id="num-likes">{likes.length} likes</p>);
        }
    }

    render() {
        return(
            <div className='icon-bar'>
                {this.renderHeart()}
                {this.renderNumLikes()}
            </div>
        );
    }
}

export default LikeBar; 