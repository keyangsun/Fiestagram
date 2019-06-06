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
        let { likers, currUser } = this.props; 
        return likers.includes(currUser) ? (
            <>
                <img src='/images/red_heart.png' onClick={this.removeLike}/>
                <img src='/images/comment.png'/>
            </>
        ) : (
            <>
                <img src='/images/heart.png' onClick={this.createLike}/>
                <img src='/images/comment.png'/>
            </>
        ); 
    }

    renderNumLikes() {
        let { likes } = this.props; 
        if ( likes.length === 0 ) {
            return null; 
        } else if ( likes.length === 1 ) {
            return (<p>1 like</p>); 
        } else {
            return (<p>{likes.length} likes</p>);
        }
    }

    render() {
        return(
            <>
            {this.renderHeart()}
            {this.renderNumLikes()}
            </>
        );
    }
}

export default LikeBar; 